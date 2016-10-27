var frameModule = require("ui/frame");

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};
}

exports.toRooms = function() {
    frameModule.topmost().navigate("views/room/room");
}


exports.toRoom104=function() {
    // console.log("Navigating");
    var navigationOptions={
        moduleName:'views/room/room',
        context:{
            roomName: "Room 104",
            imgName: "~/views/images/room104.png"

        }
    }

    frameModule.topmost().navigate(navigationOptions);
}

exports.toRoomPoster=function() {
    // console.log("Navigating");
    var navigationOptions={
        moduleName:'views/room/room',
        context:{
            roomName: "Main Lobby",
            imgName: "~/views/images/bitLoby.png"

        }
    }

    frameModule.topmost().navigate(navigationOptions);
}

exports.toRoom110=function() {
    // console.log("Navigating");
    var navigationOptions={
        moduleName:'views/room/room',
        context:{
            roomName: "Room 110",
            imgName: "~/views/images/room110.png"

        }
    }

    frameModule.topmost().navigate(navigationOptions);
}

exports.toRoom105=function() {
    // console.log("Navigating");
    var navigationOptions={
        moduleName:'views/room/room',
        context:{
            roomName: "Room 105",
            imgName: "~/views/images/room110.png"

        }
    }

    frameModule.topmost().navigate(navigationOptions);
}
