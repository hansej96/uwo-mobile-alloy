function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.news - events = A$(Ti.UI.createView({
        backgroundColor: "white",
        id: "news-events"
    }), "View", null);
    $.addTopLevelView($.__views.news - events);
    $.__views.__alloyId1 = A$(Ti.UI.createLabel({
        text: "News &amp; Events",
        id: "__alloyId1"
    }), "Label", $.__views.news - events);
    $.__views.news - events.add($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.news - events.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;