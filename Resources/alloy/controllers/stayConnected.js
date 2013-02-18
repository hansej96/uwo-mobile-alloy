function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.stayConnected = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        barColor: "#414444",
        id: "stayConnected"
    }), "Window", null);
    $.addTopLevelView($.__views.stayConnected);
    $.__views.__alloyId15 = A$(Ti.UI.createLabel({
        color: "#414444",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "left",
        left: 90,
        text: "Stay Connected",
        id: "__alloyId15"
    }), "Label", $.__views.stayConnected);
    $.__views.stayConnected.add($.__views.__alloyId15);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;