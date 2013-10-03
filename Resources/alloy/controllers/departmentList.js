function Controller() {
    function getDepartments(path) {
        search.doDepartmentSearch({
            success: function(data) {
                var rows = [];
                _.each(data, function(item) {
                    rows.push(Alloy.createController("departmentListRow", {
                        item: item
                    }).getView());
                });
                $.departmentListTable.setData(rows);
            }
        }, path);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "departmentList";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.departmentList = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "Department List",
        id: "departmentList"
    });
    $.__views.departmentList && $.addTopLevelView($.__views.departmentList);
    $.__views.departmentListTable = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        id: "departmentListTable"
    });
    $.__views.departmentList.add($.__views.departmentListTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var search = require("search");
    if (Ti.Network.online) {
        var path = "http://m.uwosh.edu/api/beta/2.0/directory/deptList";
        getDepartments(path);
    } else alert("No network connection detected.");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;