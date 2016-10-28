var frameModule = require("ui/frame");
var observable = require("data/observable");
var pageModule = require("ui/page");

var viewModel = new observable.Observable();

exports.pageLoaded = function(args) {
    var page = args.object;
    var getData=page.navigationContext;
    console.log(getData.roomName);
    console.log(getData.imgName);
    viewModel.set("Room", getData.roomName);
    viewModel.set("imgName", getData.imgName);
    page.bindingContext = viewModel;

}


exports.toLinkality= function() {
    var navigationOptions={
        moduleName:'views/team/team',
        context:{
            teamName: "Linkality",
            logoName: "~/views/images/linkality.png",
            description:"We use IOT devices (RFID Tags & Antennas, iBeacons and Mobile Phones)"+
                        " to provide services (connectivity, information, etc) to attendees, "+
                        "speakers and staff at the Capstone Festival.",
            team: "Edwin Yantis, Cody Boaz, Nathaniel Davidson",
            mentor: "Mentor: Eduardo Pelegri-Llopart"

        }
    }
    frameModule.topmost().navigate(navigationOptions);
}

exports.toRender= function() {
    var navigationOptions={
        moduleName:'views/team/team',
        context:{
            teamName: "2D Game Engine Framework: Render Programming",
            logoName: "~/views/images/csumb.png",
            description:"Creating a framework dedicated to 2D games that is " +
                          "simple for inexperienced programmers. Writing an optimal method " +
                          "of loading and managing resources for the renderer.",
            team: "Tim Perry, Josh Shallow",
            mentor: "Mentor: Dr. Christian Eckhardt"




        }
    }
    frameModule.topmost().navigate(navigationOptions);
}

exports.toMBARI= function() {
    var navigationOptions={
        moduleName:'views/team/team',
        context:{
            teamName: "STOQS Spatial Temporal Oceanographic Query System",
            logoName: "~/views/images/mbari.png",
            description:"Ocean researchers use STOQS for many reasons related to their field. One of"+
                        " the great features of STOQS is the capability to display some 3D models of "+
                        "underwater terrain. Our goal is to allow users to view the 3D models inside "+
                        "of any Google Cardboard headset. This will allow researchers to have a more "+
                        "immersive experience with their research.",
            team: "Bilal Sattar, Juan Vargas, Leobardo Lara",
            mentor: "Mentor: Mike McCann"

        }
    }
    frameModule.topmost().navigate(navigationOptions);
}

exports.toCIGMobile= function() {
    var navigationOptions={
        moduleName:'views/team/team',
        context:{
            teamName: "CIG's Android Mobile App Reboot",
            logoName: "~/views/images/CIG.png",
            description:"Our mission is to reboot the CIG’s android mobile app to a more visual "+
                        "elegant design and implement features that will provide value to the "+
                        "stakeholders.",
            team: "Mateo Sixtos, Peter Moung",
            mentor: "Mentor: John Halberstadt"

        }
    }
    frameModule.topmost().navigate(navigationOptions);
}

exports.toAnimAndCont= function() {
    var navigationOptions={
        moduleName:'views/team/team',
        context:{
            teamName: "Game Engine Framework: Animations and Controls",
            logoName: "~/views/images/csumb.png",
            description:"Creating a fully functional 2D Game Engine Framework. Our part is "+
                        "to create the animation and input control libraries for the game engine."+
                        " We will also be responsible for developing an intuitive interface for all"+
                        " components of the game.",
            team: "Matthew Johnson, Brian Zimmerman",
            mentor: "Mentor: Dr. Christian Eckhardt"

        }
    }
    frameModule.topmost().navigate(navigationOptions);
}

exports.toTableau= function() {
    var navigationOptions={
        moduleName:'views/team/team',
        context:{
            teamName: "Data Analytics and Visualization with Tableau",
            logoName: "~/views/images/CIG.png",
            description:"Our team worked with Capital Insurances actuarial and technology teams"+
                        " to define a handful of high value business problems where seeing data "+
                        "differently allows them to make better decisions.  We built and deliver "+
                        "solutions that CIG staff can use through Tableau for insights through "+
                        "visualization.",
            team: "George Harter, Stephen Hermida, Arash Aria, Leticia Sanchez",
            mentor: "Mentor: John Halberstadt"

        }
    }
    frameModule.topmost().navigate(navigationOptions);
}

exports.toStoreApp= function() {
    var navigationOptions={
        moduleName:'views/team/team',
        context:{
            teamName: "Store Inventory Scanning App",
            logoName: "~/views/images/sscs.png",
            description:"Our mission is to create a user friendly application that will record"+
                        " inventory for a retail business through the use of an Android device. "+
                        "Product data will be recorded and monitor in an effort to make record keeping "+
                        "more efficient and productive. ",
            team: "Misael Aguilar, David Espinoza, Daniel Gopar",
            mentor: "Mentor: Mike Kock"

        }
    }
    frameModule.topmost().navigate(navigationOptions);
}

exports.toAudioApp= function() {
    var navigationOptions={
        moduleName:'views/team/team',
        context:{
            teamName: "Audio Transcription Web App",
            logoName: "~/views/images/csumb.png",
            description:"We created a web application for the public to upload videos"+
                        " and return as text. The main goal of this project was to implement"+
                        " this service in a user friendly web app targeted towards students, in "+
                        "order to provide them the ability to search through a lecture or "+
                        "presentation recording for key words.",
            team: "Mariela Ceja, Miguel Lozoya",
            mentor: "Mentor: Ian Bowers"

        }
    }
    frameModule.topmost().navigate(navigationOptions);
}

exports.toThirdLaw= function() {
    var navigationOptions={
        moduleName:'views/team/team',
        context:{
            teamName: "The Third Law",
            logoName: "~/views/images/3rdLaw.png",
            description:"The Third Law is a procedurally generated physics and experimentation"+
                        " game. Players take on the role of a STEM scientist/explorer, who seeks "+
                        "to understand the generated, different that in our reality, law of physics "+
                        "of  their newly discovered universe.",
            team: "Anthony Jones, Kevin Brock, Quinn Daugherty",
            mentor: "Mentor: Krzysztof Pietroszek"

        }
    }
    frameModule.topmost().navigate(navigationOptions);
}
