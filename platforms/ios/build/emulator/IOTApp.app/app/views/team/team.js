var frameModule = require("ui/frame");
var observable = require("data/observable");
var pageModule = require("ui/page");
var estimote = require("../../lib/read-estimotes");
var viewModel = new observable.Observable();

exports.pageLoaded = function(args) {
    
    var page = args.object;
    var getData = page.navigationContext;
    console.log(getData.teamName);
    console.log(getData.logoName);
    estimote();
    viewModel.set("teamName", getData.teamName);
    viewModel.set("logoName", getData.logoName);
    viewModel.set("description", getData.description);
    viewModel.set("team", getData.team);
    viewModel.set("mentor", getData.mentor);
    page.bindingContext = viewModel;

}
