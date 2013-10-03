function Controller() {
    function newsEventsClick() {
        Titanium.Analytics.featureEvent("newsEvents");
        $.win1.openWindow(Alloy.createController("newsEvents").getView());
    }
    function peoplePlacesClick() {
        Titanium.Analytics.featureEvent("peoplePlaces");
        $.win1.openWindow(Alloy.createController("peoplePlaces").getView());
    }
    function quickLinksClick() {
        Titanium.Analytics.featureEvent("quickLinks");
        $.win1.openWindow(Alloy.createController("quickLinks").getView());
    }
    function stayConnectedClick() {
        Titanium.Analytics.featureEvent("stayConnected");
        $.win1.openWindow(Alloy.createController("stayConnected").getView());
    }
    function campusServicesClick() {
        Titanium.Analytics.featureEvent("campusServices");
        $.win1.openWindow(Alloy.createController("campusServices").getView());
    }
    function emergencyClick() {
        Titanium.Analytics.featureEvent("emergency");
        $.win1.openWindow(Alloy.createController("emergency").getView());
    }
    function newsEventsAndroidClick() {
        Titanium.Analytics.featureEvent("newsEvents");
        Alloy.createController("newsEvents").getView().open();
    }
    function peoplePlacesAndroidClick() {
        Titanium.Analytics.featureEvent("peoplePlaces");
        Alloy.createController("peoplePlaces").getView().open();
    }
    function quickLinksAndroidClick() {
        Titanium.Analytics.featureEvent("quickLinks");
        Alloy.createController("quickLinks").getView().open();
    }
    function stayConnectedAndroidClick() {
        Titanium.Analytics.featureEvent("stayConnected");
        Alloy.createController("stayConnected").getView().open();
    }
    function campusServicesAndroidClick() {
        Titanium.Analytics.featureEvent("campusServices");
        Alloy.createController("campusServices").getView().open();
    }
    function emergencyAndroidClick() {
        Titanium.Analytics.featureEvent("emergency");
        Alloy.createController("emergency").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: true,
        navTintColor: "#fec425",
        backgroundImage: "/Default.png",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        id: "index",
        title: "Dashboard"
    });
    $.__views.dashboard = Ti.UI.createView({
        layout: "horizontal",
        id: "dashboard"
    });
    $.__views.index.add($.__views.dashboard);
    $.__views.news = Ti.UI.createImageView({
        height: 85,
        width: 102,
        top: 0,
        id: "news"
    });
    $.__views.dashboard.add($.__views.news);
    newsEventsClick ? $.__views.news.addEventListener("click", newsEventsClick) : __defers["$.__views.news!click!newsEventsClick"] = true;
    $.__views.people = Ti.UI.createImageView({
        height: 85,
        width: 102,
        top: 0,
        id: "people"
    });
    $.__views.dashboard.add($.__views.people);
    peoplePlacesClick ? $.__views.people.addEventListener("click", peoplePlacesClick) : __defers["$.__views.people!click!peoplePlacesClick"] = true;
    $.__views.links = Ti.UI.createImageView({
        height: 85,
        width: 102,
        top: 0,
        id: "links"
    });
    $.__views.dashboard.add($.__views.links);
    quickLinksClick ? $.__views.links.addEventListener("click", quickLinksClick) : __defers["$.__views.links!click!quickLinksClick"] = true;
    $.__views.connected = Ti.UI.createImageView({
        height: 85,
        width: 102,
        top: 0,
        id: "connected"
    });
    $.__views.dashboard.add($.__views.connected);
    stayConnectedClick ? $.__views.connected.addEventListener("click", stayConnectedClick) : __defers["$.__views.connected!click!stayConnectedClick"] = true;
    $.__views.services = Ti.UI.createImageView({
        height: 85,
        width: 102,
        top: 0,
        id: "services"
    });
    $.__views.dashboard.add($.__views.services);
    campusServicesClick ? $.__views.services.addEventListener("click", campusServicesClick) : __defers["$.__views.services!click!campusServicesClick"] = true;
    $.__views.emergency = Ti.UI.createImageView({
        height: 85,
        width: 102,
        top: 0,
        id: "emergency"
    });
    $.__views.dashboard.add($.__views.emergency);
    emergencyClick ? $.__views.emergency.addEventListener("click", emergencyClick) : __defers["$.__views.emergency!click!emergencyClick"] = true;
    $.__views.win1 = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.index,
        id: "win1"
    });
    $.__views.win1 && $.addTopLevelView($.__views.win1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.navwindow = $.win1;
    var options, currentOrientation, imageSuffix = "", screenHeight = Ti.Platform.displayCaps.platformHeight, screenWidth = Ti.Platform.displayCaps.platformWidth;
    if (Alloy.Globals.isLargeScreen()) {
        $.news.height = 170;
        $.news.width = 204;
        $.people.height = 170;
        $.people.width = 204;
        $.links.height = 170;
        $.links.width = 204;
        $.connected.height = 170;
        $.connected.width = 204;
        $.services.height = 170;
        $.services.width = 204;
        $.emergency.height = 170;
        $.emergency.width = 204;
        imageSuffix = "_ipad";
    }
    $.news.image = "/images/dashboard/news" + imageSuffix + ".png";
    $.people.image = "/images/dashboard/people" + imageSuffix + ".png";
    $.links.image = "/images/dashboard/links" + imageSuffix + ".png";
    $.connected.image = "/images/dashboard/connected" + imageSuffix + ".png";
    $.services.image = "/images/dashboard/services" + imageSuffix + ".png";
    $.emergency.image = "/images/dashboard/emergency" + imageSuffix + ".png";
    if (Alloy.Globals.isLargeScreen()) options = {
        mainBackgroundImage: "/images/home_ipad.png",
        dashboardHeight: 340,
        dashboardWidth: 612,
        mainBackgroundImageLandscape: "/images/home_ipad_l.png",
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
            mainBackgroundImage: "/images/home@2x.png",
            mainBackgroundImageLandscape: "/images/home_l@2x.png",
            dashboardBottom: 40,
            dashboardBottomLandscape: 20
        };
        Ti.API.info(screenHeight);
        if ("569.0" == screenHeight) {
            options.mainBackgroundImage = "/images/home_854.png";
            options.mainBackgroundImageLandscape = "/images/home_854_l.png";
            options.dashboardBottom = 80;
        } else if ("533.0" == screenHeight) {
            options.mainBackgroundImage = "/images/home_800.png";
            options.mainBackgroundImageLandscape = "/images/home_800_l.png";
        }
    } else options = {
        mainBackgroundImage: "/images/home.png",
        mainBackgroundImageLandscape: "/images/home_l.png",
        dashboardHeight: 170,
        dashboardWidth: 306,
        dashboardBottom: 40,
        dashboardHeightLandscape: 260,
        dashboardWidthLandscape: 220,
        dashboardBottomLandscape: 20
    };
    currentOrientation = screenWidth > screenHeight ? "landscape" : "portrait";
    if ("portrait" == currentOrientation) {
        $.index.backgroundImage = options.mainBackgroundImage;
        $.dashboard.height = options.dashboardHeight;
        $.dashboard.width = options.dashboardWidth;
        $.dashboard.bottom = options.dashboardBottom;
        $.dashboard.left = (screenWidth - options.dashboardWidth) / 2;
    }
    if ("landscape" == currentOrientation) {
        $.index.backgroundImage = options.mainBackgroundImageLandscape;
        $.dashboard.height = options.dashboardHeightLandscape;
        $.dashboard.width = options.dashboardWidthLandscape;
        $.dashboard.bottom = options.dashboardBottomLandscape;
        $.dashboard.left = Alloy.Globals.isLargeScreen() ? 40 : 10;
    }
    Ti.Gesture.addEventListener("orientationchange", function(ev) {
        if (Ti.Gesture.orientation !== Titanium.UI.FACE_UP && Ti.Gesture.orientation !== Titanium.UI.FACE_DOWN) if (Alloy.Globals.isLandscape(ev.orientation)) {
            $.index.backgroundImage = options.mainBackgroundImageLandscape;
            $.index.backgroundImage = options.mainBackgroundImageLandscape;
            $.dashboard.height = options.dashboardHeightLandscape;
            $.dashboard.width = options.dashboardWidthLandscape;
            $.dashboard.bottom = options.dashboardBottomLandscape;
            $.dashboard.left = Alloy.Globals.isLargeScreen() ? 40 : 10;
        } else {
            $.index.backgroundImage = options.mainBackgroundImage;
            $.index.backgroundImage = options.mainBackgroundImage;
            $.dashboard.height = options.dashboardHeight;
            $.dashboard.width = options.dashboardWidth;
            $.dashboard.bottom = options.dashboardBottom;
            $.dashboard.left = (screenWidth - options.dashboardWidth) / 2;
        }
    });
    $.win1.open();
    __defers["$.__views.news!click!newsEventsClick"] && $.__views.news.addEventListener("click", newsEventsClick);
    __defers["$.__views.people!click!peoplePlacesClick"] && $.__views.people.addEventListener("click", peoplePlacesClick);
    __defers["$.__views.links!click!quickLinksClick"] && $.__views.links.addEventListener("click", quickLinksClick);
    __defers["$.__views.connected!click!stayConnectedClick"] && $.__views.connected.addEventListener("click", stayConnectedClick);
    __defers["$.__views.services!click!campusServicesClick"] && $.__views.services.addEventListener("click", campusServicesClick);
    __defers["$.__views.emergency!click!emergencyClick"] && $.__views.emergency.addEventListener("click", emergencyClick);
    __defers["$.__views.news!click!newsEventsAndroidClick"] && $.__views.news.addEventListener("click", newsEventsAndroidClick);
    __defers["$.__views.people!click!peoplePlacesAndroidClick"] && $.__views.people.addEventListener("click", peoplePlacesAndroidClick);
    __defers["$.__views.links!click!quickLinksAndroidClick"] && $.__views.links.addEventListener("click", quickLinksAndroidClick);
    __defers["$.__views.connected!click!stayConnectedAndroidClick"] && $.__views.connected.addEventListener("click", stayConnectedAndroidClick);
    __defers["$.__views.services!click!campusServicesAndroidClick"] && $.__views.services.addEventListener("click", campusServicesAndroidClick);
    __defers["$.__views.emergency!click!emergencyAndroidClick"] && $.__views.emergency.addEventListener("click", emergencyAndroidClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;