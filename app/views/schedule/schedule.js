var frameModule = require("ui/frame");

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};
}

exports.toRoom104 = function() {
    // console.log("Navigating");
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

exports.toRoomPoster = function() {
    // console.log("Navigating");
    var navigationOptions = {
        moduleName: 'views/room/room',
        context: {
            roomName: "Main Lobby",
            imgName: "~/views/images/bitLoby.png",
            id: "lobby"
          }
    }
    frameModule.topmost().navigate(navigationOptions);
}

exports.toRoom110 = function() {
    // console.log("Navigating");
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

exports.toRoom105 = function() {
    // console.log("Navigating");
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
