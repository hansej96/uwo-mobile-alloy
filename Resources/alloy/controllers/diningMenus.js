function Controller() {
    function reloadAllMenus() {
        portal.dining({
            success: loadMenus,
            onerror: function() {
                loadedViews = [];
                alert("There was an error retrieving the menus");
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "diningMenus";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.diningMenusWindow = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        id: "diningMenusWindow"
    });
    $.__views.diningMenusWindow && $.addTopLevelView($.__views.diningMenusWindow);
    $.__views.diningTable = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        id: "diningTable"
    });
    $.__views.diningMenusWindow.add($.__views.diningTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var portal = require("myuwoWS");
    var selectedLocation = args.selectedLocation;
    var loadMenus = function(blackhawk, reeve) {
        var location = [];
        var rows = [];
        if ("reeveUnion" === selectedLocation) {
            location = reeve;
            $.diningMenusWindow.title = "Reeve Union";
        } else {
            location = blackhawk;
            $.diningMenusWindow.title = "Blackhawk Commons";
        }
        for (var x = 0; location.length > x; x++) rows.push(Alloy.createController("diningMenusRow", {
            restaurantName: location[x].title,
            menuItems: location[x].menu
        }).getView());
        $.diningTable.setData(rows);
    };
    Ti.Network.online ? reloadAllMenus() : alert("No network connection detected.");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;