function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.newsEvents = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        barColor: "#555",
        id: "newsEvents"
    }), "Window", null);
    $.addTopLevelView($.__views.newsEvents);
    $.__views.win1 = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        barColor: "#555",
        title: "News & Events",
        id: "win1"
    }), "Window", null);
    $.__views.__alloyId3 = A$(Ti.UI.createLabel({
        text: "This is News &amp; Events Window",
        id: "__alloyId3"
    }), "Label", $.__views.win1);
    $.__views.win1.add($.__views.__alloyId3);
    $.__views.navgroup = A$(Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.win1,
        id: "navgroup"
    }), "NavigationGroup", $.__views.newsEvents);
    $.__views.newsEvents.add($.__views.navgroup);
    $.__views.__alloyId4 = A$(Ti.UI.createLabel({
        text: "News &amp; Events",
        id: "__alloyId4"
    }), "Label", $.__views.newsEvents);
    $.__views.newsEvents.add($.__views.__alloyId4);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.CFG.navgroup = $.navgroup;
    var button = Ti.UI.createButton({
        title: "next"
    });
    button.addEventListener("click", function(e) {
        $.navgroup.open(Alloy.createController("peoplePlaces").getView());
    });
    $.win1.rightNavButton = button;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;