var tableData = $(".studentNoPaddingBorder2"),
	timedata = $(".attendTypeColumnData2"),
	i = 0,
	j = 0,
	tablelength = tableData.length,
	timelength = timedata.length,
	array = [[]],
	currIndex = 0;

for (i; i < tablelength; i++) {
	if ((i + 1) % 5 === 0) {
		array.push([])
		array[currIndex].push($(tableData[i]).html());
		currIndex = (i + 1) / 5;
	} else {
		console.log(array, currIndex);
		array[currIndex].push($(tableData[i]).html());
	}
}

currIndex = 0;
for (j; j < timelength; j++) {
	if ((j + 1) % 7 === 0) {
		array[currIndex].push($(timedata[j]).html());
		currIndex = (j + 1) / 7
	} else {
		console.log(array, currIndex);
		array[currIndex].push($(timedata[j]).html());
	}
}

// Roget, add the regex stuff here: