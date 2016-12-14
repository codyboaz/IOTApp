var frameModule = require("ui/frame");
var textFieldModule = require("ui/text-field");
var dialogs = require("ui/dialogs");
var WS = require('nativescript-websockets');
var mapsModule = require("nativescript-google-maps-sdk");

var lat;
var lng;
var time;
var name;

var mySocket;
var socket;

var isMapReady = false;
var dataStored = null;
var mapArgs = null;
exports.pageLoaded = function(args) {
    var page = args.object;
    var getData = page.navigationContext;
    var location;
    var jsonDoc = JSON.stringify({"simple":getData.secret_name});
    if (socket) {
        console.log("socket status: " + socket.connected);
        if (socket.connected) {
            socket.send('42["app_friend_location",'+jsonDoc+']');
            return; // if its already connected and active, break this function here
        }
    }
    mySocket = new WS("ws://linkality.com/socket.io/?transport=websocket", {});

    mySocket.open();

    mySocket.on('open', function(iSocket) {
        socket = iSocket;
    });

    mySocket.on('message', function(iSocket, message) {
        console.log(message);
        if(message.indexOf("friend_location")!=-1){
            var msg = JSON.parse(message.substr(2, message.length-1));
            console.log(message.substr(2, message.length-1));
            if(msg[0]=="friend_location"){
                console.log("map status: " + isMapReady);
                if (isMapReady) {
                    console.log(msg[1]);
                    renderMap(msg[1], mapArgs);
                } else {
                    console.log("stored data");
                    dataStored = msg[1];
                }
            }
        }else if(message.indexOf("session_id")!=-1){
            console.log('42["app_friend_location",'+jsonDoc+']');
            iSocket.send('42["app_friend_location",'+jsonDoc+']');
        }
    });
    page.bindingContext = {};
}

function renderMap(data, args) {
    if(data.hasOwnProperty('location')){
        isMapReady = false;
        console.log(data.location.lat);
        console.log(data.location.lng);
        console.log(data.history.created);
        console.log(data.location.label);
        lat = data.location.lat;
        lng = data.location.lng;
        time = data.history.created;
        time = "Date: " + time.substring(0, 10) + "\nTime: " + time.substring(11, 19);;
        name = data.location.label;
        var mapView = args.object;
        console.log(lat);
        console.log(lng);
        console.log("Setting a marker...");
        var marker = new mapsModule.Marker();
        marker.position = mapsModule.Position.positionFromLatLng(lat, lng);
        marker.title = name;
        marker.snippet = time;
        mapView.addMarker(marker);
    } else {
         dialogs.alert({
        title: "Alert",
        message: "Couldn't find your friend",
        okButtonText: "OK"
        }).then(function () {
        console.log("Dialog closed!");
        });
    }
}

function onMapReady(args) {
    console.log("set is map ready to true: " + isMapReady);
    isMapReady = true;
    mapArgs = args;
    console.log("set is map ready to true: " + isMapReady);
    if (dataStored) {
        console.log("s: " + dataStored);
        renderMap(dataStored, mapArgs);
        dataStored = null;
    }
}

function onCameraChanged(args) {
    console.log("Camera changed: " + JSON.stringify(args.camera));
}


exports.onMapReady = onMapReady;
exports.onCameraChanged = onCameraChanged;
