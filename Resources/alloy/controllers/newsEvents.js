function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.newsEvents = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        barColor: "#414444",
        title: "News & Events",
        id: "newsEvents"
    }), "Window", null);
    $.addTopLevelView($.__views.newsEvents);
    $.__views.__alloyId4 = A$(Ti.UI.createTableViewRow({
        height: 85,
        leftImage: "/images/icons/uwot.png",
        id: "__alloyId4"
    }), "TableViewRow", null);
    var __alloyId5 = [];
    __alloyId5.push($.__views.__alloyId4);
    $.__views.__alloyId6 = A$(Ti.UI.createLabel({
        color: "#414444",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "left",
        left: 90,
        text: "UW Oshkosh Today",
        id: "__alloyId6"
    }), "Label", $.__views.__alloyId4);
    $.__views.__alloyId4.add($.__views.__alloyId6);
    $.__views.__alloyId7 = A$(Ti.UI.createTableViewRow({
        height: 85,
        leftImage: "/images/icons/events.png",
        id: "__alloyId7"
    }), "TableViewRow", null);
    __alloyId5.push($.__views.__alloyId7);
    $.__views.__alloyId8 = A$(Ti.UI.createLabel({
        color: "#414444",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "left",
        left: 90,
        text: "Campus Events",
        id: "__alloyId8"
    }), "Label", $.__views.__alloyId7);
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId9 = A$(Ti.UI.createTableViewRow({
        height: 85,
        leftImage: "/images/icons/at.png",
        id: "__alloyId9"
    }), "TableViewRow", null);
    __alloyId5.push($.__views.__alloyId9);
    $.__views.__alloyId10 = A$(Ti.UI.createLabel({
        color: "#414444",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "left",
        left: 90,
        text: "Advance-Titan",
        id: "__alloyId10"
    }), "Label", $.__views.__alloyId9);
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = A$(Ti.UI.createTableViewRow({
        height: 85,
        leftImage: "/images/icons/commence.png",
        id: "__alloyId11"
    }), "TableViewRow", null);
    __alloyId5.push($.__views.__alloyId11);
    $.__views.__alloyId12 = A$(Ti.UI.createLabel({
        color: "#414444",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "left",
        left: 90,
        text: "Commencement",
        id: "__alloyId12"
    }), "Label", $.__views.__alloyId11);
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId3 = A$(Ti.UI.createTableView({
        data: __alloyId5,
        id: "__alloyId3"
    }), "TableView", $.__views.newsEvents);
    $.__views.newsEvents.add($.__views.__alloyId3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;