var Estimote = require('nativescript-estimote-sdk');
var dialogs = require("ui/dialogs");
var application = require("application");
var frameModule = require("ui/frame");

var estimoteReader = function(){
    return { 
        beaconData: {
            26418:{
                major: 26418,
                title: "Your are in Room 110",
                message: "Would you like to see the Schedule?",
                roomName: "Room 110",
                imgName: "~/views/images/room110.png",
                name: "dark blue",
                id: "110"
            },
            47570:{
                major: 47570,
                title: "Your are in Room 105",
                message: "Would you like to see the Schedule?",
                roomName: "Room 105",
                imgName: "~/views/images/room105.png",
                name: "green blue",
                id: "105"
            },
            2467:{
                major: 2467,
                title: "Your are in Room 104",
                message: "Would you like to see the Schedule?",
                roomName: "Room 104",
                imgName: "~/views/images/room104.png",
                name: "light blue",
                id: "104"
            },
        },
        running: null, 
        create: function(){ 
            this.running = new Estimote({
                callback: function(beacons) {
                    var sensitivity = 72;
                    console.log("read");
                    var smallestBeacon=null;
                    console.log("Dump the beacons");
                    console.log(global.currentBeacon);
                    console.dump(beacons);
                    for (var i = 0; i < beacons.length; i++) {
                        var beacon = beacons[i];
                        var found = false;
                        if (beacon.major > 0) {
                            if (global.estimoteMaster.beaconData[beacon.major]  && Math.abs(beacon.rssi)<sensitivity) {
                                if(smallestBeacon==null){
                                    smallestBeacon = beacon;
                                }else if(Math.abs(smallestBeacon.rssi)>Math.abs(beacon.rssi)){
                                    smallestBeacon = beacon;
                                }
                            }
                        }
                    }
                    console.dump(smallestBeacon);
                    if(smallestBeacon!=null){
                        if(global.currentBeacon==smallestBeacon.major){
                            return;
                        }
                        global.foundBeacon=true;
                        global.currentBeacon = smallestBeacon.major;
                        dialogs.confirm({
                            title: global.estimoteMaster.beaconData[smallestBeacon.major].title,
                            message: global.estimoteMaster.beaconData[smallestBeacon.major].message,
                            okButtonText: "Yes",
                            cancelButtonText: "No",
                        }).then(function(result) {
                            console.log("Dialog result: " + result);
                            if (result) {
                                var navigationOptions = {
                                    moduleName: 'views/room/room',
                                    context: {
                                        roomName: global.estimoteMaster.beaconData[smallestBeacon.major].roomName,
                                        imgName: global.estimoteMaster.beaconData[smallestBeacon.major].imgName,
                                        id: global.estimoteMaster.beaconData[smallestBeacon.major].id
                                    }
                                }
                                frameModule.topmost().navigate(navigationOptions);
                            }
                        });
                    }

                }
            });
        }
    };
}
module.exports = estimoteReader;