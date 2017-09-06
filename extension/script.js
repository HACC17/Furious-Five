var tableData = $(".studentNoPaddingBorder2"),
	timedata = $(".attendTypeColumnData2"),
	i = 0,
	k = 0,
	m = 0,
	tablelength = tableData.length,
	timelength = timedata.length,
	array = [[]],
	masterData = {
		schedule : {
			"A-Day": [],
			"B-Day": [],
			"C-Day": [],
			"D-Day": [],
			"E-Day": [],
			"F-Day": []
		},
		key: {}
	},
	currIndex = 0;

// Pull class data from table
for (i; i < tablelength; i++) {
	if ((i + 1) % 5 === 0) {
		array.push([])
		array[currIndex].push($(tableData[i]).html());
		currIndex = (i + 1) / 5;
	} else {
		array[currIndex].push($(tableData[i]).html());
	}
}

// Pull class time from table
currIndex = 0;
i = 0 
for (i; i < timelength; i++) {
	if ((i + 1) % 7 === 0) {
		array[currIndex].push($(timedata[i]).html());
		currIndex = (i + 1) / 7
	} else {
		array[currIndex].push($(timedata[i]).html());
	}
}

console.log(array);

// Process raw data into JSON data to be used in schdule maker
for (k; k < array.length; k++) {
	if (array[k].length > 0) {
		var letterDay;
		var l = 5;
		masterData.key[k] = {};
		masterData.key[k].className = array[k][0];
		masterData.key[k].classCode = array[k][1];
		masterData.key[k].teacher = array[k][2].match("\<\/a\>\&nbsp;(.+)")[1];
		if (array[k][3] == "&nbsp;") {
			masterData.key[k].classroom = "";
		} else {
			masterData.key[k].classroom = array[k][3];
		}
		masterData.key[k].semester = array[k][4];
		for (l; l < array[k].length - 1; l++) {
			switch (l) {
				case 5:
					letterDay = "A-Day";
					break;
				case 6:
					letterDay = "B-Day";
					break;
				case 7:
					letterDay = "C-Day";
					break;
				case 8:
					letterDay = "D-Day";
					break;
				case 9:
					letterDay = "E-Day";
					break;
				case 10:
					letterDay = "F-Day";
					break;
			}
			if (array[k][l] == "&nbsp;") {
				// masterData.schedule[letterDay].push(".");
			} else {
				var classData = array[k][l].split("-");
				if (classData.length < 2) {
					classData[0] = parseInt(classData[0]);
				} else {
					classData[0] = parseInt(classData[0]);
					classData[1] = parseInt(classData[1]);
				}
				classData.unshift(k);
				masterData.schedule[letterDay].push(classData);
			}
		}	
	} else {
		console.log("empty array");
	}
}

console.log(masterData);

