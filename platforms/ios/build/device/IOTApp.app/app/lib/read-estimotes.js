var Estimote = require('nativescript-estimote-sdk');
var dialogs = require("ui/dialogs");
var frameModule = require("ui/frame");

var estimoteReader = function(){
    if(global.estimoteMaster){
        return;
    }
    var options = {
        callback: function(beacons) {
            for (var i = 0; i < beacons.length; i++) {
                var beacon = beacons[i];
                if (beacon.major > 0) {
                    
                    
                    console.log(global.currentBeacon+"CURRENT BEACON");
                    console.log(beacon.major);
                    console.log(global.foundBeacon);
                    if((beacon.major == 2467 || beacon.major == 47570 || beacon.major == 26418) && global.foundBeacon && beacon.proximity == "Near"){
                        if(global.currentBeacon!=beacon.major){
                            global.foundBeacon=false;
                            console.log("reset to 0");
                        }
                        console.log("entered check");
                    }
                    
                    console.log(beacon.proximity);
                    console.log(beacon.major);

                    if (beacon.major == 26418 && !global.foundBeacon && beacon.proximity == "Near") {
                        global.foundBeacon=true;
                        console.log("dark blue beacon found");
                        console.log(beacon.proximity);
                        global.currentBeacon = 26418;
                        dialogs.confirm({
                            title: "Your are in Room 110",
                            message: "Would you like to see the Schedule?",
                            okButtonText: "Yes",
                            cancelButtonText: "No",
                        }).then(function(result) {
                            console.log("Dialog result: " + result);
                            if (result) {
                                var navigationOptions = {
                                    moduleName: 'views/room/room',
                                    context: {
                                        roomName: "Room 110",
                                        imgName: "~/views/images/room110.png",
                                        id: "110"
                                    }
                                }
                                frameModule.topmost().navigate(navigationOptions);
                            }
                        });
                    } else if (beacon.major == 47570 && !global.foundBeacon && beacon.proximity == "Near") {
                        global.foundBeacon=true;
                        console.log("green beacon found");
                        console.log(beacon.proximity);
                        global.currentBeacon = 47570;
                        dialogs.confirm({
                            title: "Your are in Room 105",
                            message: "Would you like to see the Schedule?",
                            okButtonText: "Yes",
                            cancelButtonText: "No",
                        }).then(function(result) {
                            console.log("Dialog result: " + result);
                            if (result) {
                                var navigationOptions = {
                                    moduleName: 'views/room/room',
                                    context: {
                                        roomName: "Room 105",
                                        imgName: "~/views/images/room105.png",
                                        id: "105"
                                    }
                                }
                                frameModule.topmost().navigate(navigationOptions);
                            }
                        });
                    }else if (beacon.major == 2467 && !global.foundBeacon && beacon.proximity == "Near") {
                        global.foundBeacon=true;
                        console.log("light blue beacon found");
                        console.log(beacon.proximity);
                        global.currentBeacon = 2467;
                        dialogs.confirm({
                            title: "Your are in Room 104",
                            message: "Would you like to see the Schedule?",
                            okButtonText: "Yes",
                            cancelButtonText: "No",
                        }).then(function(result) {
                            console.log("Dialog result: " + result);
                            if (result) {
                                var navigationOptions = {
                                    moduleName: 'views/room/room',
                                    context: {
                                        roomName: "Room 104",
                                        imgName: "~/views/images/room104.png",
                                        id: "104"
                                    }
                                }
                                frameModule.topmost().navigate(navigationOptions);
                            }
                        });
                    }
                    
                    // add logic for when all beacons out of range!
                }
            }

        }
    };

    global.estimoteMaster = new Estimote(options).startRanging();
}
module.exports = estimoteReader;