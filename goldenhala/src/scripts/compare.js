/* eslint-disable */
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

function compareSched (scheduleData1, scheduleData2) {
	var letterDays = ["A-Day", "B-Day", "C-Day", "D-Day", "E-Day", "F-Day"];
	var similar = []; // Array containing the shared breaks of the two schedules
	var sharedClass = [] // Array containing same classes


	for (var i = 0; i < 6; i++) {
		var key1 = _.map(scheduleData1.key, "classCode"),
			key2 = _.map(scheduleData2.key, "classCode"),
			sharedClassCodes = _.intersectionWith(key1, key2);

		// schedData is the schedule object of the classes in each letter day
		var schedData1 = scheduleData1.schedule[letterDays[i]], 
			schedData2 = scheduleData2.schedule[letterDays[i]],
			temp1 = [], // temp arrays to store the times of the classes
			temp2 = [],
			startTimeLength = _.map(schedData1, "startTime").length;

		for (var k = 0; k < startTimeLength; k++) {
			// Get the range of the start time to endtime of all classes and add to temp array
			var range = _.range(_.map(schedData1, "startTime")[k], _.map(schedData1, "endTime")[k] + 1, 1); 
			var range2 = _.range(_.map(schedData2, "startTime")[k], _.map(schedData2, "endTime")[k] + 1, 1);
			temp1 =  _.concat(temp1, range);
			temp2 = _.concat(temp2, range2);
		}

		// Find the similarities by finding where the breaks align
		similar.push(_.intersectionWith(_.differenceWith(_.range(1, 33), temp1), _.differenceWith(_.range(1, 33), temp2), _.isEqual));
	}

	for (var i = 0; i < sharedClassCodes.length; i++) {
		var sharedClassObj = _.filter(scheduleData1.key, {"classCode": sharedClassCodes[i]});
		sharedClass.push(sharedClassObj[0]);
	}
		
	console.log({sharedClass: sharedClass, sharedBreak: similar});

	return {sharedClass: sharedClass, sharedBreak: similar};
}

function displayCommon (sharedData) {
	var i,
		j,
		letterDays = ["A-Day", "B-Day", "C-Day", "D-Day", "E-Day", "F-Day"],
		classLength = sharedData.sharedClass.length,
		breakLength = sharedData.sharedBreak.length,
		commonClasses = "Shared Classes: ",
		commonBreaks = "Shared Breaks: ";

	for (i = 0; i < classLength; i++) {
		console.log(sharedData.sharedClass[i].className);
		if (i === classLength - 1) {
			commonClasses += sharedData.sharedClass[i].className + " ";
		} else {
			commonClasses += sharedData.sharedClass[i].className + ", ";
		}
	}

function checkZero(num) {
	if (num == 0) {
		return "00";
	} else {
		return num;
	}
}

	for (i = 0; i < breakLength; i++) {
		commonBreaks += " " + letterDays[i] + ": "
		for (j = 0; j < sharedData.sharedBreak[i].length; j++) {
			var modTime = sharedData.sharedBreak[i][j];
			var time = Math.floor(modTime * 15 / 60) + ":" + checkZero(modTime * 15 % 60);
			if (j === sharedData.sharedBreak[i].length - 1) {
				commonBreaks += time + " "
			} else {
				commonBreaks += time + ", ";
			}
		}
	}
	console.log(commonClasses)
	$("#displayClasses").html(commonClasses);
	$("#displayBreaks").html(commonBreaks);
}

$(document).ready(function() {
	$("#compareSched").on("click", function() {
		var similarData = compareSched(exampleSchedule, exampleSchedule2);
		displayCommon(similarData);
	})
});