function Controller() {
    function uwoshkoshClick() {
        Titanium.Analytics.featureEvent("twitterUWOshkosh");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("webViews", {
            url: "https://twitter.com/uwoshkosh",
            title: "@uwoshkosh"
        }).getView());
    }
    function uwoshkoshTodayClick() {
        Titanium.Analytics.featureEvent("twitterUWOshkoshToday");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("webViews", {
            url: "https://twitter.com/UWOshkoshToday",
            title: "@UWOshkoshToday"
        }).getView());
    }
    function uwoshkoshEngageClick() {
        Titanium.Analytics.featureEvent("twitterUWOshkoshEngage");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("webViews", {
            url: "https://twitter.com/UWOshkoshEngage",
            title: "@UWOshkoshEngage"
        }).getView());
    }
    function uwoAdmissionsClick() {
        Titanium.Analytics.featureEvent("twitterUWOAdmissions");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("webViews", {
            url: "https://twitter.com/UWOAdmissions",
            title: "@UWOAdmissions"
        }).getView());
    }
    function uwoshkoshTitansClick() {
        Titanium.Analytics.featureEvent("twitterUWOshkoshTitans");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("webViews", {
            url: "https://twitter.com/UWOshkoshTitans",
            title: "@UWOshkoshTitans"
        }).getView());
    }
    function uwoshkoshAndroidClick() {
        Titanium.Analytics.featureEvent("twitterUWOshkosh");
        Ti.Platform.openURL("https://twitter.com/uwoshkosh");
    }
    function uwoshkoshTodayAndroidClick() {
        Titanium.Analytics.featureEvent("twitterUWOshkoshToday");
        Ti.Platform.openURL("https://twitter.com/UWOshkoshToday");
    }
    function uwoshkoshEngageAndroidClick() {
        Titanium.Analytics.featureEvent("twitterUWOshkoshEngage");
        Ti.Platform.openURL("https://twitter.com/UWOshkoshEngage");
    }
    function uwoAdmissionsAndroidClick() {
        Titanium.Analytics.featureEvent("twitterUWOAdmissions");
        Ti.Platform.openURL("https://twitter.com/UWOAdmissions");
    }
    function uwoshkoshTitansAndroidClick() {
        Titanium.Analytics.featureEvent("twitterUWOshkoshTitans");
        Ti.Platform.openURL("https://twitter.com/UWOshkoshTitans");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "twitterAccountList";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.twitterAccountList = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "Connect",
        id: "twitterAccountList"
    });
    $.__views.twitterAccountList && $.addTopLevelView($.__views.twitterAccountList);
    $.__views.__alloyId309 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        id: "__alloyId309"
    });
    var __alloyId310 = [];
    __alloyId310.push($.__views.__alloyId309);
    uwoshkoshClick ? $.__views.__alloyId309.addEventListener("click", uwoshkoshClick) : __defers["$.__views.__alloyId309!click!uwoshkoshClick"] = true;
    $.__views.__alloyId311 = Ti.UI.createImageView({
        left: 5,
        height: 73,
        width: 73,
        image: "/images/avatars/uwoshkosh.jpg",
        id: "__alloyId311"
    });
    $.__views.__alloyId309.add($.__views.__alloyId311);
    $.__views.__alloyId312 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 90,
        text: "@uwoshkosh",
        id: "__alloyId312"
    });
    $.__views.__alloyId309.add($.__views.__alloyId312);
    $.__views.__alloyId313 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        id: "__alloyId313"
    });
    __alloyId310.push($.__views.__alloyId313);
    uwoshkoshTodayClick ? $.__views.__alloyId313.addEventListener("click", uwoshkoshTodayClick) : __defers["$.__views.__alloyId313!click!uwoshkoshTodayClick"] = true;
    $.__views.__alloyId314 = Ti.UI.createImageView({
        left: 5,
        height: 73,
        width: 73,
        image: "/images/avatars/UWOshkoshToday.jpg",
        id: "__alloyId314"
    });
    $.__views.__alloyId313.add($.__views.__alloyId314);
    $.__views.__alloyId315 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 90,
        text: "@UWOshkoshToday",
        id: "__alloyId315"
    });
    $.__views.__alloyId313.add($.__views.__alloyId315);
    $.__views.__alloyId316 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        id: "__alloyId316"
    });
    __alloyId310.push($.__views.__alloyId316);
    uwoshkoshEngageClick ? $.__views.__alloyId316.addEventListener("click", uwoshkoshEngageClick) : __defers["$.__views.__alloyId316!click!uwoshkoshEngageClick"] = true;
    $.__views.__alloyId317 = Ti.UI.createImageView({
        left: 5,
        height: 73,
        width: 73,
        image: "/images/avatars/UWOshkoshEngage.jpg",
        id: "__alloyId317"
    });
    $.__views.__alloyId316.add($.__views.__alloyId317);
    $.__views.__alloyId318 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 90,
        text: "@UWOshkoshEngage",
        id: "__alloyId318"
    });
    $.__views.__alloyId316.add($.__views.__alloyId318);
    $.__views.__alloyId319 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        id: "__alloyId319"
    });
    __alloyId310.push($.__views.__alloyId319);
    uwoAdmissionsClick ? $.__views.__alloyId319.addEventListener("click", uwoAdmissionsClick) : __defers["$.__views.__alloyId319!click!uwoAdmissionsClick"] = true;
    $.__views.__alloyId320 = Ti.UI.createImageView({
        left: 5,
        height: 73,
        width: 73,
        image: "/images/avatars/UWOAdmissions.jpg",
        id: "__alloyId320"
    });
    $.__views.__alloyId319.add($.__views.__alloyId320);
    $.__views.__alloyId321 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 90,
        text: "@UWOAdmissions",
        id: "__alloyId321"
    });
    $.__views.__alloyId319.add($.__views.__alloyId321);
    $.__views.__alloyId322 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        id: "__alloyId322"
    });
    __alloyId310.push($.__views.__alloyId322);
    uwoshkoshTitansClick ? $.__views.__alloyId322.addEventListener("click", uwoshkoshTitansClick) : __defers["$.__views.__alloyId322!click!uwoshkoshTitansClick"] = true;
    $.__views.__alloyId323 = Ti.UI.createImageView({
        left: 5,
        height: 73,
        width: 73,
        image: "/images/avatars/UWOshkoshTitans.jpg",
        id: "__alloyId323"
    });
    $.__views.__alloyId322.add($.__views.__alloyId323);
    $.__views.__alloyId324 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 90,
        text: "@UWOshkoshTitans",
        id: "__alloyId324"
    });
    $.__views.__alloyId322.add($.__views.__alloyId324);
    $.__views.__alloyId308 = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        data: __alloyId310,
        id: "__alloyId308"
    });
    $.__views.twitterAccountList.add($.__views.__alloyId308);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId309!click!uwoshkoshClick"] && $.__views.__alloyId309.addEventListener("click", uwoshkoshClick);
    __defers["$.__views.__alloyId313!click!uwoshkoshTodayClick"] && $.__views.__alloyId313.addEventListener("click", uwoshkoshTodayClick);
    __defers["$.__views.__alloyId316!click!uwoshkoshEngageClick"] && $.__views.__alloyId316.addEventListener("click", uwoshkoshEngageClick);
    __defers["$.__views.__alloyId319!click!uwoAdmissionsClick"] && $.__views.__alloyId319.addEventListener("click", uwoAdmissionsClick);
    __defers["$.__views.__alloyId322!click!uwoshkoshTitansClick"] && $.__views.__alloyId322.addEventListener("click", uwoshkoshTitansClick);
    __defers["$.__views.__alloyId327!click!uwoshkoshAndroidClick"] && $.__views.__alloyId327.addEventListener("click", uwoshkoshAndroidClick);
    __defers["$.__views.__alloyId331!click!uwoshkoshTodayAndroidClick"] && $.__views.__alloyId331.addEventListener("click", uwoshkoshTodayAndroidClick);
    __defers["$.__views.__alloyId334!click!uwoshkoshEngageAndroidClick"] && $.__views.__alloyId334.addEventListener("click", uwoshkoshEngageAndroidClick);
    __defers["$.__views.__alloyId337!click!uwoAdmissionsAndroidClick"] && $.__views.__alloyId337.addEventListener("click", uwoAdmissionsAndroidClick);
    __defers["$.__views.__alloyId340!click!uwoshkoshTitansAndroidClick"] && $.__views.__alloyId340.addEventListener("click", uwoshkoshTitansAndroidClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;