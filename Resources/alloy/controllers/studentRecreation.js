function Controller() {
    function newsClick() {
        Titanium.Analytics.featureEvent("srwcNews");
        Ti.Platform.openURL("http://recreation.uwosh.edu/news-box");
    }
    function membershipClick() {
        Titanium.Analytics.featureEvent("srwcMembership");
        Ti.Platform.openURL("http://recreation.uwosh.edu/studentrecreationfacilities/studentrecreationfacilities/student-recreation-wellness-center-membership");
    }
    function featuresClick() {
        Titanium.Analytics.featureEvent("srwcFeatures");
        Ti.Platform.openURL("http://recreation.uwosh.edu/studentrecreationfacilities/studentrecreationfacilities/srwc-features");
    }
    function policiesClick() {
        Titanium.Analytics.featureEvent("srwcPolicies");
        Ti.Platform.openURL("http://recreation.uwosh.edu/studentrecreationfacilities/studentrecreationfacilities/student-recreation-wellness-center-policies");
    }
    function parkingClick() {
        Titanium.Analytics.featureEvent("srwcParking");
        Ti.Platform.openURL("http://recreation.uwosh.edu/studentrecreationfacilities/srwc-parking");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "studentRecreation";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.studentRecreation = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "Student Recreation & Wellness Center",
        id: "studentRecreation"
    });
    $.__views.studentRecreation && $.addTopLevelView($.__views.studentRecreation);
    $.__views.__alloyId271 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        backgroundColor: "#D79A27",
        id: "__alloyId271"
    });
    var __alloyId272 = [];
    __alloyId272.push($.__views.__alloyId271);
    $.__views.__alloyId273 = Ti.UI.createLabel({
        color: "#FFFFFF",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: 36,
        text: "Student Recreation & Wellness Center",
        id: "__alloyId273"
    });
    $.__views.__alloyId271.add($.__views.__alloyId273);
    $.__views.__alloyId274 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId274"
    });
    __alloyId272.push($.__views.__alloyId274);
    newsClick ? $.__views.__alloyId274.addEventListener("click", newsClick) : __defers["$.__views.__alloyId274!click!newsClick"] = true;
    $.__views.__alloyId275 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        text: "Tap for News",
        id: "__alloyId275"
    });
    $.__views.__alloyId274.add($.__views.__alloyId275);
    $.__views.__alloyId276 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId276"
    });
    __alloyId272.push($.__views.__alloyId276);
    $.__views.__alloyId277 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        backgroundColor: "#414444",
        id: "__alloyId277"
    });
    __alloyId272.push($.__views.__alloyId277);
    $.__views.__alloyId278 = Ti.UI.createLabel({
        color: "#FFFFFF",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        height: 36,
        text: "SRWC Hours",
        id: "__alloyId278"
    });
    $.__views.__alloyId277.add($.__views.__alloyId278);
    $.__views.__alloyId279 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId279"
    });
    __alloyId272.push($.__views.__alloyId279);
    $.__views.__alloyId280 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        text: "Sunday",
        id: "__alloyId280"
    });
    $.__views.__alloyId279.add($.__views.__alloyId280);
    $.__views.__alloyId281 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        right: 10,
        textAlign: "right",
        text: "10 a.m. - Midnight",
        id: "__alloyId281"
    });
    $.__views.__alloyId279.add($.__views.__alloyId281);
    $.__views.__alloyId282 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId282"
    });
    __alloyId272.push($.__views.__alloyId282);
    $.__views.__alloyId283 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        text: "Monday - Thursday",
        id: "__alloyId283"
    });
    $.__views.__alloyId282.add($.__views.__alloyId283);
    $.__views.__alloyId284 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        right: 10,
        textAlign: "right",
        text: "6 a.m. - Midnight",
        id: "__alloyId284"
    });
    $.__views.__alloyId282.add($.__views.__alloyId284);
    $.__views.__alloyId285 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId285"
    });
    __alloyId272.push($.__views.__alloyId285);
    $.__views.__alloyId286 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        text: "Friday",
        id: "__alloyId286"
    });
    $.__views.__alloyId285.add($.__views.__alloyId286);
    $.__views.__alloyId287 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        right: 10,
        textAlign: "right",
        text: "6 a.m. - 11 p.m.",
        id: "__alloyId287"
    });
    $.__views.__alloyId285.add($.__views.__alloyId287);
    $.__views.__alloyId288 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId288"
    });
    __alloyId272.push($.__views.__alloyId288);
    $.__views.__alloyId289 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        text: "Saturday",
        id: "__alloyId289"
    });
    $.__views.__alloyId288.add($.__views.__alloyId289);
    $.__views.__alloyId290 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        right: 10,
        textAlign: "right",
        text: "10 a.m. - 11 p.m.",
        id: "__alloyId290"
    });
    $.__views.__alloyId288.add($.__views.__alloyId290);
    $.__views.__alloyId291 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId291"
    });
    __alloyId272.push($.__views.__alloyId291);
    $.__views.__alloyId292 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId292"
    });
    __alloyId272.push($.__views.__alloyId292);
    membershipClick ? $.__views.__alloyId292.addEventListener("click", membershipClick) : __defers["$.__views.__alloyId292!click!membershipClick"] = true;
    $.__views.__alloyId293 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        text: "Tap for Membership Information",
        id: "__alloyId293"
    });
    $.__views.__alloyId292.add($.__views.__alloyId293);
    $.__views.__alloyId294 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId294"
    });
    __alloyId272.push($.__views.__alloyId294);
    featuresClick ? $.__views.__alloyId294.addEventListener("click", featuresClick) : __defers["$.__views.__alloyId294!click!featuresClick"] = true;
    $.__views.__alloyId295 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        text: "Tap for Features",
        id: "__alloyId295"
    });
    $.__views.__alloyId294.add($.__views.__alloyId295);
    $.__views.__alloyId296 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId296"
    });
    __alloyId272.push($.__views.__alloyId296);
    policiesClick ? $.__views.__alloyId296.addEventListener("click", policiesClick) : __defers["$.__views.__alloyId296!click!policiesClick"] = true;
    $.__views.__alloyId297 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        text: "Tap for Policies",
        id: "__alloyId297"
    });
    $.__views.__alloyId296.add($.__views.__alloyId297);
    $.__views.__alloyId298 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId298"
    });
    __alloyId272.push($.__views.__alloyId298);
    parkingClick ? $.__views.__alloyId298.addEventListener("click", parkingClick) : __defers["$.__views.__alloyId298!click!parkingClick"] = true;
    $.__views.__alloyId299 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        text: "Tap for Parking",
        id: "__alloyId299"
    });
    $.__views.__alloyId298.add($.__views.__alloyId299);
    $.__views.__alloyId270 = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        data: __alloyId272,
        id: "__alloyId270"
    });
    $.__views.studentRecreation.add($.__views.__alloyId270);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId274!click!newsClick"] && $.__views.__alloyId274.addEventListener("click", newsClick);
    __defers["$.__views.__alloyId292!click!membershipClick"] && $.__views.__alloyId292.addEventListener("click", membershipClick);
    __defers["$.__views.__alloyId294!click!featuresClick"] && $.__views.__alloyId294.addEventListener("click", featuresClick);
    __defers["$.__views.__alloyId296!click!policiesClick"] && $.__views.__alloyId296.addEventListener("click", policiesClick);
    __defers["$.__views.__alloyId298!click!parkingClick"] && $.__views.__alloyId298.addEventListener("click", parkingClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;