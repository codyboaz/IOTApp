var frameModule = require("ui/frame");

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};
}
