function Controller() {
    function titanAlertClick() {
        Titanium.Analytics.featureEvent("titanAlertClick");
        Ti.Platform.openURL("http://www.uwosh.edu/home/titanalert/");
    }
    function campusPoliceClick() {
        Titanium.Analytics.featureEvent("callCampusPolice");
        Ti.Platform.openURL("telprompt:9204241212");
    }
    function riskManagementClick() {
        Titanium.Analytics.featureEvent("callRiskManagement");
        Ti.Platform.openURL("telprompt:9204241191");
    }
    function facilitiesClick() {
        Titanium.Analytics.featureEvent("callFacilities");
        Ti.Platform.openURL("telprompt:9204243466");
    }
    function safeWalkClick() {
        Titanium.Analytics.featureEvent("callSafeWalk");
        Ti.Platform.openURL("telprompt:9204241212");
    }
    function crisisHotlineClick() {
        Titanium.Analytics.featureEvent("callCrisisHotline");
        Ti.Platform.openURL("telprompt:9202337707");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "emergency";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.emergency = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "Emergency",
        id: "emergency"
    });
    $.__views.emergency && $.addTopLevelView($.__views.emergency);
    $.__views.__alloyId66 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        backgroundColor: "#CC3333",
        id: "__alloyId66"
    });
    var __alloyId67 = [];
    __alloyId67.push($.__views.__alloyId66);
    titanAlertClick ? $.__views.__alloyId66.addEventListener("click", titanAlertClick) : __defers["$.__views.__alloyId66!click!titanAlertClick"] = true;
    $.__views.__alloyId68 = Ti.UI.createLabel({
        color: "#FFFFFF",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        height: 36,
        text: "Sign up for TitanAlert",
        id: "__alloyId68"
    });
    $.__views.__alloyId66.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        backgroundColor: "#D79A27",
        id: "__alloyId69"
    });
    __alloyId67.push($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createLabel({
        color: "#FFFFFF",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        height: 36,
        text: "Reporting Emergencies",
        id: "__alloyId70"
    });
    $.__views.__alloyId69.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        backgroundColor: "#414444",
        id: "__alloyId71"
    });
    __alloyId67.push($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createLabel({
        color: "#FFFFFF",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        height: 36,
        text: "When to Call 911",
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId73"
    });
    __alloyId67.push($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        text: "Call 911 in all emergencies.",
        id: "__alloyId74"
    });
    $.__views.__alloyId73.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId75"
    });
    __alloyId67.push($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        text: "Note: Dial 9-911 from a University phone.",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        backgroundColor: "#D79A27",
        id: "__alloyId77"
    });
    __alloyId67.push($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createLabel({
        color: "#FFFFFF",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        height: 36,
        text: "Non-Emergency Phone #'s'",
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId79"
    });
    __alloyId67.push($.__views.__alloyId79);
    campusPoliceClick ? $.__views.__alloyId79.addEventListener("click", campusPoliceClick) : __defers["$.__views.__alloyId79!click!campusPoliceClick"] = true;
    $.__views.__alloyId80 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        text: "Campus Police:",
        id: "__alloyId80"
    });
    $.__views.__alloyId79.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        right: 10,
        textAlign: "right",
        text: "(920) 424-1212",
        id: "__alloyId81"
    });
    $.__views.__alloyId79.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId82"
    });
    __alloyId67.push($.__views.__alloyId82);
    riskManagementClick ? $.__views.__alloyId82.addEventListener("click", riskManagementClick) : __defers["$.__views.__alloyId82!click!riskManagementClick"] = true;
    $.__views.__alloyId83 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        text: "Risk Management:",
        id: "__alloyId83"
    });
    $.__views.__alloyId82.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        right: 10,
        textAlign: "right",
        text: "(920) 424-1191",
        id: "__alloyId84"
    });
    $.__views.__alloyId82.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId85"
    });
    __alloyId67.push($.__views.__alloyId85);
    facilitiesClick ? $.__views.__alloyId85.addEventListener("click", facilitiesClick) : __defers["$.__views.__alloyId85!click!facilitiesClick"] = true;
    $.__views.__alloyId86 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        text: "Facilities:",
        id: "__alloyId86"
    });
    $.__views.__alloyId85.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        right: 10,
        textAlign: "right",
        text: "(920) 424-3466",
        id: "__alloyId87"
    });
    $.__views.__alloyId85.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId88"
    });
    __alloyId67.push($.__views.__alloyId88);
    safeWalkClick ? $.__views.__alloyId88.addEventListener("click", safeWalkClick) : __defers["$.__views.__alloyId88!click!safeWalkClick"] = true;
    $.__views.__alloyId89 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        text: "Safe Walk:",
        id: "__alloyId89"
    });
    $.__views.__alloyId88.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        right: 10,
        textAlign: "right",
        text: "(920) 424-1212",
        id: "__alloyId90"
    });
    $.__views.__alloyId88.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId91"
    });
    __alloyId67.push($.__views.__alloyId91);
    crisisHotlineClick ? $.__views.__alloyId91.addEventListener("click", crisisHotlineClick) : __defers["$.__views.__alloyId91!click!crisisHotlineClick"] = true;
    $.__views.__alloyId92 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        text: "Crisis Hotline:",
        id: "__alloyId92"
    });
    $.__views.__alloyId91.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        right: 10,
        textAlign: "right",
        text: "(920) 233-7707",
        id: "__alloyId93"
    });
    $.__views.__alloyId91.add($.__views.__alloyId93);
    $.__views.__alloyId65 = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        data: __alloyId67,
        id: "__alloyId65"
    });
    $.__views.emergency.add($.__views.__alloyId65);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId66!click!titanAlertClick"] && $.__views.__alloyId66.addEventListener("click", titanAlertClick);
    __defers["$.__views.__alloyId79!click!campusPoliceClick"] && $.__views.__alloyId79.addEventListener("click", campusPoliceClick);
    __defers["$.__views.__alloyId82!click!riskManagementClick"] && $.__views.__alloyId82.addEventListener("click", riskManagementClick);
    __defers["$.__views.__alloyId85!click!facilitiesClick"] && $.__views.__alloyId85.addEventListener("click", facilitiesClick);
    __defers["$.__views.__alloyId88!click!safeWalkClick"] && $.__views.__alloyId88.addEventListener("click", safeWalkClick);
    __defers["$.__views.__alloyId91!click!crisisHotlineClick"] && $.__views.__alloyId91.addEventListener("click", crisisHotlineClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;