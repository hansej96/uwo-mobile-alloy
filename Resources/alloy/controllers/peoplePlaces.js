function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.peoplePlaces = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "peoplePlaces"
    }), "Window", null);
    $.addTopLevelView($.__views.peoplePlaces);
    $.__views.__alloyId4 = A$(Ti.UI.createLabel({
        text: "People &amp; Places",
        id: "__alloyId4"
    }), "Label", $.__views.peoplePlaces);
    $.__views.peoplePlaces.add($.__views.__alloyId4);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;