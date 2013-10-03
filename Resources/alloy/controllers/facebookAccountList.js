function Controller() {
    function uwoshkoshClick() {
        Titanium.Analytics.featureEvent("facebookUWOshkosh");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("webViews", {
            url: "https://facebook.com/uwoshkosh",
            title: "UW Oshkosh"
        }).getView());
    }
    function uwoshkoshEngageClick() {
        Titanium.Analytics.featureEvent("facebookUWOAlumni");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("webViews", {
            url: "https://facebook.com/UWOalumni",
            title: "UWO Alumni"
        }).getView());
    }
    function uwoAdmissionsClick() {
        Titanium.Analytics.featureEvent("facebookUWOAdmissions");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("webViews", {
            url: "https://facebook.com/uwo.admissions",
            title: "UWO Admissions"
        }).getView());
    }
    function uwoshkoshTitansClick() {
        Titanium.Analytics.featureEvent("facebookUWOAthletics");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("webViews", {
            url: "https://www.facebook.com/UWOshkoshAthletics",
            title: "UWO Titans"
        }).getView());
    }
    function uwoshkoshAndroidClick() {
        Titanium.Analytics.featureEvent("facebookUWOshkosh");
        Ti.Platform.openURL("https://facebook.com/uwoshkosh");
    }
    function uwoshkoshEngageAndroidClick() {
        Titanium.Analytics.featureEvent("facebookUWOAlumni");
        Ti.Platform.openURL("https://facebook.com/UWOalumni");
    }
    function uwoAdmissionsAndroidClick() {
        Titanium.Analytics.featureEvent("facebookUWOAdmissions");
        Ti.Platform.openURL("https://facebook.com/uwo.admissions");
    }
    function uwoshkoshTitansAndroidClick() {
        Titanium.Analytics.featureEvent("facebookUWOAthletics");
        Ti.Platform.openURL("https://www.facebook.com/UWOshkoshAthletics");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "facebookAccountList";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.facebookAccountList = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "Connect",
        id: "facebookAccountList"
    });
    $.__views.facebookAccountList && $.addTopLevelView($.__views.facebookAccountList);
    $.__views.__alloyId95 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        id: "__alloyId95"
    });
    var __alloyId96 = [];
    __alloyId96.push($.__views.__alloyId95);
    uwoshkoshClick ? $.__views.__alloyId95.addEventListener("click", uwoshkoshClick) : __defers["$.__views.__alloyId95!click!uwoshkoshClick"] = true;
    $.__views.__alloyId97 = Ti.UI.createImageView({
        left: 5,
        height: 73,
        width: 73,
        image: "/images/avatars/uwoshkosh.jpg",
        id: "__alloyId97"
    });
    $.__views.__alloyId95.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 90,
        text: "University of Wisconsin Oshkosh",
        id: "__alloyId98"
    });
    $.__views.__alloyId95.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        id: "__alloyId99"
    });
    __alloyId96.push($.__views.__alloyId99);
    uwoshkoshEngageClick ? $.__views.__alloyId99.addEventListener("click", uwoshkoshEngageClick) : __defers["$.__views.__alloyId99!click!uwoshkoshEngageClick"] = true;
    $.__views.__alloyId100 = Ti.UI.createImageView({
        left: 5,
        height: 73,
        width: 73,
        image: "/images/avatars/UWOalumni.jpg",
        id: "__alloyId100"
    });
    $.__views.__alloyId99.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 90,
        text: "University of Wisconsin Oshkosh Alumni",
        id: "__alloyId101"
    });
    $.__views.__alloyId99.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        id: "__alloyId102"
    });
    __alloyId96.push($.__views.__alloyId102);
    uwoAdmissionsClick ? $.__views.__alloyId102.addEventListener("click", uwoAdmissionsClick) : __defers["$.__views.__alloyId102!click!uwoAdmissionsClick"] = true;
    $.__views.__alloyId103 = Ti.UI.createImageView({
        left: 5,
        height: 73,
        width: 73,
        image: "/images/avatars/UWOAdmissions.jpg",
        id: "__alloyId103"
    });
    $.__views.__alloyId102.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 90,
        text: "University of Wisconsin Oshkosh Admissions",
        id: "__alloyId104"
    });
    $.__views.__alloyId102.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        id: "__alloyId105"
    });
    __alloyId96.push($.__views.__alloyId105);
    uwoshkoshTitansClick ? $.__views.__alloyId105.addEventListener("click", uwoshkoshTitansClick) : __defers["$.__views.__alloyId105!click!uwoshkoshTitansClick"] = true;
    $.__views.__alloyId106 = Ti.UI.createImageView({
        left: 5,
        height: 73,
        width: 73,
        image: "/images/avatars/UWOshkoshTitans.jpg",
        id: "__alloyId106"
    });
    $.__views.__alloyId105.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 90,
        text: "University of Wisconsin Oshkosh Athletics",
        id: "__alloyId107"
    });
    $.__views.__alloyId105.add($.__views.__alloyId107);
    $.__views.__alloyId94 = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        data: __alloyId96,
        id: "__alloyId94"
    });
    $.__views.facebookAccountList.add($.__views.__alloyId94);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId95!click!uwoshkoshClick"] && $.__views.__alloyId95.addEventListener("click", uwoshkoshClick);
    __defers["$.__views.__alloyId99!click!uwoshkoshEngageClick"] && $.__views.__alloyId99.addEventListener("click", uwoshkoshEngageClick);
    __defers["$.__views.__alloyId102!click!uwoAdmissionsClick"] && $.__views.__alloyId102.addEventListener("click", uwoAdmissionsClick);
    __defers["$.__views.__alloyId105!click!uwoshkoshTitansClick"] && $.__views.__alloyId105.addEventListener("click", uwoshkoshTitansClick);
    __defers["$.__views.__alloyId110!click!uwoshkoshAndroidClick"] && $.__views.__alloyId110.addEventListener("click", uwoshkoshAndroidClick);
    __defers["$.__views.__alloyId114!click!uwoshkoshEngageAndroidClick"] && $.__views.__alloyId114.addEventListener("click", uwoshkoshEngageAndroidClick);
    __defers["$.__views.__alloyId117!click!uwoAdmissionsAndroidClick"] && $.__views.__alloyId117.addEventListener("click", uwoAdmissionsAndroidClick);
    __defers["$.__views.__alloyId120!click!uwoshkoshTitansAndroidClick"] && $.__views.__alloyId120.addEventListener("click", uwoshkoshTitansAndroidClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;