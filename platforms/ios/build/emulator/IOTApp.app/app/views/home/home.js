var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};
}

exports.eventMap = function() {
    frameModule.topmost().navigate("views/map/map");
}

exports.schedule = function() {
    frameModule.topmost().navigate("views/schedule/schedule");
}
