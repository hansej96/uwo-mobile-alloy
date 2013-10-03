function Controller() {
    function availableComputersClick() {
        Titanium.Analytics.featureEvent("availableComputers");
        Ti.Platform.openURL("http://www.uwosh.edu/library/m/computer_availability_page.php");
    }
    function polkHoursClick() {
        Titanium.Analytics.featureEvent("polkHours");
        Alloy.CFG.navgroup.open(Alloy.createController("polkHours").getView());
    }
    function findBooksVideosClick() {
        Titanium.Analytics.featureEvent("findBooksVideos");
        Ti.Platform.openURL("http://oshlib.wisconsin.edu/vwebv/searchBasic?sk=mobile");
    }
    function groupFinderClick() {
        Titanium.Analytics.featureEvent("groupFinder");
        Alloy.CFG.navgroup.open(Alloy.createController("groupFinder").getView());
    }
    function availableComputersClick() {
        Titanium.Analytics.featureEvent("availableComputers");
        Ti.Platform.openURL("http://www.uwosh.edu/library/m/computer_availability_page.php");
    }
    function polkHoursClick() {
        Titanium.Analytics.featureEvent("polkHours");
        Alloy.createController("polkHours").getView().open();
    }
    function findBooksVideosClick() {
        Titanium.Analytics.featureEvent("findBooksVideos");
        Ti.Platform.openURL("http://oshlib.wisconsin.edu/vwebv/searchBasic?sk=mobile");
    }
    function groupFinderClick() {
        Titanium.Analytics.featureEvent("groupFinder");
        Alloy.createController("groupFinder").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "polkLibrary";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.polkLibrary = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "Polk Library",
        id: "polkLibrary"
    });
    $.__views.polkLibrary && $.addTopLevelView($.__views.polkLibrary);
    $.__views.__alloyId196 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/polk2.png",
        id: "__alloyId196"
    });
    var __alloyId197 = [];
    __alloyId197.push($.__views.__alloyId196);
    availableComputersClick ? $.__views.__alloyId196.addEventListener("click", availableComputersClick) : __defers["$.__views.__alloyId196!click!availableComputersClick"] = true;
    $.__views.__alloyId198 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Computers Available Now",
        id: "__alloyId198"
    });
    $.__views.__alloyId196.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/polk2.png",
        id: "__alloyId199"
    });
    __alloyId197.push($.__views.__alloyId199);
    polkHoursClick ? $.__views.__alloyId199.addEventListener("click", polkHoursClick) : __defers["$.__views.__alloyId199!click!polkHoursClick"] = true;
    $.__views.__alloyId200 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Library Hours",
        id: "__alloyId200"
    });
    $.__views.__alloyId199.add($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/polk2.png",
        id: "__alloyId201"
    });
    __alloyId197.push($.__views.__alloyId201);
    findBooksVideosClick ? $.__views.__alloyId201.addEventListener("click", findBooksVideosClick) : __defers["$.__views.__alloyId201!click!findBooksVideosClick"] = true;
    $.__views.__alloyId202 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "Find Books & Videos",
        id: "__alloyId202"
    });
    $.__views.__alloyId201.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 85,
        leftImage: "/images/icons/polk2.png",
        id: "__alloyId203"
    });
    __alloyId197.push($.__views.__alloyId203);
    groupFinderClick ? $.__views.__alloyId203.addEventListener("click", groupFinderClick) : __defers["$.__views.__alloyId203!click!groupFinderClick"] = true;
    $.__views.__alloyId204 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 110,
        text: "GroupFinder",
        id: "__alloyId204"
    });
    $.__views.__alloyId203.add($.__views.__alloyId204);
    $.__views.__alloyId195 = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        data: __alloyId197,
        id: "__alloyId195"
    });
    $.__views.polkLibrary.add($.__views.__alloyId195);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId196!click!availableComputersClick"] && $.__views.__alloyId196.addEventListener("click", availableComputersClick);
    __defers["$.__views.__alloyId199!click!polkHoursClick"] && $.__views.__alloyId199.addEventListener("click", polkHoursClick);
    __defers["$.__views.__alloyId201!click!findBooksVideosClick"] && $.__views.__alloyId201.addEventListener("click", findBooksVideosClick);
    __defers["$.__views.__alloyId203!click!groupFinderClick"] && $.__views.__alloyId203.addEventListener("click", groupFinderClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;