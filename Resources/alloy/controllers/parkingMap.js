function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "parkingMap";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.parkingMap = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "Parking Map",
        id: "parkingMap"
    });
    $.__views.parkingMap && $.addTopLevelView($.__views.parkingMap);
    $.__views.parkingMapWebView = Ti.UI.createWebView({
        id: "parkingMapWebView",
        url: "http://m.uwosh.edu/api/beta/2.0/map/parking"
    });
    $.__views.parkingMap.add($.__views.parkingMapWebView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;