function Controller() {
    function commencementFacebookClick() {
        Titanium.Analytics.featureEvent("commencementFacebook");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("webViews", {
            url: "http://m.facebook.com/UWOshkoshCommencement",
            title: "UWO Commencement"
        }).getView());
    }
    function commencementTwitterClick() {
        Titanium.Analytics.featureEvent("commencementTwitter");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("webViews", {
            url: "https://twitter.com/uwocommencement",
            title: "@uwocommencement"
        }).getView());
    }
    function commencementMapClick() {
        Titanium.Analytics.featureEvent("commencementMap");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("commencementMap").getView());
    }
    function commencementWebsiteClick() {
        Titanium.Analytics.featureEvent("commencementWebsite");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("webViews", {
            url: "http://www.uwosh.edu/commencement/",
            title: "UWO Commencement"
        }).getView());
    }
    function commencementProgramClick() {
        Titanium.Analytics.featureEvent("commencementProgram");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("webViews", {
            url: "http://www.uwosh.edu/commencement/documents/program.pdf",
            title: "Commencement Program"
        }).getView());
    }
    function commencementChecklistClick() {
        Titanium.Analytics.featureEvent("commencementChecklist");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("webViews", {
            url: "http://www.uwosh.edu/commencement/mid-year/students/commencement-checklist",
            title: "Commencement Checklist"
        }).getView());
    }
    function commencementFacebookAndroidClick() {
        Titanium.Analytics.featureEvent("commencementFacebook");
        Ti.Platform.openURL("http://m.facebook.com/UWOshkoshCommencement");
    }
    function commencementTwitterAndroidClick() {
        Titanium.Analytics.featureEvent("commencementTwitter");
        Ti.Platform.openURL("https://twitter.com/uwocommencement");
    }
    function commencementMapAndroidClick() {
        Titanium.Analytics.featureEvent("commencementMap");
        Alloy.createController("commencementMap").getView().open();
    }
    function commencementWebsiteAndroidClick() {
        Titanium.Analytics.featureEvent("commencementWebsite");
        Ti.Platform.openURL("http://www.uwosh.edu/commencement/");
    }
    function commencementProgramAndroidClick() {
        Titanium.Analytics.featureEvent("commencementProgram");
        Ti.Platform.openURL("http://www.uwosh.edu/commencement/documents/program.pdf");
    }
    function commencementChecklistAndroidClick() {
        Titanium.Analytics.featureEvent("commencementChecklist");
        Ti.Platform.openURL("http://www.uwosh.edu/commencement/mid-year/students/commencement-checklist");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "commencement";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.commencementWindow = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        backgroundImage: "/images/grad_home.png",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        id: "commencementWindow",
        title: "Commencement"
    });
    $.__views.commencementWindow && $.addTopLevelView($.__views.commencementWindow);
    $.__views.commencementDashboard = Ti.UI.createView({
        layout: "horizontal",
        id: "commencementDashboard"
    });
    $.__views.commencementWindow.add($.__views.commencementDashboard);
    $.__views.fb = Ti.UI.createImageView({
        height: 85,
        width: 102,
        top: 0,
        id: "fb",
        image: "/images/commence/fb.png"
    });
    $.__views.commencementDashboard.add($.__views.fb);
    commencementFacebookClick ? $.__views.fb.addEventListener("click", commencementFacebookClick) : __defers["$.__views.fb!click!commencementFacebookClick"] = true;
    $.__views.tw = Ti.UI.createImageView({
        height: 85,
        width: 102,
        top: 0,
        id: "tw",
        image: "/images/commence/tw.png"
    });
    $.__views.commencementDashboard.add($.__views.tw);
    commencementTwitterClick ? $.__views.tw.addEventListener("click", commencementTwitterClick) : __defers["$.__views.tw!click!commencementTwitterClick"] = true;
    $.__views.maps = Ti.UI.createImageView({
        height: 85,
        width: 102,
        top: 0,
        id: "maps",
        image: "/images/commence/maps.png"
    });
    $.__views.commencementDashboard.add($.__views.maps);
    commencementMapClick ? $.__views.maps.addEventListener("click", commencementMapClick) : __defers["$.__views.maps!click!commencementMapClick"] = true;
    $.__views.website = Ti.UI.createImageView({
        height: 85,
        width: 102,
        top: 0,
        id: "website",
        image: "/images/commence/website.png"
    });
    $.__views.commencementDashboard.add($.__views.website);
    commencementWebsiteClick ? $.__views.website.addEventListener("click", commencementWebsiteClick) : __defers["$.__views.website!click!commencementWebsiteClick"] = true;
    $.__views.program = Ti.UI.createImageView({
        height: 85,
        width: 102,
        top: 0,
        id: "program",
        image: "/images/commence/program.png"
    });
    $.__views.commencementDashboard.add($.__views.program);
    commencementProgramClick ? $.__views.program.addEventListener("click", commencementProgramClick) : __defers["$.__views.program!click!commencementProgramClick"] = true;
    $.__views.check = Ti.UI.createImageView({
        height: 85,
        width: 102,
        top: 0,
        id: "check",
        image: "/images/commence/check.png"
    });
    $.__views.commencementDashboard.add($.__views.check);
    commencementChecklistClick ? $.__views.check.addEventListener("click", commencementChecklistClick) : __defers["$.__views.check!click!commencementChecklistClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var options, currentOrientation, imageSuffix = "", screenHeight = Ti.Platform.displayCaps.platformHeight, screenWidth = Ti.Platform.displayCaps.platformWidth;
    currentOrientation = screenWidth > screenHeight ? "landscape" : "portrait";
    if (Alloy.Globals.isLargeScreen()) {
        $.fb.height = 170;
        $.fb.width = 204;
        $.tw.height = 170;
        $.tw.width = 204;
        $.maps.height = 170;
        $.maps.width = 204;
        $.website.height = 170;
        $.website.width = 204;
        $.program.height = 170;
        $.program.width = 204;
        $.check.height = 170;
        $.check.width = 204;
        imageSuffix = "_ipad";
    }
    $.fb.image = "/images/commence/fb" + imageSuffix + ".png";
    $.tw.image = "/images/commence/tw" + imageSuffix + ".png";
    $.maps.image = "/images/commence/maps" + imageSuffix + ".png";
    $.website.image = "/images/commence/website" + imageSuffix + ".png";
    $.program.image = "/images/commence/program" + imageSuffix + ".png";
    $.check.image = "/images/commence/check" + imageSuffix + ".png";
    if (Alloy.Globals.isLargeScreen()) options = {
        mainBackgroundImage: "/images/grad_home_ipad.png",
        dashboardHeight: 340,
        dashboardWidth: 612,
        mainBackgroundImageLandscape: "/images/grad_home_ipad_l.png",
        dashboardHeightLandscape: 510,
        dashboardWidthLandscape: 410,
        dashboardBottom: 120,
        dashboardBottomLandscape: 130
    }; else if (Alloy.Globals.isHighDensityScreen() && false) {
        options = {
            dashboardHeight: 170,
            dashboardWidth: 306,
            dashboardHeightLandscape: 260,
            dashboardWidthLandscape: 220,
            mainBackgroundImage: "/images/grad_home@2x.png",
            mainBackgroundImageLandscape: "/images/grad_home_l@2x.png",
            dashboardBottom: 40,
            dashboardBottomLandscape: 20
        };
        Ti.API.info(screenHeight);
        if ("569.0" == screenHeight) {
            options.mainBackgroundImage = "/images/grad_home_854.png";
            options.mainBackgroundImageLandscape = "/images/grad_home_854_l.png";
            options.dashboardBottom = 80;
        } else if ("533.0" == screenHeight) {
            options.mainBackgroundImage = "/images/grad_home_800.png";
            options.mainBackgroundImageLandscape = "/images/grad_home_800_l.png";
        }
    } else options = {
        mainBackgroundImage: "/images/grad_home.png",
        mainBackgroundImageLandscape: "/images/grad_home_l.png",
        dashboardHeight: 170,
        dashboardWidth: 306,
        dashboardBottom: 40,
        dashboardHeightLandscape: 260,
        dashboardWidthLandscape: 220,
        dashboardBottomLandscape: 20
    };
    if ("portrait" == currentOrientation) {
        $.commencementWindow.backgroundImage = options.mainBackgroundImage;
        $.commencementDashboard.height = options.dashboardHeight;
        $.commencementDashboard.width = options.dashboardWidth;
        $.commencementDashboard.bottom = options.dashboardBottom;
        $.commencementDashboard.left = (screenWidth - options.dashboardWidth) / 2;
    }
    if ("landscape" == currentOrientation) {
        $.commencementWindow.backgroundImage = options.mainBackgroundImageLandscape;
        $.commencementDashboard.height = options.dashboardHeightLandscape;
        $.commencementDashboard.width = options.dashboardWidthLandscape;
        $.commencementDashboard.bottom = options.dashboardBottomLandscape;
        $.commencementDashboard.left = Alloy.Globals.isLargeScreen() ? 40 : 10;
    }
    Ti.Gesture.addEventListener("orientationchange", function(ev) {
        if (Ti.Gesture.orientation !== Titanium.UI.FACE_UP && Ti.Gesture.orientation !== Titanium.UI.FACE_DOWN) if (Alloy.Globals.isLandscape(ev.orientation)) {
            $.commencementWindow.backgroundImage = options.mainBackgroundImageLandscape;
            $.commencementDashboard.height = options.dashboardHeightLandscape;
            $.commencementDashboard.width = options.dashboardWidthLandscape;
            $.commencementDashboard.bottom = options.dashboardBottomLandscape;
            $.commencementDashboard.left = Alloy.Globals.isLargeScreen() ? 40 : 10;
        } else {
            $.commencementWindow.backgroundImage = options.mainBackgroundImage;
            $.commencementDashboard.height = options.dashboardHeight;
            $.commencementDashboard.width = options.dashboardWidth;
            $.commencementDashboard.bottom = options.dashboardBottom;
            $.commencementDashboard.left = (screenWidth - options.dashboardWidth) / 2;
        }
    });
    __defers["$.__views.fb!click!commencementFacebookClick"] && $.__views.fb.addEventListener("click", commencementFacebookClick);
    __defers["$.__views.tw!click!commencementTwitterClick"] && $.__views.tw.addEventListener("click", commencementTwitterClick);
    __defers["$.__views.maps!click!commencementMapClick"] && $.__views.maps.addEventListener("click", commencementMapClick);
    __defers["$.__views.website!click!commencementWebsiteClick"] && $.__views.website.addEventListener("click", commencementWebsiteClick);
    __defers["$.__views.program!click!commencementProgramClick"] && $.__views.program.addEventListener("click", commencementProgramClick);
    __defers["$.__views.check!click!commencementChecklistClick"] && $.__views.check.addEventListener("click", commencementChecklistClick);
    __defers["$.__views.fb!click!commencementFacebookAndroidClick"] && $.__views.fb.addEventListener("click", commencementFacebookAndroidClick);
    __defers["$.__views.tw!click!commencementTwitterAndroidClick"] && $.__views.tw.addEventListener("click", commencementTwitterAndroidClick);
    __defers["$.__views.maps!click!commencementMapAndroidClick"] && $.__views.maps.addEventListener("click", commencementMapAndroidClick);
    __defers["$.__views.website!click!commencementWebsiteAndroidClick"] && $.__views.website.addEventListener("click", commencementWebsiteAndroidClick);
    __defers["$.__views.program!click!commencementProgramAndroidClick"] && $.__views.program.addEventListener("click", commencementProgramAndroidClick);
    __defers["$.__views.check!click!commencementChecklistAndroidClick"] && $.__views.check.addEventListener("click", commencementChecklistAndroidClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;