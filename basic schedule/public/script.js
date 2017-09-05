// Example jsonData

var j = {
	schedule: {
		"A-day": [["A", 120], ["B", 60], ["I", 60], ["A", 120], 
				  ["C", 60], ["A", 120], ["C", 60], ["D", 60]],
		"B-day": [["E", 90], ["A", 30], ["B", 60], ["F", 60],
				  ["G", 30], ["G", "D", 30], ["D", 30], ["H", 60], ["A", 60]],
		"C-day": [["A", 120], ["B", 60], ["I", 60], ["A", 120], ["H", 60], ["D", 60]],
		"D-day": [["E", 90], ["A", 30], ["B", 60], ["J", 60],
				 ["G", 90], ["A", 30], ["H", 60], ["A", 60]],
		"E-day": [["A", 180], ["I", 60], ["A", 120], ["H", 60], ["D", 60]],
		"F-day": [["E", 90], ["A", 30], ["B", 60], ["K", 60],
				 ["G", 90], ["A", 90], ["I", 60]]
	},
	key: {
		A: {
			className: "Break",
			teacher: "none",
			location: "none"
		},
		B: {
			className: "Alg 2/Trig H",
			teacher: "Smith",
			location: "B202"
		},
		C: {
			className: "Violin",
			teacher: "none",
			location: "Montague"
		},
		D: {
			className: "Orchestra",
			teacher: "Carlson",
			location: "Montague"
		},
		E: {
			className: "AP Chem",
			teacher: "Pang",
			location: "M206"
		},
		F: {
			className: "Advisory/Chapel",
			teacher: "Jenkins",
			location: "Chapel"
		},
		G: {
			className: "Engineering",
			teacher: "Dengler",
			location: "Gates LC"
		},
		H: {
			className: "Chinese 3H",
			teacher: "Char",
			location: "CH-3"
		},
		I: {
			className: "English 2AB",
			teacher: "Ball",
			location: "S201",
			altLocation: {
				day: "F-day"
			}
		},
		J: {
			className: "Advisory/Assembly",
			teacher: "Jenkins",
			location: "Dillingham"
		},
		K: {
			className: "Long Advisory",
			teacher: "Jenkins",
			location: "M206"
		}
	}
}