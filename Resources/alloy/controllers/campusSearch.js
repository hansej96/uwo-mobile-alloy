function Controller() {
    function peopleSearch(path) {
        search.doPeopleSearch({
            success: function(data) {
                var rows = [];
                _.each(data, function(item) {
                    rows.push(Alloy.createController("campusSearchRow", {
                        item: item
                    }).getView());
                });
                $.campusSearchTable.setData(rows);
            }
        }, path);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "campusSearch";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.campusSearch = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "Campus Search",
        id: "campusSearch"
    });
    $.__views.campusSearch && $.addTopLevelView($.__views.campusSearch);
    $.__views.sb = Ti.UI.createSearchBar({
        id: "sb",
        barColor: "#000",
        showCancel: "false",
        height: "70",
        top: "0"
    });
    $.__views.campusSearchTable = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        search: $.__views.sb,
        id: "campusSearchTable",
        filterAttribute: "title"
    });
    $.__views.campusSearch.add($.__views.campusSearchTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var search = require("search");
    var peopleOrDeptUrl = arguments[0].peopleOrDeptUrl;
    $.sb.addEventListener("cancel", function() {
        $.sb.blur();
    });
    $.sb.addEventListener("return", function(e) {
        var searchPath = peopleOrDeptUrl + Titanium.Network.encodeURIComponent(e.value);
        var path = "http://m.uwosh.edu/api/beta/2.0" + searchPath;
        Ti.Network.online ? peopleSearch(path) : alert("No network connection detected.");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;