function Controller() {
    function refreshRSS(feed) {
        rss.loadRssFeed({
            success: function(data) {
                var rows = [];
                _.each(data, function(item) {
                    rows.push(Alloy.createController("newsFeedRow", {
                        item: item
                    }).getView());
                });
                $.newsFeedTable.setData(rows);
            }
        }, feed);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newsFeed";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.newsFeed = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "News Feed",
        id: "newsFeed"
    });
    $.__views.newsFeed && $.addTopLevelView($.__views.newsFeed);
    $.__views.newsFeedTable = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        id: "newsFeedTable"
    });
    $.__views.newsFeed.add($.__views.newsFeedTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var rss = require("rss");
    Ti.Network.online ? refreshRSS(arguments[0].url) : alert("No network connection detected.");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;