var frameModule = require("ui/frame");
var observable = require("data/observable");
var pageModule = require("ui/page");

var viewModel = new observable.Observable();

exports.pageLoaded = function(args) {
    var page = args.object;
    var getData=page.navigationContext;
    console.log(getData.roomName);
    console.log(getData.imgName);
    viewModel.set("Room", getData.roomName);
    viewModel.set("imgName", getData.imgName);
    page.bindingContext = viewModel;

}


exports.toTeam= function() {
    frameModule.topmost().navigate("views/team/team");
}
