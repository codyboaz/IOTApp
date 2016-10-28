var frameModule = require("ui/frame");
var cameraModule = require("camera");
var imageModule = require("ui/image");
var image = new imageModule.Image();


exports.pageLoaded = function(args) {
    var page = args.object;
    image = page.getViewById("myImage");
    image.src = "https://placehold.it/150x150";
    page.bindingContext = {};
}

exports.takePic = function() {
  cameraModule.takePicture({width: 300, height: 300, keepAspectRatio: true}).then(function(picture) {
  console.log("Result is an image source instance");
  image.imageSource = picture;
  });

}
