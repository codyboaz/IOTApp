var frameModule = require("ui/frame");

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};
}

exports.toRooms = function() {
    frameModule.topmost().navigate("views/room/room");
}
