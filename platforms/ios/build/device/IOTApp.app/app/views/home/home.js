var frameModule = require("ui/frame");
var Estimote = require('nativescript-estimote-sdk');


exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};

    var count = 0;

    var options = {
        callback : function(beacons){
          var items =[];

          for (var i = 0; i < beacons.length; i++) {
             var beacon = beacons[i];
             if (beacon.major > 0){

                if(beacon.major == 26418 && count < 1) {
                  console.log("IT WORKS!")
                  count ++;
                }

                if (beacon.proximity) {
                  distance = beacon.proximity;
                }

             }
          }

        }
    };

    new Estimote(options).startRanging();
}

exports.eventMap = function() {
    frameModule.topmost().navigate("views/map/map");
}

exports.schedule = function() {
    frameModule.topmost().navigate("views/schedule/schedule");
}

exports.socialZone = function() {
    frameModule.topmost().navigate("views/social/social");
}
