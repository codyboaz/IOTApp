var application = require("application");
var PlatformCss = require( "nativescript-platform-css" );
application.mainModule = "views/credentials/credentials";
application.cssFile = "./app.css";

if(application.ios) {
  GMSServices.provideAPIKey("AIzaSyDQq0VMI_2XtkqQazkyNbZ8AF2aC24uEaY");
}


application.start();
