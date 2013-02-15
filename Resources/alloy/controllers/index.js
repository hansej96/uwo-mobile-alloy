function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = A$(Ti.UI.createWindow({
        backgroundImage: "/Default.png",
        id: "index"
    }), "Window", null);
    $.addTopLevelView($.__views.index);
    $.__views.news = A$(Ti.UI.createView({
        backgroundImage: "/images/icons/news.png",
        height: 85,
        width: 102,
        top: 0,
        left: "auto",
        id: "news",
        image: "/images/icons/news.png"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.news);
    $.__views.people = A$(Ti.UI.createView({
        id: "people",
        image: "/images/icons/people.png"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.people);
    $.__views.links = A$(Ti.UI.createView({
        id: "links",
        image: "/images/icons/links.png"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.links);
    $.__views.connected = A$(Ti.UI.createView({
        id: "connected",
        image: "/images/icons/connected.png"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.connected);
    $.__views.services = A$(Ti.UI.createView({
        id: "services",
        image: "/images/icons/services.png"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.services);
    $.__views.emergency = A$(Ti.UI.createView({
        backgroundImage: "/images/icons/emergency.png",
        height: 85,
        width: 102,
        top: 0,
        left: "auto",
        id: "emergency",
        image: "/images/icons/emergency.png"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.emergency);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;