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

var letterDays = ["A-Day", "B-Day", "C-Day", "D-Day", "E-Day", "F-Day"];
var letterDayLength = letterDays.length;
var i;
var classData = [];

for (i = 0; i < letterDayLength; i++) {
	var classes = exampleSchedule.schedule[letterDays[i]];
	var startingTimes = _.map(classes, "startTime");
	var classKey = _.map(classes, "classKey");

	classData.push([]);

	for (var j = 0; j < startingTimes.length; j++) {
		var keyData = exampleSchedule.key[classKey[j]];
		classData[i].push([startingTimes[j], keyData]);
	}
	
}

console.log(classData);