function Controller() {
    function departmentClick() {
        Titanium.Analytics.featureEvent("departmentPeopleList");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("departmentPeopleList", {
            peopleOrDeptUrl: $.department.text
        }).getView());
    }
    function departmentAndroidClick() {
        Titanium.Analytics.featureEvent("departmentPeopleList");
        Alloy.createController("departmentPeopleList", {
            peopleOrDeptUrl: $.department.text
        }).getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "departmentListRow";
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
    departmentClick ? $.__views.row.addEventListener("click", departmentClick) : __defers["$.__views.row!click!departmentClick"] = true;
    $.__views.department = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        id: "department"
    });
    $.__views.row.add($.__views.department);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var row = [];
    row.department = args.item;
    $.department.text = row.department.dept;
    __defers["$.__views.row!click!departmentClick"] && $.__views.row.addEventListener("click", departmentClick);
    __defers["$.__views.row!click!departmentAndroidClick"] && $.__views.row.addEventListener("click", departmentAndroidClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;