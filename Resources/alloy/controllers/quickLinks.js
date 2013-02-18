function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.quickLinks = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        barColor: "#414444",
        id: "quickLinks"
    }), "Window", null);
    $.addTopLevelView($.__views.quickLinks);
    $.__views.__alloyId25 = A$(Ti.UI.createLabel({
        color: "#414444",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "left",
        left: 90,
        text: "Quick Links",
        id: "__alloyId25"
    }), "Label", $.__views.quickLinks);
    $.__views.quickLinks.add($.__views.__alloyId25);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;