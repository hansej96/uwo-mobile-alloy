function Controller() {
    function newsClick(e) {
        Alloy.createController("newsEvents").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
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
    newsClick ? $.__views.news.on("click", newsClick) : __defers["$.__views.news!click!newsClick"] = !0;
    $.__views.people = A$(Ti.UI.createImageView({
        height: 85,
        width: 85,
        top: 0,
        id: "people",
        image: "/images/icons/peopleplaces.png"
    }), "ImageView", $.__views.dashboard);
    $.__views.dashboard.add($.__views.people);
    $.__views.links = A$(Ti.UI.createImageView({
        height: 85,
        width: 85,
        top: 0,
        id: "links",
        image: "/images/icons/quicklinks.png"
    }), "ImageView", $.__views.dashboard);
    $.__views.dashboard.add($.__views.links);
    $.__views.connected = A$(Ti.UI.createImageView({
        height: 85,
        width: 85,
        top: 0,
        id: "connected",
        image: "/images/icons/connected.png"
    }), "ImageView", $.__views.dashboard);
    $.__views.dashboard.add($.__views.connected);
    $.__views.services = A$(Ti.UI.createImageView({
        height: 85,
        width: 85,
        top: 0,
        id: "services",
        image: "/images/icons/campusservices.png"
    }), "ImageView", $.__views.dashboard);
    $.__views.dashboard.add($.__views.services);
    $.__views.emergency = A$(Ti.UI.createImageView({
        height: 85,
        width: 85,
        top: 0,
        id: "emergency",
        image: "/images/icons/emergency.png"
    }), "ImageView", $.__views.dashboard);
    $.__views.dashboard.add($.__views.emergency);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.news!click!newsClick"] && $.__views.news.on("click", newsClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;