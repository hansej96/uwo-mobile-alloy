function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.newsEvents = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "newsEvents"
    }), "Window", null);
    $.addTopLevelView($.__views.newsEvents);
    $.__views.t = A$(Ti.UI.createLabel({
        text: "View 2",
        id: "t"
    }), "Label", $.__views.newsEvents);
    $.__views.newsEvents.add($.__views.t);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;