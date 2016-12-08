var frameModule = require("ui/frame");
var textFieldModule = require("ui/text-field");
var dialogs = require("ui/dialogs");

var SocketIO = require('nativescript-socket.io');


exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};

}

exports.friendLocation = function() {
    frameModule.topmost().navigate("views/friendLocation/friendLocation");
}


