var frameModule = require("ui/frame");
var textFieldModule = require("ui/text-field");
var dialogs = require("ui/dialogs");

var SocketIO = require('nativescript-socket.io');

SocketIO.enableDebug(); // optionnal

// or use your own debug function
// SocketIO.enableDebug(myCustomDebugFunction);


var socket = SocketIO.connect('http://linkality.com');

socket.on('connect', function(){
  console.log('connect');
});


exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};
}

exports.homepage = function() {
    dialogs.prompt("Enter Your Name", "").then(function(r) {
        if (r.result) {
            if (r.text.length > 0) {
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
