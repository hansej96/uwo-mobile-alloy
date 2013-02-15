function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.stayConnected = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        barColor: "#555",
        id: "stayConnected"
    }), "Window", null);
    $.addTopLevelView($.__views.stayConnected);
    $.__views.__alloyId7 = A$(Ti.UI.createLabel({
        text: "Stay Connected",
        id: "__alloyId7"
    }), "Label", $.__views.stayConnected);
    $.__views.stayConnected.add($.__views.__alloyId7);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;