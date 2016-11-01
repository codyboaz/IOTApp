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
    markerLoby.title = "Main Lobby";
    markerLoby.snippet = "Click For Info";
    mapView.addMarker(markerLoby);

    var marker110 = new mapsModule.Marker();
    marker110.position = mapsModule.Position.positionFromLatLng(36.652398, -121.797431);
    marker110.title = "Room 110";
    marker110.snippet = "Click For Info";
    mapView.addMarker(marker110);

    var marker105 = new mapsModule.Marker();
    marker105.position = mapsModule.Position.positionFromLatLng(36.652583, -121.797331);
    marker105.title = "Room 105";
    marker105.snippet = "Click For Info";
    mapView.addMarker(marker105);
}


function onMarkerSelect(args) {

    if (args.marker.title == "Room 104") {
        var navigationOptions = {
            moduleName: 'views/room/room',
            context: {
                roomName: "Room 104",
                imgName: "~/views/images/room104.png",
                id: "104"
              }
        }

        frameModule.topmost().navigate(navigationOptions);
    } else if (args.marker.title == "Main Lobby") {
        var navigationOptions = {
            moduleName: 'views/room/room',
            context: {
                roomName: "Poster Room",
                imgName: "~/views/images/bitLoby.png",
                id: "lobby"
              }
        }

        frameModule.topmost().navigate(navigationOptions);
    } else if (args.marker.title == "Room 110") {
        var navigationOptions = {
            moduleName: 'views/room/room',
            context: {
                roomName: "Room 110",
                imgName: "~/views/images/room110.png",
                id: "110"
              }
        }

        frameModule.topmost().navigate(navigationOptions);
    } else if (args.marker.title == "Room 105") {
        var navigationOptions = {
            moduleName: 'views/room/room',
            context: {
                roomName: "Room 105",
                imgName: "~/views/images/room110.png",
                id: "105"
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
