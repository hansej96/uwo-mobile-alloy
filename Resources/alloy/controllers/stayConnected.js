function Controller() {
    function twitterAccountClick() {
        Titanium.Analytics.featureEvent("twitterAccountList");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("twitterAccountList").getView());
    }
    function facebookAccountClick() {
        Titanium.Analytics.featureEvent("facebookAccountList");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("facebookAccountList").getView());
    }
    function youtubeAccountClick() {
        Titanium.Analytics.featureEvent("youtube");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("webViews", {
            url: "http://www.youtube.com/uwosh",
            title: "YouTube"
        }).getView());
    }
    function twitterAccountAndroidClick() {
        Titanium.Analytics.featureEvent("twitterAccountList");
        Alloy.createController("twitterAccountList").getView().open();
    }
    function facebookAccountAndroidClick() {
        Titanium.Analytics.featureEvent("facebookAccountList");
        Alloy.createController("facebookAccountList").getView().open();
    }
    function youtubeAccountAndroidClick() {
        Titanium.Analytics.featureEvent("youtube");
        Ti.Platform.openURL("http://www.youtube.com/uwosh");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "stayConnected";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.stayConnected = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "Stay Connected",
        id: "stayConnected"
    });
    $.__views.stayConnected && $.addTopLevelView($.__views.stayConnected);
    $.__views.__alloyId254 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/twitter.png",
        id: "__alloyId254"
    });
    var __alloyId255 = [];
    __alloyId255.push($.__views.__alloyId254);
    twitterAccountClick ? $.__views.__alloyId254.addEventListener("click", twitterAccountClick) : __defers["$.__views.__alloyId254!click!twitterAccountClick"] = true;
    $.__views.__alloyId256 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Twitter",
        id: "__alloyId256"
    });
    $.__views.__alloyId254.add($.__views.__alloyId256);
    $.__views.__alloyId257 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/facebook.png",
        id: "__alloyId257"
    });
    __alloyId255.push($.__views.__alloyId257);
    facebookAccountClick ? $.__views.__alloyId257.addEventListener("click", facebookAccountClick) : __defers["$.__views.__alloyId257!click!facebookAccountClick"] = true;
    $.__views.__alloyId258 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Facebook",
        id: "__alloyId258"
    });
    $.__views.__alloyId257.add($.__views.__alloyId258);
    $.__views.__alloyId259 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/youtube.png",
        id: "__alloyId259"
    });
    __alloyId255.push($.__views.__alloyId259);
    youtubeAccountClick ? $.__views.__alloyId259.addEventListener("click", youtubeAccountClick) : __defers["$.__views.__alloyId259!click!youtubeAccountClick"] = true;
    $.__views.__alloyId260 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "YouTube",
        id: "__alloyId260"
    });
    $.__views.__alloyId259.add($.__views.__alloyId260);
    $.__views.__alloyId253 = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        data: __alloyId255,
        id: "__alloyId253"
    });
    $.__views.stayConnected.add($.__views.__alloyId253);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId254!click!twitterAccountClick"] && $.__views.__alloyId254.addEventListener("click", twitterAccountClick);
    __defers["$.__views.__alloyId257!click!facebookAccountClick"] && $.__views.__alloyId257.addEventListener("click", facebookAccountClick);
    __defers["$.__views.__alloyId259!click!youtubeAccountClick"] && $.__views.__alloyId259.addEventListener("click", youtubeAccountClick);
    __defers["$.__views.__alloyId263!click!twitterAccountAndroidClick"] && $.__views.__alloyId263.addEventListener("click", twitterAccountAndroidClick);
    __defers["$.__views.__alloyId266!click!facebookAccountAndroidClick"] && $.__views.__alloyId266.addEventListener("click", facebookAccountAndroidClick);
    __defers["$.__views.__alloyId268!click!youtubeAccountAndroidClick"] && $.__views.__alloyId268.addEventListener("click", youtubeAccountAndroidClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;