var tableData = $(".studentNoPaddingBorder2"),
	timedata = $(".attendTypeColumnData2"),
	i,
	k,
	j,
	tablelength = tableData.length,
	timelength = timedata.length,
	array = [[]],
	masterData = {
		schedule : { "A-Day": [], "B-Day": [], "C-Day": [],
					 "D-Day": [], "E-Day": [], "F-Day": []
		},
		key: {}
	},
	currIndex = 0,
	letterDays = ["A-Day", "B-Day", "C-Day", "D-Day", "E-Day", "F-Day"];

// Extract class data from the left-side of the table
for (i = 0; i < tablelength; i++) {
	if ((i + 1) % 5 === 0) {
		array.push([]);
		array[currIndex].push($(tableData[i]).html());
		currIndex = (i + 1) / 5;
	} else {
		array[currIndex].push($(tableData[i]).html());
	}
}

// Extract class time from right-side of the table
currIndex = 0;
for (i = 0; i < timelength; i++) {
	if ((i + 1) % 7 === 0) {
		array[currIndex].push($(timedata[i]).html());
		currIndex = (i + 1) / 7;
	} else {
		array[currIndex].push($(timedata[i]).html());
	}
}

console.log(array);

// Process raw data into JSON data to be used in schdule maker
for (i = 0; i < array.length; i++) {
	// Check if array is empty
	if (array[i].length > 0) {
		// Adding the class info to the key
		masterData.key[i] = {
			className: array[i][0],
			classCode: array[i][1],
			teacher: array[i][2].match("\<\/a\>\&nbsp;(.+)")[1],
			semester: array[i][4]
		};
		// Check if classroom is just empty/not included
		if (array[i][3] === "&nbsp;") {
			masterData.key[i].classroom = "";
		} else {
			masterData.key[i].classroom = array[i][3];
		}
		//Loop through each row to distribute class by letter day
		for (k = 5; k < array[i].length - 1; k++) {
			
			if (array[i][k] === "&nbsp;") {
				// masterData.schedule[letterDay].push(".");
			} else {
				// Class times are displayed as "start-end", e.g 12-14
				var classData = array[i][k].split("-");
				var dataObj = {};
				// Check if the class doesn't have a range

				if (classData.length < 2) {
					dataObj.startTime = parseInt(classData[0], 10);
				} else {
					dataObj.startTime = parseInt(classData[0], 10);
					dataObj.endTime = parseInt(classData[1], 10);
				}
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
}

console.log(masterData);

