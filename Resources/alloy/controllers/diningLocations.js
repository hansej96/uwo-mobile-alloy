function Controller() {
    function reeveUnionClick() {
        Titanium.Analytics.featureEvent("diningMenusReeveUnion");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("diningMenus", {
            selectedLocation: "reeveUnion"
        }).getView());
    }
    function blackhawkClick() {
        Titanium.Analytics.featureEvent("diningMenusBlackhawkCommons");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("diningMenus", {
            selectedLocation: "blackhawkCommons"
        }).getView());
    }
    function reeveUnionAndroidClick() {
        Titanium.Analytics.featureEvent("diningMenusReeveUnion");
        Alloy.createController("diningMenus", {
            selectedLocation: "reeveUnion"
        }).getView().open();
    }
    function blackhawkAndroidClick() {
        Titanium.Analytics.featureEvent("diningMenusBlackhawkCommons");
        Alloy.createController("diningMenus", {
            selectedLocation: "blackhawkCommons"
        }).getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "diningLocations";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.diningLocations = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "Dining Locations",
        id: "diningLocations"
    });
    $.__views.diningLocations && $.addTopLevelView($.__views.diningLocations);
    $.__views.__alloyId53 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/dining.png",
        id: "__alloyId53"
    });
    var __alloyId54 = [];
    __alloyId54.push($.__views.__alloyId53);
    reeveUnionClick ? $.__views.__alloyId53.addEventListener("click", reeveUnionClick) : __defers["$.__views.__alloyId53!click!reeveUnionClick"] = true;
    $.__views.__alloyId55 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Reeve Union",
        id: "__alloyId55"
    });
    $.__views.__alloyId53.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/dining.png",
        id: "__alloyId56"
    });
    __alloyId54.push($.__views.__alloyId56);
    blackhawkClick ? $.__views.__alloyId56.addEventListener("click", blackhawkClick) : __defers["$.__views.__alloyId56!click!blackhawkClick"] = true;
    $.__views.__alloyId57 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Blackhawk Commons",
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
    $.__views.__alloyId52 = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        data: __alloyId54,
        id: "__alloyId52"
    });
    $.__views.diningLocations.add($.__views.__alloyId52);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId53!click!reeveUnionClick"] && $.__views.__alloyId53.addEventListener("click", reeveUnionClick);
    __defers["$.__views.__alloyId56!click!blackhawkClick"] && $.__views.__alloyId56.addEventListener("click", blackhawkClick);
    __defers["$.__views.__alloyId60!click!reeveUnionAndroidClick"] && $.__views.__alloyId60.addEventListener("click", reeveUnionAndroidClick);
    __defers["$.__views.__alloyId63!click!blackhawkAndroidClick"] && $.__views.__alloyId63.addEventListener("click", blackhawkAndroidClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;