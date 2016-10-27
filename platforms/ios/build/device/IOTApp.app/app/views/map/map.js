var frameModule = require("ui/frame");
var mapsModule = require("nativescript-google-maps-sdk");

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};
}

function onMapReady(args) {
  var mapView = args.object;

  console.log("Setting a marker...");
  var marker104 = new mapsModule.Marker();
  marker104.position = mapsModule.Position.positionFromLatLng(36.652527, -121.797167);
  marker104.title = "Room 104";
  marker104.snippet = "Click For Info";
  mapView.addMarker(marker104);

  var markerLoby = new mapsModule.Marker();
  markerLoby.position = mapsModule.Position.positionFromLatLng(36.652408, -121.797283);
  markerLoby.title = "Poster Room";
  markerLoby.snippet = "Click For Info";
  mapView.addMarker(markerLoby);

  var marker111 = new mapsModule.Marker();
  marker111.position = mapsModule.Position.positionFromLatLng(36.652398, -121.797431);
  marker111.title = "Room 111";
  marker111.snippet = "Click For Info";
  mapView.addMarker(marker111);
}


function onMarkerSelect(args) {

   if(args.marker.title == "Room 104"){
     var navigationOptions={
         moduleName:'views/room/room',
         context:{
             roomName: "Room 104"

         }
     }

     frameModule.topmost().navigate(navigationOptions);
   }
   else if(args.marker.title == "Poster Room"){
        var navigationOptions={
            moduleName:'views/room/room',
            context:{
                roomName: "Poster Room"

            }
        }

        frameModule.topmost().navigate(navigationOptions);
      }

      else if(args.marker.title == "Room 111"){
           var navigationOptions={
               moduleName:'views/room/room',
               context:{
                   roomName: "Room 111"

               }
           }

           frameModule.topmost().navigate(navigationOptions);
         }
}

function onCameraChanged(args) {
    console.log("Camera changed: " + JSON.stringify(args.camera));
}

exports.onMapReady = onMapReady;
exports.onMarkerSelect = onMarkerSelect;
exports.onCameraChanged = onCameraChanged;
