function Controller() {
    function phoneClick() {
        Ti.Platform.openURL("tel://920424" + args.person.phone);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "campusSearchDetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.campusSearchDetail = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        id: "campusSearchDetail"
    });
    $.__views.campusSearchDetail && $.addTopLevelView($.__views.campusSearchDetail);
    $.__views.__alloyId1 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId1"
    });
    var __alloyId2 = [];
    __alloyId2.push($.__views.__alloyId1);
    $.__views.name = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        id: "name"
    });
    $.__views.__alloyId1.add($.__views.name);
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId3"
    });
    __alloyId2.push($.__views.__alloyId3);
    $.__views.dept = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        id: "dept"
    });
    $.__views.__alloyId3.add($.__views.dept);
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId4"
    });
    __alloyId2.push($.__views.__alloyId4);
    $.__views.email = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        id: "email"
    });
    $.__views.__alloyId4.add($.__views.email);
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId5"
    });
    __alloyId2.push($.__views.__alloyId5);
    phoneClick ? $.__views.__alloyId5.addEventListener("click", phoneClick) : __defers["$.__views.__alloyId5!click!phoneClick"] = true;
    $.__views.phone = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        id: "phone"
    });
    $.__views.__alloyId5.add($.__views.phone);
    $.__views.__alloyId6 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId6"
    });
    __alloyId2.push($.__views.__alloyId6);
    $.__views.office = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        id: "office"
    });
    $.__views.__alloyId6.add($.__views.office);
    $.__views.__alloyId0 = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        data: __alloyId2,
        id: "__alloyId0"
    });
    $.__views.campusSearchDetail.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.name.text = args.person.fullName;
    $.dept.text = args.person.dept;
    $.email.text = args.person.email;
    $.phone.text = "(920) 424-" + args.person.phone;
    $.office.text = args.person.office;
    __defers["$.__views.__alloyId5!click!phoneClick"] && $.__views.__alloyId5.addEventListener("click", phoneClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;