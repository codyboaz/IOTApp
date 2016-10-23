var frameModule = require("ui/frame");
var textFieldModule = require("ui/text-field");

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};
}

exports.homepage = function() {
    frameModule.topmost().navigate("views/home/home");
}
