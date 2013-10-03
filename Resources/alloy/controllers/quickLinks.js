function Controller() {
    function titanWebClick() {
        Titanium.Analytics.featureEvent("titanWebQuickLinks");
        Ti.Platform.openURL("https://titanweb5.uwosh.edu/titanweb_prd/signon.html");
    }
    function d2lClick() {
        Titanium.Analytics.featureEvent("d2lQuickLinks");
        Ti.Platform.openURL("https://uwosh.courses.wisconsin.edu/Shibboleth.sso/Login?target=https://uwosh.courses.wisconsin.edu/d2l/shibbolethSSO/deepLinkLogin.d2l");
    }
    function titanEmailClick() {
        Titanium.Analytics.featureEvent("titanEmailQuickLinks");
        Ti.Platform.openURL("https://mail.google.com");
    }
    function mobileSetupClick() {
        Titanium.Analytics.featureEvent("mobileSetupQuickLinks");
        Ti.Platform.openURL("http://www.uwosh.edu/titanapps/mobile-devices");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "quickLinks";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.quickLinks = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "Quicklinks",
        id: "quickLinks"
    });
    $.__views.quickLinks && $.addTopLevelView($.__views.quickLinks);
    $.__views.__alloyId206 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/titanweb.png",
        id: "__alloyId206"
    });
    var __alloyId207 = [];
    __alloyId207.push($.__views.__alloyId206);
    titanWebClick ? $.__views.__alloyId206.addEventListener("click", titanWebClick) : __defers["$.__views.__alloyId206!click!titanWebClick"] = true;
    $.__views.__alloyId208 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "TitanWeb",
        id: "__alloyId208"
    });
    $.__views.__alloyId206.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/d2l.png",
        id: "__alloyId209"
    });
    __alloyId207.push($.__views.__alloyId209);
    d2lClick ? $.__views.__alloyId209.addEventListener("click", d2lClick) : __defers["$.__views.__alloyId209!click!d2lClick"] = true;
    $.__views.__alloyId210 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Desire 2 Learn",
        id: "__alloyId210"
    });
    $.__views.__alloyId209.add($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/titanmail.png",
        id: "__alloyId211"
    });
    __alloyId207.push($.__views.__alloyId211);
    titanEmailClick ? $.__views.__alloyId211.addEventListener("click", titanEmailClick) : __defers["$.__views.__alloyId211!click!titanEmailClick"] = true;
    $.__views.__alloyId212 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Titan Apps (email)",
        id: "__alloyId212"
    });
    $.__views.__alloyId211.add($.__views.__alloyId212);
    $.__views.__alloyId213 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/titanmobile.png",
        id: "__alloyId213"
    });
    __alloyId207.push($.__views.__alloyId213);
    mobileSetupClick ? $.__views.__alloyId213.addEventListener("click", mobileSetupClick) : __defers["$.__views.__alloyId213!click!mobileSetupClick"] = true;
    $.__views.__alloyId214 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Titan Apps (email) mobile setup",
        id: "__alloyId214"
    });
    $.__views.__alloyId213.add($.__views.__alloyId214);
    $.__views.__alloyId205 = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        data: __alloyId207,
        id: "__alloyId205"
    });
    $.__views.quickLinks.add($.__views.__alloyId205);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId206!click!titanWebClick"] && $.__views.__alloyId206.addEventListener("click", titanWebClick);
    __defers["$.__views.__alloyId209!click!d2lClick"] && $.__views.__alloyId209.addEventListener("click", d2lClick);
    __defers["$.__views.__alloyId211!click!titanEmailClick"] && $.__views.__alloyId211.addEventListener("click", titanEmailClick);
    __defers["$.__views.__alloyId213!click!mobileSetupClick"] && $.__views.__alloyId213.addEventListener("click", mobileSetupClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;