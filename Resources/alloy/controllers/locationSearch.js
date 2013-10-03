function Controller() {
    function locationSearch(path) {
        search.doLocationSearch({
            success: function(data) {
                var rows = [];
                _.each(data, function(item) {
                    rows.push(Alloy.createController("locationSearchRow", {
                        item: item
                    }).getView());
                });
                $.locationSearchTable.setData(rows);
            }
        }, path);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "locationSearch";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.locationSearch = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "Location Search",
        id: "locationSearch"
    });
    $.__views.locationSearch && $.addTopLevelView($.__views.locationSearch);
    $.__views.sb = Ti.UI.createSearchBar({
        id: "sb",
        barColor: "#000",
        showCancel: "true",
        height: "43",
        top: "0"
    });
    $.__views.locationSearchTable = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        search: $.__views.sb,
        id: "locationSearchTable",
        filterAttribute: "title"
    });
    $.__views.locationSearch.add($.__views.locationSearchTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var search = require("search");
    $.sb.addEventListener("cancel", function() {
        $.sb.blur();
    });
    $.sb.addEventListener("return", function(e) {
        $.sb.blur();
        var searchPath = "/map/search/" + Titanium.Network.encodeURIComponent(e.value);
        var path = "http://m.uwosh.edu/api/beta/2.0" + searchPath;
        Ti.Network.online ? locationSearch(path) : alert("No network connection detected.");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;