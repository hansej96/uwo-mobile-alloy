function Controller() {
    function peopleSearch(path) {
        search.doPeopleSearch({
            success: function(data) {
                var rows = [];
                _.each(data, function(item) {
                    rows.push(Alloy.createController("departmentPeopleListRow", {
                        item: item
                    }).getView());
                });
                $.departmentPeopleListTable.setData(rows);
            }
        }, path);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "departmentPeopleList";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.departmentPeopleList = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "Department Search",
        id: "departmentPeopleList"
    });
    $.__views.departmentPeopleList && $.addTopLevelView($.__views.departmentPeopleList);
    $.__views.departmentPeopleListTable = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        id: "departmentPeopleListTable"
    });
    $.__views.departmentPeopleList.add($.__views.departmentPeopleListTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var search = require("search");
    var peopleOrDeptUrl = arguments[0].peopleOrDeptUrl;
    var searchPath = Titanium.Network.encodeURIComponent(peopleOrDeptUrl);
    var path = "http://m.uwosh.edu/api/beta/2.0/directory/search/dept/" + searchPath;
    Ti.Network.online ? peopleSearch(path) : alert("No network connection detected.");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;