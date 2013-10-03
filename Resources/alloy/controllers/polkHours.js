function Controller() {
    function hours(nowOpen, hours) {
        $.currently.text = "Currently: " + nowOpen;
        $.todayHours.text = "Today's Hours: " + moment(hours[0].open).format("h:mm a") + " - " + moment(hours[0].close).format("h:mm a");
        $.day1.text = hours[1].title;
        $.day1Hours.text = moment(hours[1].open).format("h:mm a") + " - " + moment(hours[1].close).format("h:mm a");
        $.day2.text = hours[2].title;
        $.day2Hours.text = moment(hours[2].open).format("h:mm a") + " - " + moment(hours[2].close).format("h:mm a");
        $.day3.text = hours[3].title;
        $.day3Hours.text = moment(hours[3].open).format("h:mm a") + " - " + moment(hours[3].close).format("h:mm a");
        $.day4.text = hours[4].title;
        $.day4Hours.text = moment(hours[4].open).format("h:mm a") + " - " + moment(hours[4].close).format("h:mm a");
    }
    function getLibrary(entry) {
        webservices.hours({
            success: hours,
            onerror: onerror,
            entry: entry
        });
    }
    function onerror() {
        alert("There was an error retrieving the library hours");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "polkHours";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.polkHours = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "Polk Hours",
        id: "polkHours"
    });
    $.__views.polkHours && $.addTopLevelView($.__views.polkHours);
    $.__views.__alloyId182 = Ti.UI.createTableViewRow({
        color: "#FFFFFF",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: 36,
        backgroundColor: "#D79A27",
        id: "__alloyId182"
    });
    var __alloyId183 = [];
    __alloyId183.push($.__views.__alloyId182);
    $.__views.__alloyId184 = Ti.UI.createLabel({
        color: "#FFF",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        left: 10,
        text: "Today",
        id: "__alloyId184"
    });
    $.__views.__alloyId182.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: "auto",
        id: "__alloyId185"
    });
    __alloyId183.push($.__views.__alloyId185);
    $.__views.currently = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        id: "currently"
    });
    $.__views.__alloyId185.add($.__views.currently);
    $.__views.__alloyId186 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: "auto",
        id: "__alloyId186"
    });
    __alloyId183.push($.__views.__alloyId186);
    $.__views.todayHours = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        id: "todayHours"
    });
    $.__views.__alloyId186.add($.__views.todayHours);
    $.__views.__alloyId187 = Ti.UI.createTableViewRow({
        color: "#FFFFFF",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: 36,
        backgroundColor: "#D79A27",
        id: "__alloyId187"
    });
    __alloyId183.push($.__views.__alloyId187);
    $.__views.day1 = Ti.UI.createLabel({
        color: "#FFF",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        left: 10,
        id: "day1"
    });
    $.__views.__alloyId187.add($.__views.day1);
    $.__views.__alloyId188 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: "auto",
        id: "__alloyId188"
    });
    __alloyId183.push($.__views.__alloyId188);
    $.__views.day1Hours = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        id: "day1Hours"
    });
    $.__views.__alloyId188.add($.__views.day1Hours);
    $.__views.__alloyId189 = Ti.UI.createTableViewRow({
        color: "#FFFFFF",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: 36,
        backgroundColor: "#D79A27",
        id: "__alloyId189"
    });
    __alloyId183.push($.__views.__alloyId189);
    $.__views.day2 = Ti.UI.createLabel({
        color: "#FFF",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        left: 10,
        id: "day2"
    });
    $.__views.__alloyId189.add($.__views.day2);
    $.__views.__alloyId190 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: "auto",
        id: "__alloyId190"
    });
    __alloyId183.push($.__views.__alloyId190);
    $.__views.day2Hours = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        id: "day2Hours"
    });
    $.__views.__alloyId190.add($.__views.day2Hours);
    $.__views.__alloyId191 = Ti.UI.createTableViewRow({
        color: "#FFFFFF",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: 36,
        backgroundColor: "#D79A27",
        id: "__alloyId191"
    });
    __alloyId183.push($.__views.__alloyId191);
    $.__views.day3 = Ti.UI.createLabel({
        color: "#FFF",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        left: 10,
        id: "day3"
    });
    $.__views.__alloyId191.add($.__views.day3);
    $.__views.__alloyId192 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: "auto",
        id: "__alloyId192"
    });
    __alloyId183.push($.__views.__alloyId192);
    $.__views.day3Hours = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        id: "day3Hours"
    });
    $.__views.__alloyId192.add($.__views.day3Hours);
    $.__views.__alloyId193 = Ti.UI.createTableViewRow({
        color: "#FFFFFF",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: 36,
        backgroundColor: "#D79A27",
        id: "__alloyId193"
    });
    __alloyId183.push($.__views.__alloyId193);
    $.__views.day4 = Ti.UI.createLabel({
        color: "#FFF",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        left: 10,
        id: "day4"
    });
    $.__views.__alloyId193.add($.__views.day4);
    $.__views.__alloyId194 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: "auto",
        id: "__alloyId194"
    });
    __alloyId183.push($.__views.__alloyId194);
    $.__views.day4Hours = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        id: "day4Hours"
    });
    $.__views.__alloyId194.add($.__views.day4Hours);
    $.__views.hoursTable = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        data: __alloyId183,
        id: "hoursTable"
    });
    $.__views.polkHours.add($.__views.hoursTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var webservices = require("libraryWS"), moment = require("alloy/moment");
    Ti.Network.online ? getLibrary("Hours") : alert("No network connection detected");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;