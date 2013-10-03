function Controller() {
    function openDetail() {
        Titanium.Analytics.featureEvent("locationSearchDetail");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("locationSearchDetail", {
            location: row.location
        }).getView());
    }
    function openDetailAndroid() {
        Titanium.Analytics.featureEvent("locationSearchDetail");
        Alloy.createController("locationSearchDetail", {
            location: row.location
        }).getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "locationSearchRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    openDetail ? $.__views.row.addEventListener("click", openDetail) : __defers["$.__views.row!click!openDetail"] = true;
    $.__views.title = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "title"
    });
    $.__views.row.add($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var row = [];
    row.location = args.item;
    $.row.title = row.location.title;
    __defers["$.__views.row!click!openDetail"] && $.__views.row.addEventListener("click", openDetail);
    __defers["$.__views.row!click!openDetailAndroid"] && $.__views.row.addEventListener("click", openDetailAndroid);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;