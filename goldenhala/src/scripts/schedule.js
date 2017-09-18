/* eslint-disable */

// Example JSON schedule data
var exampleSchedule = {
	"schedule": {
		"A-Day": [{"startTime":1,"endTime":4,"classTime":60,"classKey":11},
			{"startTime":9,"endTime":12,"classTime":60,"classKey":0},
			{"startTime":25,"endTime":28,"classTime":60,"classKey":7}],
		"B-Day":[{"startTime":1,"endTime":4,"classTime":60,"classKey":11},
			{"startTime":5,"endTime":8,"classTime":60,"classKey":8},
			{"startTime":9,"endTime":12,"classTime":60,"classKey":0},
			{"startTime":13,"endTime":13,"classTime":15,"classKey":1},
			{"startTime":14,"endTime":16,"classTime":45,"classKey":4},
			{"startTime":17,"endTime":22,"classTime":90,"classKey":5},
			{"startTime":29,"endTime":32,"classTime":60,"classKey":9}],
		"C-Day":[{"startTime":1,"endTime":4,"classTime":60,"classKey":11},
			{"startTime":9,"endTime":12,"classTime":60,"classKey":0},
			{"startTime":29,"endTime":32,"classTime":60,"classKey":9}],
		"D-Day":[{"startTime":1,"endTime":4,"classTime":60,"classKey":11},
			{"startTime":5,"endTime":8,"classTime":60,"classKey":8},
			{"startTime":9,"endTime":12,"classTime":60,"classKey":0},
			{"startTime":13,"endTime":13,"classTime":15,"classKey":1},
			{"startTime":14,"endTime":16,"classTime":45,"classKey":3},
			{"startTime":17,"endTime":22,"classTime":90,"classKey":5},
			{"startTime":25,"endTime":28,"classTime":60,"classKey":7},
			{"startTime":29,"endTime":32,"classTime":60,"classKey":9}],
		"E-Day":[{"startTime":1,"endTime":4,"classTime":60,"classKey":11},
			{"startTime":5,"endTime":8,"classTime":60,"classKey":8},
			{"startTime":9,"endTime":12,"classTime":60,"classKey":10},
			{"startTime":25,"endTime":28,"classTime":60,"classKey":7},
			{"startTime":29,"endTime":32,"classTime":60,"classKey":9}],
		"F-Day":[{"startTime":1,"endTime":4,"classTime":60,"classKey":11},
			{"startTime":5,"endTime":8,"classTime":60,"classKey":8},
			{"startTime":9,"endTime":12,"classTime":60,"classKey":0},
			{"startTime":13,"endTime":13,"classTime":15,"classKey":1},
			{"startTime":14,"endTime":16,"classTime":45,"classKey":2},
			{"startTime":17,"endTime":22,"classTime":90,"classKey":5},
			{"startTime":25,"endTime":28,"classTime":60,"classKey":7}]
	},
	"key":{
		"0": {"className":"ALGE II/TRIG H ALGEBRA II/TRIG (H)","classCode":"2331-102","teacher":"Kelly C. Smith","semester":"S1","classroom":"B202"},
		"1": {"className":"AP-10","classCode":"9521-120","teacher":"Dr. Ka'eokulani D. Vasconcellos","semester":"S1","classroom":"G107"},
		"2": {"className":"AP-10 EXTENDED","classCode":"9561-101","teacher":"Marguerite K. Ashford-Hirano","semester":"S1","classroom":""},
		"3": {"className":"ASSEM 10","classCode":"9101-101","teacher":"Padraic M. C. Tune","semester":"S1","classroom":"DILL"},
		"4": {"className":"CHAPEL 10","classCode":"9061-101","teacher":"Chaplain George W. Scott","semester":"S1","classroom":"CHAP"},
		"5": {"className":"CHEM H CHEMISTRY (H)","classCode":"3091-106","teacher":"Christopher H. W. Chock","semester":"S1","classroom":"M205"},
		"6": {"className":"CLASS DEANS' EMAIL","classCode":"9610-102","teacher":"Padraic M. C. Tune","semester":"S1","classroom":""},
		"7": {"className":"ECONOMICS ECONOMICS","classCode":"4371-101","teacher":"Michael E. Georgi","semester":"S1","classroom":"G205"},
		"8": {"className":"ENG 2 AB ENGLISH","classCode":"0081-103","teacher":"Nora O. Keller","semester":"S1","classroom":"P101"},
		"9": {"className":"MND CHIN III H MAND CHINESE III (H)","classCode":"1761-102","teacher":"Linette L. Char","semester":"S1","classroom":"CH-3"},
		"10": {"className":"SENATE","classCode":"9241-101","teacher":"Scott K. Herzer","semester":"S1","classroom":"A206"},
		"11": {"className":"SYMPH ORCH SYMPHONY ORCHESTRA","classCode":"5651-101","teacher":"Dr. Sven J. Carlson","semester":"S1","classroom":"ORCH"}
	}
}

var exampleSchedule2 = { 
	"schedule": {
		"A-Day":[{"startTime":9,"endTime":12,"classTime":60,"classKey":0},
			{"startTime":13,"endTime":16,"classTime":60,"classKey":9},
			{"startTime":29,"endTime":32,"classTime":60,"classKey":7}],
		"B-Day":[{"startTime":1,"endTime":6,"classTime":90,"classKey":1},
			{"startTime":9,"endTime":12,"classTime":60,"classKey":0},
			{"startTime":13,"endTime":13,"classTime":15,"classKey":2},
			{"startTime":14,"endTime":16,"classTime":45,"classKey":5},
			{"startTime":17,"endTime":20,"classTime":60,"classKey":10},
			{"classKey":[10,8],"conflictStart":21,"conflictEnd":22,"classTime":30},
			{"startTime":23,"endTime":24,"classTime":30,"classKey":8},
			{"startTime":25,"endTime":28,"classTime":60,"classKey":11}],
		"C-Day":[{"startTime":9,"endTime":12,"classTime":60,"classKey":0},
			{"startTime":13,"endTime":16,"classTime":60,"classKey":9},
			{"startTime":25,"endTime":28,"classTime":60,"classKey":11},
			{"startTime":29,"endTime":32,"classTime":60,"classKey":7}],
		"D-Day":[{"startTime":1,"endTime":6,"classTime":90,"classKey":1},
			{"startTime":9,"endTime":12,"classTime":60,"classKey":0},
			{"startTime":13,"endTime":13,"classTime":15,"classKey":2},
			{"startTime":14,"endTime":16,"classTime":45,"classKey":4},
			{"startTime":17,"endTime":22,"classTime":90,"classKey":10},
			{"startTime":25,"endTime":28,"classTime":60,"classKey":11}],
		"E-Day":[{"startTime":13,"endTime":16,"classTime":60,"classKey":9},
			{"startTime":25,"endTime":28,"classTime":60,"classKey":11},
			{"startTime":29,"endTime":32,"classTime":60,"classKey":7}],
		"F-Day":[{"startTime":1,"endTime":6,"classTime":90,"classKey":1},
			{"startTime":9,"endTime":12,"classTime":60,"classKey":0},
			{"startTime":13,"endTime":13,"classTime":15,"classKey":2},
			{"startTime":14,"endTime":16,"classTime":45,"classKey":3},
			{"startTime":17,"endTime":22,"classTime":90,"classKey":10},
			{"startTime":29,"endTime":32,"classTime":60,"classKey":9}]
	},
	"key": {
		"0": {"className":"ALGE II/TRIG H ALGEBRA II/TRIG (H)","classCode":"2331-102","teacher":"Kelly C. Smith","semester":"S1","classroom":"B202"},
		"1": {"className":"AP CHEM AP CHEMISTRY","classCode":"3171-106","teacher":"Cullen K. T. Pang","semester":"S1","classroom":"M206"},
		"2": {"className":"AP-10","classCode":"9521-108","teacher":"Adam P. Jenkins","semester":"S1","classroom":"M206"},
		"3": {"className":"AP-10 EXTENDED","classCode":"9561-101","teacher":"Marguerite K. Ashford-Hirano","semester":"S1","classroom":""},
		"4": {"className":"ASSEM 10","classCode":"9101-101","teacher":"Padraic M. C. Tune","semester":"S1","classroom":"DILL"},
		"5": {"className":"CHAPEL 10","classCode":"9061-101","teacher":"Chaplain George W. Scott","semester":"S1","classroom":"CHAP"},
		"6": {"className":"CLASS DEANS' EMAIL","classCode":"9610-102","teacher":"Padraic M. C. Tune","semester":"S1","classroom":""},
		"7": {"className":"CONC ORCH II REH CONCERT ORCHESTRA II","classCode":"5601-101","teacher":"Dr. Sven J. Carlson","semester":"S1","classroom":"ORCH"},
		"8": {"className":"CONC ORCH II VLN/VLA CONCERT ORCHESTRA II","classCode":"5611-101","teacher":"Mr. Craig J. S. Young","semester":"S1","classroom":"ORCH"},
		"9": {"className":"ENG 2 AB ENGLISH","classCode":"0081-119","teacher":"Dr David Michael Ball","semester":"S1","classroom":"S201"},
		"10": {"className":"ENGINEERING PROJ I & II","classCode":"3671-101","teacher":"Justin Y. Lai","semester":"S1","classroom":"G-CLC"},
		"11": {"className":"MND CHIN III H MAND CHINESE III (H)","classCode":"1761-101","teacher":"Linette L. Char","semester":"S1","classroom":"CH-3"}
	}
}

var i, j;

function addColors (scheduleData) {
	var colors = ["#FF4E50", "#FC913A", "#F9D423", "#EDE574", "#E1F5C4", "#FC9D9A", "#F9CDAD", "#C8C8A9", "#83AF9B", "#69D2E7", "#A7DBD8", "#E0E4CC", "#F38630", "#F3FFCC", "#E9FCD9", "#DEFAE6", "#D4F7F2", "#C9F4FF", "#9CC4E4", "#E9F2F9"];
	var classLen = Object.keys(scheduleData.key).length;
	for (var i = 0; i < classLen; i++) {
		scheduleData.key[i].color = colors[i];
	}
	return scheduleData;
}

function formatClassData (scheduleData) {
	var letterDays = ["A-Day", "B-Day", "C-Day", "D-Day", "E-Day", "F-Day"], // Array for pushing the schedule data for each letter day
	classRanges = [[], [], [], [], [], []], // Array to store the ranges of the class' starting and ending time
	sortedSchedule = [[], [], [], [], [], []]; // Final schedule data to use for printing in schedule

	// Loop throught each letter day
	for (i = 0; i < 6; i++) {
		var classes = scheduleData.schedule[letterDays[i]], // Classes of a certain letter day
			startingTimes = _.map(classes, "startTime"), // Array containing all starting times
			endingTimes = _.map(classes, "endTime"), // Array containing all ending times
			classKey = _.map(classes, "classKey"); // Array containing all class keys

		
		// Loop through all the startingTimes to get ranges of class time and push class data to sortedSchedule
		for (j = 0; j < startingTimes.length; j++) {
			if (startingTimes[j] !== undefined) {
				sortedSchedule[i].push({
					startTime: startingTimes[j],
					endTime: endingTimes[j],
					classData: scheduleData.key[classKey[j]]
				});
				// Class mods are the ranges of the class times
				var classMods = _.range(startingTimes[j], endingTimes[j] + 1, 1) // Getting range of the classes (using start and end times)
				classRanges[i] = _.concat(classRanges[i], classMods);
			} else {
				var conflictClass = scheduleData.schedule[letterDays[i]][j];
				sortedSchedule[i].push({
					startTime: conflictClass.conflictStart,
					endTime: conflictClass.conflictEnd,
					classData: [scheduleData.key[conflictClass.classKey[0]], scheduleData.key[conflictClass.classKey[1]]]
				});
			}
		}

		// Push array of break times
		classRanges[i].push(_.differenceWith(_.range(1, 33), classRanges[i]));

		var breaksArray = classRanges[i][classRanges[i].length - 1]; // Array containing all the break times

		// Loop through all the break times
		for (j = 0; j < breaksArray.length; j++) {
			// Array for break structure
			var defaultBreak = {
				startTime: breaksArray[j],
				endTime: breaksArray[j],
				classData: "."
			}
			// Check if it isn't the first break
			if (j !== 0) {
				// Check whether the break can be combined with previous
				if (breaksArray[j] == breaksArray[j - 1] + 1) {
					sortedSchedule[i][sortedSchedule[i].length - 1].endTime = breaksArray[j];
				} else {
					sortedSchedule[i].push(defaultBreak);
				}
			} else {
				sortedSchedule[i].push(defaultBreak);
			}
		}
		// Sort the final schedule data by starting time
		sortedSchedule[i] = _.sortBy(sortedSchedule[i], "startTime");
	}	
	return sortedSchedule;
}

function makeGrid (scheduleData, grid) {
	$(grid).gridstack({cellHeight: 30, width: 6, staticGrid: true, disableDrag: true, disableResize: true, verticalMargin: 0});
	for (i = 0; i < 6; i++) {
		var rowNum = 0;
  	for (j = 0; j < scheduleData[i].length; j++) {
  		var currentClass = scheduleData[i][j];
  		// Object for configuring the grid
  		var config = {
  			blockHeight: scheduleData[i][j].endTime - scheduleData[i][j].startTime + 1,
  			column: i,
  			data: [],
  			row: rowNum
   		}
  		rowNum += config.blockHeight;

  		if (currentClass.classData !== ".") {
  			if (currentClass.classData.length !== 2) {
  				config.name = currentClass.classData.className;
  				config.room = currentClass.classData.classroom;
  				config.color = currentClass.classData.color;
  			} else {
  				config.name = "Conflict with " + currentClass.classData[0].className + " and " + currentClass.classData[1].className;
  				config.room = "";
  				config.color = "red";
  			}
  		} else {
  			if (currentClass.classData === ".") {
	  			config.name = "Break";
	  			config.room = "";
	  			config.color =  "white";
  			} 
  		}
  		// addNewGridItem(config, grid);
  		var $grid = $(grid).data("gridstack");
  		var gridItem = $("<div class='grid-stack-item' data-gs-locked style='text-align: center; font-size: 80%; background-color: " + config.color + "'> <div class='grid-stack-item-content'>" + config.name + "\n" + config.room + "</div></div>");
  		$grid.addWidget(gridItem, config.column, config.row, 1, config.blockHeight);
		}
	}
}

$("button#egeiuh").ready(function() {
	var schedData = formatClassData(addColors(exampleSchedule));
	var schedData2 = formatClassData(addColors(exampleSchedule2));
  makeGrid(schedData, "#sched1");
  makeGrid(schedData2, "#sched2");
});
