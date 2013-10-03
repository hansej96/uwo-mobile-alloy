function Controller() {
    function peopleSearchClick() {
        Titanium.Analytics.featureEvent("peopleSearch");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("campusSearch", {
            peopleOrDeptUrl: "/directory/search/person/"
        }).getView());
    }
    function deptSearchClick() {
        Titanium.Analytics.featureEvent("departmentList");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("departmentList").getView());
    }
    function locationSearchClick() {
        Titanium.Analytics.featureEvent("locationSearch");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("locationSearch").getView());
    }
    function parkingMapClick() {
        Titanium.Analytics.featureEvent("parkingMap");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("parkingMap").getView());
    }
    function campusMapClick() {
        Titanium.Analytics.featureEvent("campusMap");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("campusMap").getView());
    }
    function peopleSearchAndroidClick() {
        Titanium.Analytics.featureEvent("peopleSearch");
        Alloy.createController("campusSearch", {
            peopleOrDeptUrl: "/directory/search/person/"
        }).getView().open();
    }
    function deptSearchAndroidClick() {
        Titanium.Analytics.featureEvent("departmentList");
        Alloy.createController("departmentList").getView().open();
    }
    function locationSearchAndroidClick() {
        Titanium.Analytics.featureEvent("locationSearch");
        Alloy.createController("locationSearch").getView().open();
    }
    function parkingMapAndroidClick() {
        Titanium.Analytics.featureEvent("parkingMap");
        Alloy.createController("parkingMap").getView().open();
    }
    function campusMapAndroidClick() {
        Titanium.Analytics.featureEvent("campusMap");
        Alloy.createController("campusMap").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "peoplePlaces";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.peoplePlaces = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "People & Places",
        id: "peoplePlaces"
    });
    $.__views.peoplePlaces && $.addTopLevelView($.__views.peoplePlaces);
    $.__views.__alloyId158 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/peoplesearch.png",
        id: "__alloyId158"
    });
    var __alloyId159 = [];
    __alloyId159.push($.__views.__alloyId158);
    peopleSearchClick ? $.__views.__alloyId158.addEventListener("click", peopleSearchClick) : __defers["$.__views.__alloyId158!click!peopleSearchClick"] = true;
    $.__views.__alloyId160 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "People Search",
        id: "__alloyId160"
    });
    $.__views.__alloyId158.add($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/deptsearch.png",
        id: "__alloyId161"
    });
    __alloyId159.push($.__views.__alloyId161);
    deptSearchClick ? $.__views.__alloyId161.addEventListener("click", deptSearchClick) : __defers["$.__views.__alloyId161!click!deptSearchClick"] = true;
    $.__views.__alloyId162 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Department Search",
        id: "__alloyId162"
    });
    $.__views.__alloyId161.add($.__views.__alloyId162);
    $.__views.__alloyId163 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/location.png",
        id: "__alloyId163"
    });
    __alloyId159.push($.__views.__alloyId163);
    locationSearchClick ? $.__views.__alloyId163.addEventListener("click", locationSearchClick) : __defers["$.__views.__alloyId163!click!locationSearchClick"] = true;
    $.__views.__alloyId164 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Location Search",
        id: "__alloyId164"
    });
    $.__views.__alloyId163.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/map.png",
        id: "__alloyId165"
    });
    __alloyId159.push($.__views.__alloyId165);
    campusMapClick ? $.__views.__alloyId165.addEventListener("click", campusMapClick) : __defers["$.__views.__alloyId165!click!campusMapClick"] = true;
    $.__views.__alloyId166 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Campus Map",
        id: "__alloyId166"
    });
    $.__views.__alloyId165.add($.__views.__alloyId166);
    $.__views.__alloyId167 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/parking.png",
        id: "__alloyId167"
    });
    __alloyId159.push($.__views.__alloyId167);
    parkingMapClick ? $.__views.__alloyId167.addEventListener("click", parkingMapClick) : __defers["$.__views.__alloyId167!click!parkingMapClick"] = true;
    $.__views.__alloyId168 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Parking Map",
        id: "__alloyId168"
    });
    $.__views.__alloyId167.add($.__views.__alloyId168);
    $.__views.__alloyId157 = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        data: __alloyId159,
        id: "__alloyId157"
    });
    $.__views.peoplePlaces.add($.__views.__alloyId157);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId158!click!peopleSearchClick"] && $.__views.__alloyId158.addEventListener("click", peopleSearchClick);
    __defers["$.__views.__alloyId161!click!deptSearchClick"] && $.__views.__alloyId161.addEventListener("click", deptSearchClick);
    __defers["$.__views.__alloyId163!click!locationSearchClick"] && $.__views.__alloyId163.addEventListener("click", locationSearchClick);
    __defers["$.__views.__alloyId165!click!campusMapClick"] && $.__views.__alloyId165.addEventListener("click", campusMapClick);
    __defers["$.__views.__alloyId167!click!parkingMapClick"] && $.__views.__alloyId167.addEventListener("click", parkingMapClick);
    __defers["$.__views.__alloyId171!click!peopleSearchAndroidClick"] && $.__views.__alloyId171.addEventListener("click", peopleSearchAndroidClick);
    __defers["$.__views.__alloyId174!click!deptSearchAndroidClick"] && $.__views.__alloyId174.addEventListener("click", deptSearchAndroidClick);
    __defers["$.__views.__alloyId176!click!locationSearchAndroidClick"] && $.__views.__alloyId176.addEventListener("click", locationSearchAndroidClick);
    __defers["$.__views.__alloyId178!click!campusMapAndroidClick"] && $.__views.__alloyId178.addEventListener("click", campusMapAndroidClick);
    __defers["$.__views.__alloyId180!click!parkingMapAndroidClick"] && $.__views.__alloyId180.addEventListener("click", parkingMapAndroidClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;