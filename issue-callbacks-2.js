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
var handlers = [];


// loop through for each location [object] in/from the BakuMapDataStructure
for (var locationKey in locations) {
	
	// create an object with a special parameters
	var object = {
		location: locationKey
	};
	
	// open infoWindow; add handler for an onClick event listener 
	var callbackFunction = function (objectFromParameter, typeMsg) {
		console.log("\n");
		console.log('%c ' + typeMsg + ': ', 'color: brown');
		console.log("object packed into callback    : ", object);
		console.log("same object came via parameter : ", objectFromParameter);
	};
	
	// add handler also send the 'object' as an argument
	addListener(callbackFunction, object);
	runCallback(callbackFunction, object);
}

// set callback : save callback function in a list
function addListener(_callbackFunction, _object) {
	handlers.push(function() {
		_callbackFunction(_object, 'Saved in the list : later running');
	});
}
// run callback : just run callbackFunction without adding into the list
function runCallback(_callbackFunction, _object) {
	_callbackFunction(_object, 'Direct running');
}


// question 
console.log("why the same thing is different via argument ? ");

// run saved callbacks
handlers[0]();
handlers[1]();

