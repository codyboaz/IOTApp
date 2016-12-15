var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");
var WS = require('nativescript-websockets');
console.log("home started");

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};
    console.dump(global.estimoteMaster);

}

exports.eventMap = function() {

    var navigationOptions = {
        moduleName: 'views/map/map',
        context: {
            fromHome: true,
        }
    }
    console.log("loading map");
    frameModule.topmost().navigate(navigationOptions);
}

exports.schedule = function() {
    var navigationOptions = {
        moduleName: 'views/schedule/schedule',
        context: {
            fromHome: true,
        }
    }
    console.log("loading schedule");
    frameModule.topmost().navigate(navigationOptions);
}

exports.findFriends = function() {
    frameModule.topmost().navigate("views/findFriends/findFriends");
}