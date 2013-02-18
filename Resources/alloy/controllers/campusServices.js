function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.campusServices = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        barColor: "#414444",
        id: "campusServices"
    }), "Window", null);
    $.addTopLevelView($.__views.campusServices);
    $.__views.__alloyId0 = A$(Ti.UI.createLabel({
        color: "#414444",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "left",
        left: 90,
        text: "Campu Services",
        id: "__alloyId0"
    }), "Label", $.__views.campusServices);
    $.__views.campusServices.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;