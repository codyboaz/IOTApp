var frameModule = require("ui/frame");
var textFieldModule = require("ui/text-field");
var dialogs = require("ui/dialogs");

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};

}

exports.friendLocation = function() {
    dialogs.prompt("Enter Secret Identifier", "").then(function(r) {
        if (r.result) {
            if (r.text.length > 0) {
                console.log("Dialog result: " + r.result + ", text: " + r.text);
                var navigationOptions = {
                    moduleName: 'views/friendLocation/friendLocation',
                    context: {
                        secret_name: r.text
                    }
                }
                frameModule.topmost().navigate(navigationOptions);

            } else {
                dialogs.alert("Please enter an indentifier").then(function() {
                    console.log("Dialog closed!");
                });
            }
        }
        
    });
}