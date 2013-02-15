function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.emergency = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "emergency"
    }), "Window", null);
    $.addTopLevelView($.__views.emergency);
    $.__views.__alloyId1 = A$(Ti.UI.createLabel({
        text: "Emergency",
        id: "__alloyId1"
    }), "Label", $.__views.emergency);
    $.__views.emergency.add($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;