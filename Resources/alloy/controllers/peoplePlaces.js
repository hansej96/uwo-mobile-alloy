function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.peoplePlaces = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        barColor: "#414444",
        title: "News & Events",
        id: "peoplePlaces"
    }), "Window", null);
    $.addTopLevelView($.__views.peoplePlaces);
    $.__views.__alloyId14 = A$(Ti.UI.createTableViewRow({
        height: 85,
        leftImage: "/images/icons/peoplesearch.png",
        id: "__alloyId14"
    }), "TableViewRow", null);
    var __alloyId15 = [];
    __alloyId15.push($.__views.__alloyId14);
    $.__views.__alloyId16 = A$(Ti.UI.createLabel({
        color: "#414444",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "left",
        left: 90,
        text: "People Search",
        id: "__alloyId16"
    }), "Label", $.__views.__alloyId14);
    $.__views.__alloyId14.add($.__views.__alloyId16);
    $.__views.__alloyId17 = A$(Ti.UI.createTableViewRow({
        height: 85,
        leftImage: "/images/icons/deptsearch.png",
        id: "__alloyId17"
    }), "TableViewRow", null);
    __alloyId15.push($.__views.__alloyId17);
    $.__views.__alloyId18 = A$(Ti.UI.createLabel({
        color: "#414444",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "left",
        left: 90,
        text: "Department Search",
        id: "__alloyId18"
    }), "Label", $.__views.__alloyId17);
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId19 = A$(Ti.UI.createTableViewRow({
        height: 85,
        leftImage: "/images/icons/location.png",
        id: "__alloyId19"
    }), "TableViewRow", null);
    __alloyId15.push($.__views.__alloyId19);
    $.__views.__alloyId20 = A$(Ti.UI.createLabel({
        color: "#414444",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "left",
        left: 90,
        text: "Location Search",
        id: "__alloyId20"
    }), "Label", $.__views.__alloyId19);
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = A$(Ti.UI.createTableViewRow({
        height: 85,
        leftImage: "/images/icons/map.png",
        id: "__alloyId21"
    }), "TableViewRow", null);
    __alloyId15.push($.__views.__alloyId21);
    $.__views.__alloyId22 = A$(Ti.UI.createLabel({
        color: "#414444",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "left",
        left: 90,
        text: "Campus Map",
        id: "__alloyId22"
    }), "Label", $.__views.__alloyId21);
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = A$(Ti.UI.createTableViewRow({
        height: 85,
        leftImage: "/images/icons/parking.png",
        id: "__alloyId23"
    }), "TableViewRow", null);
    __alloyId15.push($.__views.__alloyId23);
    $.__views.__alloyId24 = A$(Ti.UI.createLabel({
        color: "#414444",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "left",
        left: 90,
        text: "Parking Map",
        id: "__alloyId24"
    }), "Label", $.__views.__alloyId23);
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId13 = A$(Ti.UI.createTableView({
        data: __alloyId15,
        id: "__alloyId13"
    }), "TableView", $.__views.peoplePlaces);
    $.__views.peoplePlaces.add($.__views.__alloyId13);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;