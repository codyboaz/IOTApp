var frameModule = require("ui/frame");
var textFieldModule = require("ui/text-field");
var dialogs = require("ui/dialogs");

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};
}

exports.homepage = function() {
  dialogs.prompt("Enter Your Name", "").then(function (r) {
    if(r.result){
      if(r.text.length > 0){
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
