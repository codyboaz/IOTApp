var frameModule = require("ui/frame");
var cameraModule = require("camera");
var imageModule = require("ui/image");
var image = new imageModule.Image();


exports.pageLoaded = function(args) {
    var page = args.object;
    image = page.getViewById("myImage");
    page.bindingContext = {};
}

exports.takePic = function() {
  cameraModule.takePicture({width: 500, height: 500, keepAspectRatio: true}).then(function(picture) {
  console.log("Result is an image source instance");
  image.imageSource = picture;
  });

}
