var frameModule = require("ui/frame");
var textFieldModule = require("ui/text-field");
var dialogs = require("ui/dialogs");
var estimote = require("../../lib/read-estimotes");


exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};
    estimote();

}

exports.friendLocation = function() {
    dialogs.prompt("Enter Secret Identifier", "").then(function(r) {
        if (r.result) {
            if (r.text.length > 0) {
                var navigationOptions = {
                    moduleName: 'views/friendLocation/friendLocation',
                    context: {
                        secret_name: r.text,
                    }
                }
                frameModule.topmost().navigate(navigationOptions);

            } else {
                dialogs.alert("Please Enter an Indentifier").then(function() {
                    console.log("Dialog closed!");
                });
            }
        }
        console.log("Dialog result: " + r.result + ", text: " + r.text);
    });
}