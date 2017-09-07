// https://mostafa-samir.github.io/async-iterative-patterns-pt1/
function waterfallOverArray (list, iterator, callback) {
	var nextItemIndex = 0;  //keep track of the index of the next item to be processed
	function report () {
		nextItemIndex++;
		// if nextItemIndex equals the number of items in list, then we're done
		if(nextItemIndex === list.length)
			callback();
		else
			// otherwise, call the iterator on the next item
			iterator(list[nextItemIndex], report);
	}
	// instead of starting all the iterations, we only start the 1st one
	iterator(list[0], report);
}

// Modified version of the original WaterfallOver object, to iterate through objects instead of arrays.
function waterfallOverObject (obj, iterator, callback) {
	var nextItemIndex = 0;  //keep track of the index of the next item to be processed
	function report () {
		nextItemIndex++;
		// if nextItemIndex equals the number of items in object, then we're done
		if(nextItemIndex === Object.keys(obj).length)
			callback();
		else
			// otherwise, call the iterator on the next item
			iterator(Object.keys(obj)[nextItemIndex], report);
	}
	// instead of starting all the iterations, we only start the 1st one
	iterator(Object.keys(obj)[0], report);
}

module.exports = {
	waterfallOverArray: waterfallOverArray,
	waterfallOverObject: waterfallOverObject
}