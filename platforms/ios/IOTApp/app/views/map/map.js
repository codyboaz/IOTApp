var frameModule = require("ui/frame");
var mapsModule = require("nativescript-google-maps-sdk");

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};
}

function onMapReady(args) {
  var mapView = args.object;

  console.log("Setting a marker...");
  var marker = new mapsModule.Marker();
  marker.position = mapsModule.Position.positionFromLatLng(36.652527, -121.797167);
  marker.title = "Room 141";
  marker.snippet = "Click For Info";
  mapView.addMarker(marker);
}


function onMarkerSelect(args) {
  console.log("onMarkerSelect");
   if(args.marker.title == "Room 141"){
     frameModule.topmost().navigate("views/room/room");
   }
}

function onCameraChanged(args) {
    console.log("Camera changed: " + JSON.stringify(args.camera));
}

exports.onMapReady = onMapReady;
exports.onMarkerSelect = onMarkerSelect;
exports.onCameraChanged = onCameraChanged;
