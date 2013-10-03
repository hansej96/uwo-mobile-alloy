function Controller() {
    function panoramaClick() {
        Ti.Platform.openURL(args.location.panorama);
    }
    function imageClick() {
        Ti.Platform.openURL(args.location.image);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "locationSearchDetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.locationSearchDetail = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        id: "locationSearchDetail"
    });
    $.__views.locationSearchDetail && $.addTopLevelView($.__views.locationSearchDetail);
    $.__views.__alloyId124 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId124"
    });
    var __alloyId125 = [];
    __alloyId125.push($.__views.__alloyId124);
    $.__views.id = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        id: "id"
    });
    $.__views.__alloyId124.add($.__views.id);
    $.__views.__alloyId126 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId126"
    });
    __alloyId125.push($.__views.__alloyId126);
    $.__views.title = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        id: "title"
    });
    $.__views.__alloyId126.add($.__views.title);
    $.__views.__alloyId127 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId127"
    });
    __alloyId125.push($.__views.__alloyId127);
    $.__views.description = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        id: "description"
    });
    $.__views.__alloyId127.add($.__views.description);
    $.__views.__alloyId128 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId128"
    });
    __alloyId125.push($.__views.__alloyId128);
    $.__views.address = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        id: "address"
    });
    $.__views.__alloyId128.add($.__views.address);
    $.__views.__alloyId129 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId129"
    });
    __alloyId125.push($.__views.__alloyId129);
    imageClick ? $.__views.__alloyId129.addEventListener("click", imageClick) : __defers["$.__views.__alloyId129!click!imageClick"] = true;
    $.__views.image = Ti.UI.createImageView({
        left: 10,
        textAlign: "left",
        id: "image"
    });
    $.__views.__alloyId129.add($.__views.image);
    $.__views.__alloyId130 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId130"
    });
    __alloyId125.push($.__views.__alloyId130);
    $.__views.panorama = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        id: "panorama"
    });
    $.__views.__alloyId130.add($.__views.panorama);
    panoramaClick ? $.__views.panorama.addEventListener("click", panoramaClick) : __defers["$.__views.panorama!click!panoramaClick"] = true;
    $.__views.__alloyId131 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId131"
    });
    __alloyId125.push($.__views.__alloyId131);
    $.__views.latitude = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        id: "latitude"
    });
    $.__views.__alloyId131.add($.__views.latitude);
    $.__views.__alloyId132 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId132"
    });
    __alloyId125.push($.__views.__alloyId132);
    $.__views.longitude = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        textAlign: "left",
        id: "longitude"
    });
    $.__views.__alloyId132.add($.__views.longitude);
    $.__views.__alloyId123 = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        data: __alloyId125,
        id: "__alloyId123"
    });
    $.__views.locationSearchDetail.add($.__views.__alloyId123);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.id.text = args.location.id;
    $.title.text = args.location.title;
    $.description.text = args.location.description;
    $.address.text = args.location.address;
    $.image.image = args.location.image;
    $.panorama.text = args.location.panorama;
    $.latitude.text = args.location.latitude;
    $.longitude.text = args.location.longitude;
    __defers["$.__views.__alloyId129!click!imageClick"] && $.__views.__alloyId129.addEventListener("click", imageClick);
    __defers["$.__views.panorama!click!panoramaClick"] && $.__views.panorama.addEventListener("click", panoramaClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;