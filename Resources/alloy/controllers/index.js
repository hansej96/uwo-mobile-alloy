function Controller() {
    function newsEventsClick(e) {
        Alloy.createController("newsEvents").getView().open();
    }
    function peoplePlacesClick(e) {
        Alloy.createController("peoplePlaces").getView().open();
    }
    function quickLinksClick(e) {
        Alloy.createController("quickLinks").getView().open();
    }
    function stayConnectedClick(e) {
        Alloy.createController("stayConnected").getView().open();
    }
    function campusServicesClick(e) {
        Alloy.createController("campusServices").getView().open();
    }
    function emergencyClick(e) {
        Alloy.createController("emergency").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        barColor: "#414444",
        backgroundImage: "/Default.png",
        id: "index"
    }), "Window", null);
    $.addTopLevelView($.__views.index);
    $.__views.dashboard = A$(Ti.UI.createView({
        layout: "horizontal",
        height: 170,
        width: 306,
        bottom: 40,
        id: "dashboard"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.dashboard);
    $.__views.news = A$(Ti.UI.createImageView({
        height: 85,
        width: 85,
        top: 0,
        id: "news",
        image: "/images/icons/news.png"
    }), "ImageView", $.__views.dashboard);
    $.__views.dashboard.add($.__views.news);
    newsEventsClick ? $.__views.news.on("click", newsEventsClick) : __defers["$.__views.news!click!newsEventsClick"] = !0;
    $.__views.people = A$(Ti.UI.createImageView({
        height: 85,
        width: 85,
        top: 0,
        id: "people",
        image: "/images/icons/peopleplaces.png"
    }), "ImageView", $.__views.dashboard);
    $.__views.dashboard.add($.__views.people);
    peoplePlacesClick ? $.__views.people.on("click", peoplePlacesClick) : __defers["$.__views.people!click!peoplePlacesClick"] = !0;
    $.__views.links = A$(Ti.UI.createImageView({
        height: 85,
        width: 85,
        top: 0,
        id: "links",
        image: "/images/icons/quicklinks.png"
    }), "ImageView", $.__views.dashboard);
    $.__views.dashboard.add($.__views.links);
    quickLinksClick ? $.__views.links.on("click", quickLinksClick) : __defers["$.__views.links!click!quickLinksClick"] = !0;
    $.__views.connected = A$(Ti.UI.createImageView({
        height: 85,
        width: 85,
        top: 0,
        id: "connected",
        image: "/images/icons/connected.png"
    }), "ImageView", $.__views.dashboard);
    $.__views.dashboard.add($.__views.connected);
    stayConnectedClick ? $.__views.connected.on("click", stayConnectedClick) : __defers["$.__views.connected!click!stayConnectedClick"] = !0;
    $.__views.services = A$(Ti.UI.createImageView({
        height: 85,
        width: 85,
        top: 0,
        id: "services",
        image: "/images/icons/campusservices.png"
    }), "ImageView", $.__views.dashboard);
    $.__views.dashboard.add($.__views.services);
    campusServicesClick ? $.__views.services.on("click", campusServicesClick) : __defers["$.__views.services!click!campusServicesClick"] = !0;
    $.__views.emergency = A$(Ti.UI.createImageView({
        height: 85,
        width: 85,
        top: 0,
        id: "emergency",
        image: "/images/icons/emergency.png"
    }), "ImageView", $.__views.dashboard);
    $.__views.dashboard.add($.__views.emergency);
    emergencyClick ? $.__views.emergency.on("click", emergencyClick) : __defers["$.__views.emergency!click!emergencyClick"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.news!click!newsEventsClick"] && $.__views.news.on("click", newsEventsClick);
    __defers["$.__views.people!click!peoplePlacesClick"] && $.__views.people.on("click", peoplePlacesClick);
    __defers["$.__views.links!click!quickLinksClick"] && $.__views.links.on("click", quickLinksClick);
    __defers["$.__views.connected!click!stayConnectedClick"] && $.__views.connected.on("click", stayConnectedClick);
    __defers["$.__views.services!click!campusServicesClick"] && $.__views.services.on("click", campusServicesClick);
    __defers["$.__views.emergency!click!emergencyClick"] && $.__views.emergency.on("click", emergencyClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;