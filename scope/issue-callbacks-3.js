// [26.03.2020 17:41:21] 

// just a bunch of data in object; an example
var locations = {
	'location-1-1' : {
		lat : '1',
		lng : '1'
	},
	'location-1-2' : {
		lat : '1',
		lng : '2'
	},
	'location-2-1' : {
		lat : '2',
		lng : '1'
	},
	'location-2-2' : {
		lat : '2',
		lng : '2'
	}
};

// the list of handlers - callback functions that will be stored in this list
var handlers = [];

// save callback function in a list; and pass some object via parameter
function addListener(_callbackFunction, _object) {
	// push the callback function into the 'handlers' list
	handlers.push(function() {
		_callbackFunction(_object);
	});
}


// =============================================================================
// == The Code below is where the difference takes place =======================
// == The issue with for loop ==================================================
// =============================================================================

// -- Version 1 [ adding objects into a list via 'for-loop' statement ]
function runVersion_withForLoop() {

// title for this function
console.group("-- Version 1 [ objects added into a list via 'for-loop' statement ]");

// clean the 'handlers' list, ~remove all added items (callback functions)
handlers = [];

// loop through for every locationKey [ execute the code in place, now ]
// then create an object with locationKey 
// and add the new object with locationKey into the 'handlers' list
for (var locationKey in locations) {
	
	// create an object with a special parameters
	var object = {
		// it stucks in the same #address no matter how many times it re-declares via 'var' [24.03.2020 19:42:53] 
		// if it'll not pass through argument [or if it won't come from parameter]
		location: locationKey
	};
	
	// open infoWindow; add handler for an onClick event listener 
	var callbackFunction = function (objectFromParameter, typeMsg) {
		console.log("\n");
		console.log('%cThis is the body of a callback function Saved in the list ', 'color: brown');
		console.log("\nObject packed into callback"); 
		console.log("the object came from outer/parent function  : ", object); // shoudn't it do re-create the object ? [24.03.2020 19:40:03] 
		console.log("\nObject [the same one] passed via argument ");
		console.log("meant, the same object comes from parameter : ", objectFromParameter);
	};
	
	// add handler also send the 'object' as an argument
	addListener(callbackFunction, object);
}

// run saved callbacks
handlers[0]();
handlers[1]();

// done the version 1 test
console.groupEnd();
console.log("\n");

return;
}


// -- Version 2 [ adding objects into a list via 'add' function ]
function runVersion_withoutForLoop() {

// title for this function
console.group("-- Version 2 [ objects added into a list via 'add' function ]");

// clean the 'handlers' list, ~remove all added items (callback functions)
handlers = [];

// no-loop just create a function [ execute the code when the 'add' function will be called ]
// then create an object with locationKey 
// and add the new object with locationKey into the 'handlers' list
function add(locationKey) {
	
	// create an object with a special parameters
	var object = {
		// it stucks in the same #address no matter how many times it re-declares via 'var' [24.03.2020 19:42:53] 
		// if it'll not pass through argument [or if it won't come from parameter]
		location: locationKey
	};
	
	// open infoWindow; add handler for an onClick event listener 
	var callbackFunction = function (objectFromParameter, typeMsg) {
		console.log("\n");
		console.log('%cThis is the body of a callback function Saved in the list ', 'color: brown');
		console.log("\nObject packed into callback"); 
		console.log("the object came from outer/parent function  : ", object); // shoudn't it do re-create the object ? [24.03.2020 19:40:03] 
		console.log("\nObject [the same one] passed via argument ");
		console.log("meant, the same object comes from parameter : ", objectFromParameter);
	};
	
	// add handler also send the 'object' as an argument
	addListener(callbackFunction, object);
}

// add each location [object] one by one via 'add' function
add('location-1-1');
add('location-1-2');
add('location-2-1');
add('location-2-2');

// run saved callbacks
handlers[0]();
handlers[1]();

// done the version 2 test
console.groupEnd();
console.log("\n");

return;
}


// now run tests
runVersion_withForLoop();    // run the version with    'for-loop'
runVersion_withoutForLoop(); // run the version with no 'for-loop'


// ready v1 [26.03.2020 20:10:21] 
// ready v2 [26.03.2020 20:42:01] 
// question 
console.log("\n\n");
console.log("-- Procedure: ");
console.log(
	" set var to hold a link to an object \n" +
	" pass the object into a [callback] function \n" +
	" save [by pushing the link of] the callback function in a list \n" +
	"\n"
);
console.log("-- Cause & Effect + Expectation: ");
console.log(
	" cause  1: do the Procedure 2 times with    for-loop [ execute the function twice ] \n" +
	" effect 1: output is     the same                  at each executed time \n" +
	"\n" +
	" cause  2: do the Procedure 2 times without for-loop [ execute the function twice ] \n" +
	" effect 2: output is not the same, it is different at each executed time \n" +
	"\n" +
	" expectation: the 'effect 2' is the desirable and expected one " +
	"\n\n"
);
console.log("-- Issue: ");
console.log(
	" the link behaves differently inside a scope of a callback function \n" +
	" when the object passed by argument [or comes via parameter] into the callback function \n" +
	" and when it passed from outer/parent/caller function into the inner/calee callback one \n" +
	"\n"
);
console.log("-- Question: ");
console.log(
	" why the same object sticks on one #address \n" +
	" and causes the object to be changed at the next iteration even \n" +
	" when the variable holding that link (#address) re-declares itself via 'var' at each iteration \n" + 
	"\n"
);

