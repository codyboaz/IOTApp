var frameModule = require("ui/frame");
var textFieldModule = require("ui/text-field");
var dialogs = require("ui/dialogs");
var permissions = require( "nativescript-permissions" );
var platform = require("platform");
console.log("loading splash");
exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};
    if(platform.device.os === platform.platformNames.android) {
	    permissions.requestPermission(android.Manifest.permission.ACCESS_COARSE_LOCATION, "Need permission for beacon locations")
	        .then(function() {
	            console.log("Access granted");
	        })
	        .catch(function() {
	            console.log("Access denied");
	        });
	    permissions.requestPermission(android.Manifest.permission.ACCESS_FINE_LOCATION, "Need permission for beacon locations")
	        .then(function() {
	            console.log("Access granted");
	        })
	        .catch(function() {
	            console.log("Access denied");
	        });
    }
    global.estimoteMaster.running.startRanging();
	
}

exports.homepage = function() {
	console.log("loading home");
	var navigationOptions = {
        moduleName: 'views/home/home',
        context: {}
    }
    frameModule.topmost().navigate(navigationOptions);
}

exports.instructions = function() {
	console.log("dialog box");
	dialogs.alert({
		title: "Instructions",
		message: "IMPORTANT: Please make sure the bluetooth on your phone is turned on. We have iBeacons set up around the building. If you are on the Event Map or Schedule pages and are within range of an iBeacon, you will be sent a notification asking if you would like to see that rooms schedule. Try and find all three iBeacons. On the back of the name tags we have given you is a secret identifier. If you know your friends secret identifier you can enter it in the Find Your Friends portion of our app and track their last known location. Have fun and enjoy the 2016 Capstone Festival.",
		okButtonText: "OK"
	}).then(function () {
		console.log("Dialog closed!");
	});
}
