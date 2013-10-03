function Controller() {
    function resources(json) {
        var data = [];
        var labs = json.computers;
        var pcHeader = new header.HeaderRow("Available Computers");
        data.push(pcHeader);
        for (var i = 0; json.computers.length > i; i++) {
            var labRow = Ti.UI.createTableViewRow();
            var labName = Titanium.UI.createLabel({
                text: labs[i].name,
                font: {
                    fontSize: 18,
                    fontWeight: "bold"
                },
                color: "#414444",
                left: 10,
                textAlign: "left"
            });
            var labPcs = Titanium.UI.createLabel({
                text: labs[i].available_count,
                font: {
                    fontSize: 18
                },
                color: "#414444",
                right: 10,
                textAlign: "right"
            });
            labRow.add(labName);
            labRow.add(labPcs);
            data.push(labRow);
        }
        var arHeader = new header.HeaderRow("Additional Resources");
        data.push(arHeader);
        var ar = json.resources;
        for (var j = 0; ar.length > j; j++) {
            var arRow = Ti.UI.createTableViewRow();
            var arName = Titanium.UI.createLabel({
                text: ar[j].name,
                font: {
                    fontSize: 18,
                    fontWeight: "bold"
                },
                color: "#414444",
                left: 10,
                textAlign: "left"
            });
            var arNum = Titanium.UI.createLabel({
                text: ar[j].available_count,
                font: {
                    fontSize: 18
                },
                color: "#414444",
                right: 10,
                textAlign: "right"
            });
            arRow.add(arName);
            arRow.add(arNum);
            data.push(arRow);
        }
        $.availableComputers.setData(data);
    }
    function getLibrary(entry) {
        webservices.resources({
            success: resources,
            onerror: onerror,
            entry: entry
        });
    }
    function onerror() {
        alert("There was an error retrieving the available computers");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "polkComputers";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.polkComputers = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "Available Computers",
        id: "polkComputers"
    });
    $.__views.polkComputers && $.addTopLevelView($.__views.polkComputers);
    $.__views.availableComputers = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        id: "availableComputers"
    });
    $.__views.polkComputers.add($.__views.availableComputers);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var webservices = require("libraryWS"), header = require("HeaderRow");
    Ti.Network.online ? getLibrary("Available Computers") : alert("No network connection detected");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;