function Controller() {
    function logout() {
        Ti.App.Properties.setBool("myUwoAuth", false);
        Alloy.createController("index").getView().open();
        alert("You have been logged out");
    }
    function response(json) {
        $.tdbalance.text = "$" + json.d.TitanDollars;
        $.bmBalance.text = json.d.BoardMealCount;
        $.flexBalance.text = json.d.FlexMeals;
        $.diningBalance.text = "$" + json.d.DiningDollars;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "titancard";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.titancardWindow = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        id: "titancardWindow",
        title: "Titancard"
    });
    $.__views.titancardWindow && $.addTopLevelView($.__views.titancardWindow);
    $.__views.__alloyId302 = Ti.UI.createButton({
        title: "Logout",
        id: "__alloyId302"
    });
    logout ? $.__views.__alloyId302.addEventListener("click", logout) : __defers["$.__views.__alloyId302!click!logout"] = true;
    $.__views.titancardWindow.rightNavButton = $.__views.__alloyId302;
    $.__views.__alloyId303 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId303"
    });
    var __alloyId304 = [];
    __alloyId304.push($.__views.__alloyId303);
    $.__views.tdLabel = Ti.UI.createLabel({
        color: "#414444",
        font: {
            fontWeight: "bold"
        },
        textAlign: "left",
        left: 10,
        text: "TitanDollar Balance",
        id: "tdLabel"
    });
    $.__views.__alloyId303.add($.__views.tdLabel);
    $.__views.tdbalance = Ti.UI.createLabel({
        color: "#414444",
        font: {
            fontSize: 18
        },
        textAlign: "right",
        right: 10,
        id: "tdbalance"
    });
    $.__views.__alloyId303.add($.__views.tdbalance);
    $.__views.__alloyId305 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId305"
    });
    __alloyId304.push($.__views.__alloyId305);
    $.__views.bmLabel = Ti.UI.createLabel({
        color: "#414444",
        font: {
            fontWeight: "bold"
        },
        textAlign: "left",
        left: 10,
        text: "Board Meals",
        id: "bmLabel"
    });
    $.__views.__alloyId305.add($.__views.bmLabel);
    $.__views.bmBalance = Ti.UI.createLabel({
        color: "#414444",
        font: {
            fontSize: 18
        },
        textAlign: "right",
        right: 10,
        id: "bmBalance"
    });
    $.__views.__alloyId305.add($.__views.bmBalance);
    $.__views.__alloyId306 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId306"
    });
    __alloyId304.push($.__views.__alloyId306);
    $.__views.flexLabel = Ti.UI.createLabel({
        color: "#414444",
        font: {
            fontWeight: "bold"
        },
        textAlign: "left",
        left: 10,
        text: "Flex Meals",
        id: "flexLabel"
    });
    $.__views.__alloyId306.add($.__views.flexLabel);
    $.__views.flexBalance = Ti.UI.createLabel({
        color: "#414444",
        font: {
            fontSize: 18
        },
        textAlign: "right",
        right: 10,
        id: "flexBalance"
    });
    $.__views.__alloyId306.add($.__views.flexBalance);
    $.__views.__alloyId307 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId307"
    });
    __alloyId304.push($.__views.__alloyId307);
    $.__views.diningLabel = Ti.UI.createLabel({
        color: "#414444",
        font: {
            fontWeight: "bold"
        },
        textAlign: "left",
        left: 10,
        text: "Dining Dollars",
        id: "diningLabel"
    });
    $.__views.__alloyId307.add($.__views.diningLabel);
    $.__views.diningBalance = Ti.UI.createLabel({
        color: "#414444",
        font: {
            fontSize: 18
        },
        textAlign: "right",
        right: 10,
        id: "diningBalance"
    });
    $.__views.__alloyId307.add($.__views.diningBalance);
    $.__views.titancardTableView = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        data: __alloyId304,
        id: "titancardTableView"
    });
    $.__views.titancardWindow.add($.__views.titancardTableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var portal = require("myuwoWS");
    require("HeaderRow"), require("ActivityIndicator");
    portal.titanCard({
        success: response,
        onerror: function() {
            alert("An error occurred");
        }
    });
    __defers["$.__views.__alloyId302!click!logout"] && $.__views.__alloyId302.addEventListener("click", logout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;