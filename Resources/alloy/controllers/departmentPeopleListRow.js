function Controller() {
    function openDetail() {
        Titanium.Analytics.featureEvent("campusSearchDetail");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("campusSearchDetail", {
            person: row.person
        }).getView());
    }
    function openDetailAndroid() {
        Titanium.Analytics.featureEvent("campusSearchDetail");
        Alloy.createController("campusSearchDetail", {
            person: row.person
        }).getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "departmentPeopleListRow";
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
    $.__views.person = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        id: "person"
    });
    $.__views.row.add($.__views.person);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var row = [];
    row.person = args.item;
    $.person.text = row.person.fullName;
    __defers["$.__views.row!click!openDetail"] && $.__views.row.addEventListener("click", openDetail);
    __defers["$.__views.row!click!openDetailAndroid"] && $.__views.row.addEventListener("click", openDetailAndroid);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;