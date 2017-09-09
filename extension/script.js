var tableData = $(".studentNoPaddingBorder2"), // Left side column boxes containing class data
	timedata = $(".attendTypeColumnData2"), // Right side column boxes containing schedule data
	i,
	k,
	tablelength = tableData.length, 
	timelength = timedata.length,
	tempData = [[]], // Temp data to store extracted information from tableData and timeData
	masterData = { // Data to store final JSON data
		schedule : { "A-Day": [], "B-Day": [], "C-Day": [],
					 "D-Day": [], "E-Day": [], "F-Day": []
		},
		key: {}
	},
	currIndex = 0, // Indicates what index to push the data to in tempData (sorted by row).
	letterDays = ["A-Day", "B-Day", "C-Day", "D-Day", "E-Day", "F-Day"];

// Extract class data from the left-side of the table
for (i = 0; i < tablelength; i++) {
	if ((i + 1) % 5 === 0) {
		tempData.push([]);
		tempData[currIndex].push($(tableData[i]).html());
		currIndex = (i + 1) / 5;
	} else {
		tempData[currIndex].push($(tableData[i]).html());
	}
}

// Extract class time from right-side of the table
currIndex = 0;
for (i = 0; i < timelength; i++) {
	if ((i + 1) % 7 === 0) {
		tempData[currIndex].push($(timedata[i]).html());
		currIndex = (i + 1) / 7;
	} else {
		tempData[currIndex].push($(timedata[i]).html());
	}
}

// Process raw data into JSON data to be used in schdule maker
for (i = 0; i < tempData.length; i++) {
	// Check if array in tempData is empty
	if (tempData[i].length > 0) {
		// Adding the class info to the key
		masterData.key[i] = {
			className: tempData[i][0],
			classCode: tempData[i][1],
			teacher: tempData[i][2].match("\<\/a\>\&nbsp;(.+)")[1],
			semester: tempData[i][4]
		};
		// Check if classroom is just empty/not included
		if (tempData[i][3] === "&nbsp;") {
			masterData.key[i].classroom = "";
		} else {
			masterData.key[i].classroom = tempData[i][3];
		}
		// Loop through each row to distribute class by letter day
		for (k = 5; k < tempData[i].length - 1; k++) {
			// Check to make sure the class isn't empty (&nbsp;)
			if (tempData[i][k] !== "&nbsp;") {
				// Class times are displayed as "start-end", e.g 12-14
				var classData = tempData[i][k].split("-"),
					dataObj = {};

				// Check if the class doesn't have a range
				if (classData.length < 2) {
					dataObj.startTime = parseInt(classData[0], 10);
					dataObj.endTime = parseInt(classData[0], 10);
				} else {
					dataObj.startTime = parseInt(classData[0], 10);
					dataObj.endTime = parseInt(classData[1], 10);
				}
				dataObj.classTime = (dataObj.endTime - dataObj.startTime + 1) * 15;
				// Put the key data in the front
				dataObj.classKey = i;
				masterData.schedule[letterDays[k - 5]].push(dataObj);
			}
		}	
	}
}

// Loop through each letter day and sort class schedule
for (var i = 0; i < 6; i++) {
	masterData.schedule[letterDays[i]] = _.sortBy(masterData.schedule[letterDays[i]], "startTime");

	for (var k = 0; k < masterData.schedule[letterDays[i]].length; k++) {
		var previousClass = masterData.schedule[letterDays[i]][k - 1],
			currentClass = masterData.schedule[letterDays[i]][k];
		if ((k !== 0) && (previousClass.endTime > currentClass.startTime)) {

				var conflictObj = {
					classKey: [previousClass.classKey, currentClass.classKey],
					conflictStart: currentClass.startTime,
					conflictEnd: previousClass.endTime
				}
				conflictObj.classTime = (conflictObj.conflictEnd - conflictObj.conflictStart + 1) * 15;
				previousClass.endTime = conflictObj.conflictStart - 1;
				currentClass.startTime = conflictObj.conflictEnd + 1;

				previousClass.classTime = (previousClass.endTime - previousClass.startTime + 1) * 15;
				currentClass.classTime = (currentClass.endTime - currentClass.startTime + 1) * 15;

				masterData.schedule[letterDays[i]].splice(k, 0, conflictObj);
		}
	}
}

var dataStr = JSON.stringify(masterData),
	dataUri = "data:application/json;charset=utf-8,"+ encodeURIComponent(dataStr),
	exportFileDefaultName = "data.json",
	linkElement = document.createElement("a");
	
linkElement.setAttribute("href", dataUri);
linkElement.setAttribute("download", exportFileDefaultName);
linkElement.click();

