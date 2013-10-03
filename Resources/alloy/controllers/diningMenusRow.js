function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "diningMenusRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.diningMenusRow = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        layout: "vertical",
        height: "auto",
        id: "diningMenusRow"
    });
    $.__views.diningMenusRow && $.addTopLevelView($.__views.diningMenusRow);
    $.__views.restaurant = Ti.UI.createLabel({
        color: "#FFF",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: "auto",
        top: 5,
        left: 10,
        textAlign: "left",
        backgroundColor: "#999",
        id: "restaurant"
    });
    $.__views.diningMenusRow.add($.__views.restaurant);
    $.__views.menu = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: "auto",
        top: 5,
        left: 10,
        textAlign: "left",
        id: "menu"
    });
    $.__views.diningMenusRow.add($.__views.menu);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.restaurant.text = args.restaurantName;
    $.menu.text = args.menuItems;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;