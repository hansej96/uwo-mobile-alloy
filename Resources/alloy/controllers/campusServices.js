function Controller() {
    function titancardClick() {
        if (true === Ti.App.Properties.getBool("myUwoAuth")) {
            Titanium.Analytics.featureEvent("titancard");
            Alloy.Globals.navwindow.openWindow(Alloy.createController("titancard").getView());
        } else {
            Titanium.Analytics.featureEvent("netID");
            Alloy.Globals.navwindow.openWindow(Alloy.createController("netID").getView());
        }
    }
    function polkLibraryClick() {
        Titanium.Analytics.featureEvent("polkLibrary");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("polkLibrary").getView());
    }
    function studentRecreationClick() {
        Titanium.Analytics.featureEvent("studentRecreation");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("studentRecreation").getView());
    }
    function diningLocationsClick() {
        Titanium.Analytics.featureEvent("diningLocations");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("diningLocations").getView());
    }
    function safewalkClick() {
        Titanium.Analytics.featureEvent("safewalk");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("safewalk").getView());
    }
    function titancardAndroidClick() {
        if (true === Ti.App.Properties.getBool("myUwoAuth")) {
            Titanium.Analytics.featureEvent("titancard");
            Alloy.createController("titancard").getView().open();
        } else {
            Titanium.Analytics.featureEvent("netID");
            Alloy.createController("netID").getView().open();
        }
    }
    function polkLibraryAndroidClick() {
        Titanium.Analytics.featureEvent("polkLibrary");
        Alloy.createController("polkLibrary").getView().open();
    }
    function studentRecreationAndroidClick() {
        Titanium.Analytics.featureEvent("studentRecreation");
        Alloy.createController("studentRecreation").getView().open();
    }
    function diningLocationsAndroidClick() {
        Titanium.Analytics.featureEvent("diningLocations");
        Alloy.createController("diningLocations").getView().open();
    }
    function safewalkAndroidClick() {
        Titanium.Analytics.featureEvent("safewalk");
        Alloy.createController("safewalk").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "campusServices";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.campusServices = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "Campus Services",
        id: "campusServices"
    });
    $.__views.campusServices && $.addTopLevelView($.__views.campusServices);
    $.__views.__alloyId8 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/titancard.png",
        id: "__alloyId8"
    });
    var __alloyId9 = [];
    __alloyId9.push($.__views.__alloyId8);
    titancardClick ? $.__views.__alloyId8.addEventListener("click", titancardClick) : __defers["$.__views.__alloyId8!click!titancardClick"] = true;
    $.__views.__alloyId10 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Check Your Titancard Balance",
        id: "__alloyId10"
    });
    $.__views.__alloyId8.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/polk2.png",
        id: "__alloyId11"
    });
    __alloyId9.push($.__views.__alloyId11);
    polkLibraryClick ? $.__views.__alloyId11.addEventListener("click", polkLibraryClick) : __defers["$.__views.__alloyId11!click!polkLibraryClick"] = true;
    $.__views.__alloyId12 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Polk Library",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/peopleplaces.png",
        id: "__alloyId13"
    });
    __alloyId9.push($.__views.__alloyId13);
    studentRecreationClick ? $.__views.__alloyId13.addEventListener("click", studentRecreationClick) : __defers["$.__views.__alloyId13!click!studentRecreationClick"] = true;
    $.__views.__alloyId14 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Student Recreation & Wellness Center",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/dining.png",
        id: "__alloyId15"
    });
    __alloyId9.push($.__views.__alloyId15);
    diningLocationsClick ? $.__views.__alloyId15.addEventListener("click", diningLocationsClick) : __defers["$.__views.__alloyId15!click!diningLocationsClick"] = true;
    $.__views.__alloyId16 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Today's Dining Menus",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/safewalk.png",
        id: "__alloyId17"
    });
    __alloyId9.push($.__views.__alloyId17);
    safewalkClick ? $.__views.__alloyId17.addEventListener("click", safewalkClick) : __defers["$.__views.__alloyId17!click!safewalkClick"] = true;
    $.__views.__alloyId18 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Safewalk",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId7 = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        data: __alloyId9,
        id: "__alloyId7"
    });
    $.__views.campusServices.add($.__views.__alloyId7);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId8!click!titancardClick"] && $.__views.__alloyId8.addEventListener("click", titancardClick);
    __defers["$.__views.__alloyId11!click!polkLibraryClick"] && $.__views.__alloyId11.addEventListener("click", polkLibraryClick);
    __defers["$.__views.__alloyId13!click!studentRecreationClick"] && $.__views.__alloyId13.addEventListener("click", studentRecreationClick);
    __defers["$.__views.__alloyId15!click!diningLocationsClick"] && $.__views.__alloyId15.addEventListener("click", diningLocationsClick);
    __defers["$.__views.__alloyId17!click!safewalkClick"] && $.__views.__alloyId17.addEventListener("click", safewalkClick);
    __defers["$.__views.__alloyId21!click!titancardAndroidClick"] && $.__views.__alloyId21.addEventListener("click", titancardAndroidClick);
    __defers["$.__views.__alloyId24!click!polkLibraryAndroidClick"] && $.__views.__alloyId24.addEventListener("click", polkLibraryAndroidClick);
    __defers["$.__views.__alloyId26!click!studentRecreationAndroidClick"] && $.__views.__alloyId26.addEventListener("click", studentRecreationAndroidClick);
    __defers["$.__views.__alloyId28!click!diningLocationsAndroidClick"] && $.__views.__alloyId28.addEventListener("click", diningLocationsAndroidClick);
    __defers["$.__views.__alloyId30!click!safewalkAndroidClick"] && $.__views.__alloyId30.addEventListener("click", safewalkAndroidClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;