function Controller() {
    function uwotClick() {
        Titanium.Analytics.featureEvent("newsFeedUWOT");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("newsFeed", {
            url: "http://www.uwosh.edu/today/feed/?cat=5%2C6"
        }).getView());
    }
    function campusEventsClick() {
        Titanium.Analytics.featureEvent("newsFeedCampusEvents");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("newsFeed", {
            url: "http://www.uwosh.edu/home/events/events/RSS"
        }).getView());
    }
    function advanceTitanClick() {
        Titanium.Analytics.featureEvent("newsFeedAdvanceTitan");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("newsFeed", {
            url: "http://www.advancetitan.com/se/the-advance-titan-rss-1.301985"
        }).getView());
    }
    function commencementClick() {
        Titanium.Analytics.featureEvent("commencement");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("commencement").getView());
    }
    function uwotAndroidClick() {
        Titanium.Analytics.featureEvent("newsFeedUWOT");
        Alloy.createController("newsFeed", {
            url: "http://www.uwosh.edu/today/feed/?cat=5%2C6"
        }).getView().open();
    }
    function campusEventsAndroidClick() {
        Titanium.Analytics.featureEvent("newsFeedCampusEvents");
        Alloy.createController("newsFeed", {
            url: "http://www.uwosh.edu/home/events/events/RSS"
        }).getView().open();
    }
    function advanceTitanAndroidClick() {
        Titanium.Analytics.featureEvent("newsFeedAdvanceTitan");
        Alloy.createController("newsFeed", {
            url: "http://www.advancetitan.com/se/the-advance-titan-rss-1.301985"
        }).getView().open();
    }
    function commencementAndroidClick() {
        Titanium.Analytics.featureEvent("commencement");
        Alloy.createController("commencement").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newsEvents";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.newsEvents = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "News & Events",
        id: "newsEvents"
    });
    $.__views.newsEvents && $.addTopLevelView($.__views.newsEvents);
    $.__views.__alloyId137 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/uwot.png",
        id: "__alloyId137"
    });
    var __alloyId138 = [];
    __alloyId138.push($.__views.__alloyId137);
    uwotClick ? $.__views.__alloyId137.addEventListener("click", uwotClick) : __defers["$.__views.__alloyId137!click!uwotClick"] = true;
    $.__views.__alloyId139 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "UW Oshkosh Today",
        id: "__alloyId139"
    });
    $.__views.__alloyId137.add($.__views.__alloyId139);
    $.__views.__alloyId140 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/events.png",
        id: "__alloyId140"
    });
    __alloyId138.push($.__views.__alloyId140);
    campusEventsClick ? $.__views.__alloyId140.addEventListener("click", campusEventsClick) : __defers["$.__views.__alloyId140!click!campusEventsClick"] = true;
    $.__views.__alloyId141 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Campus Events",
        id: "__alloyId141"
    });
    $.__views.__alloyId140.add($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/at.png",
        id: "__alloyId142"
    });
    __alloyId138.push($.__views.__alloyId142);
    advanceTitanClick ? $.__views.__alloyId142.addEventListener("click", advanceTitanClick) : __defers["$.__views.__alloyId142!click!advanceTitanClick"] = true;
    $.__views.__alloyId143 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Advance-Titan",
        id: "__alloyId143"
    });
    $.__views.__alloyId142.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/commence.png",
        id: "__alloyId144"
    });
    __alloyId138.push($.__views.__alloyId144);
    commencementClick ? $.__views.__alloyId144.addEventListener("click", commencementClick) : __defers["$.__views.__alloyId144!click!commencementClick"] = true;
    $.__views.__alloyId145 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Commencement",
        id: "__alloyId145"
    });
    $.__views.__alloyId144.add($.__views.__alloyId145);
    $.__views.__alloyId136 = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        data: __alloyId138,
        id: "__alloyId136"
    });
    $.__views.newsEvents.add($.__views.__alloyId136);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId137!click!uwotClick"] && $.__views.__alloyId137.addEventListener("click", uwotClick);
    __defers["$.__views.__alloyId140!click!campusEventsClick"] && $.__views.__alloyId140.addEventListener("click", campusEventsClick);
    __defers["$.__views.__alloyId142!click!advanceTitanClick"] && $.__views.__alloyId142.addEventListener("click", advanceTitanClick);
    __defers["$.__views.__alloyId144!click!commencementClick"] && $.__views.__alloyId144.addEventListener("click", commencementClick);
    __defers["$.__views.__alloyId148!click!uwotAndroidClick"] && $.__views.__alloyId148.addEventListener("click", uwotAndroidClick);
    __defers["$.__views.__alloyId151!click!campusEventsAndroidClick"] && $.__views.__alloyId151.addEventListener("click", campusEventsAndroidClick);
    __defers["$.__views.__alloyId153!click!advanceTitanAndroidClick"] && $.__views.__alloyId153.addEventListener("click", advanceTitanAndroidClick);
    __defers["$.__views.__alloyId155!click!commencementAndroidClick"] && $.__views.__alloyId155.addEventListener("click", commencementAndroidClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;