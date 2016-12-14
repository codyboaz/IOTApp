var frameModule = require("ui/frame");
var textFieldModule = require("ui/text-field");
var dialogs = require("ui/dialogs");

        
console.log("loading splash");
exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};
    global.estimoteMaster.running.startRanging();
	console.dump(global.estimoteMaster);
	
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
		message: "IMPORTANT: Please make sure the bluetooth on your phone is turned on. We have iBeacons set up around the building. If you are within range of an iBeacon, you will be sent a notification asking if you would like to see that rooms schedule. Try and find all three iBeacons. On the back of the name tags we have given you is a secret identifier. If you know your friends secret identifier you can enter it in the Find Your Friends portion of our app and track their last known location. Have fun and enjoy the 2016 Capstone Festival.",
		okButtonText: "OK"
	}).then(function () {
		console.log("Dialog closed!");
	});
}