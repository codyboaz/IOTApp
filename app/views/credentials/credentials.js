var frameModule = require("ui/frame");
var textFieldModule = require("ui/text-field");
var dialogs = require("ui/dialogs");

var SocketIO = require('nativescript-socket.io');


exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};

}

exports.homepage = function() {
    dialogs.prompt("Enter Your Name", "").then(function(r) {
        if (r.result) {
            if (r.text.length > 0) {
                var socket = SocketIO.connect('ws://linkality.com/socket.io/');
                socket.on('connect', function(){
                    console.log('SENDING DATA ' + r.text);
                    socket.emit('app_new_person', {name: r.text});
                });

                socket.on('error', function(e){
                    console.log(e);
                });

                socket.on('new_person', function(data){
                    console.log(data.code);
                    console.log(data.uuid);
                });
                console.log("Dialog result: " + r.result + ", text: " + r.text);
                frameModule.topmost().navigate("views/home/home");
            } else {
                dialogs.alert("Please Enter a Name").then(function() {
                    console.log("Dialog closed!");
                });
            }
        }
        console.log("Dialog result: " + r.result + ", text: " + r.text);
    });

}
