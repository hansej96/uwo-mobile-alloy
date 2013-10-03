function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "commencementMap";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.commencementMap = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "Commencement Map",
        id: "commencementMap"
    });
    $.__views.commencementMap && $.addTopLevelView($.__views.commencementMap);
    var __alloyId51 = [];
    $.__views.kolf = Ti.Map.createAnnotation({
        latitude: 44.024311065674,
        longitude: -88.552352905273,
        id: "kolf",
        title: "Kolf Sports Center",
        subtitle: "ready, set, graduate!"
    });
    __alloyId51.push($.__views.kolf);
    $.__views.map = Ti.Map.createView({
        animate: true,
        regionFit: true,
        userLocation: true,
        region: {
            latitude: "44.027",
            longitude: "-88.5425",
            latitudeDelta: .003,
            longitudeDelta: .003
        },
        annotations: __alloyId51,
        ns: Ti.Map,
        id: "map"
    });
    $.__views.commencementMap.add($.__views.map);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;