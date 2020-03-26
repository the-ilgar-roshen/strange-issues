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
var houses = {
	'location-1-1' : {
		name: "House 1"
	},
	'location-1-2' : {
		name: "House 2"
	},
	'location-2-1' : {
		name: "House 3"
	},
	'location-2-2' : {
		name: "House 4"
	}
}

var list = [];


// loop through for each location [object] in/from the BakuMapDataStructure
for (var locationKey in locations) {
	// get one location data 
	// and make a shortcut variable for 'locations[locationKey]'
	var locationData = locations[locationKey];
	
	// get houses of this location
	var houses = getHousesByLocationKey(locationKey);
	
	// create an info window with a special parameters
	var infoWindow = addInfoWindowForMarker(locationKey, houses);
	
	// open infoWindow; add handler for an onClick event listener 
	var onMarkerClickHandler = function (infoWindowFromParameter) {
		console.log("infoWindow packed into callback    : ", infoWindow);
		console.log("same infoWindow came via parameter : ", infoWindowFromParameter);
	};
	
	// add handler also send the 'infoWindow' as an argument
	setMarkerOnClick(onMarkerClickHandler, infoWindow);
	
}

// get data from collection
function getHousesByLocationKey(locationKey) {
	return locations[locationKey];
}

// emulate object creation
function addInfoWindowForMarker(locationKey, houses) {
	
	var newObject = new Object();
	newObject.location = locationKey;
	newObject.houses = houses;
	
	return newObject;
}

// set callback 
function setMarkerOnClick(_callback, _objectViaArgument) {
	
	// add a click listener 
	addMarkerListener(function () {
		
		console.log("\n");
		console.log('%c addMarkerListener: ', 'color: brown');
		
		_callback(_objectViaArgument);
	});
}

// add callback to list
function addMarkerListener(_handler) {
	list.push(_handler);
}

function clickOn(i) {
	return list[i]();
}

// question 
console.log("why the same thing is different via argument ? ");

// call those callbacks
clickOn(0);
clickOn(1);
