function Controller() {
    function groupSection(section, data) {
        for (var i = 0; section.length > i; i++) {
            var groupHeader = new header.HeaderRow(section[i].title, "#414444");
            var locationRow = Ti.UI.createTableViewRow();
            var locationLabel = Titanium.UI.createLabel({
                text: section[i].location,
                font: {
                    fontSize: 18
                },
                color: "#414444",
                left: 10,
                textAlign: "left"
            });
            locationRow.add(locationLabel);
            var openTime = datetime.cleanTime(section[i].start);
            var closeTime = datetime.cleanTime(section[i].end);
            var time = openTime + " - " + closeTime;
            var timeRow = Ti.UI.createTableViewRow();
            var timeLabel = Titanium.UI.createLabel({
                text: time,
                font: {
                    fontSize: 18
                },
                color: "#414444",
                left: 10,
                textAlign: "left"
            });
            timeRow.add(timeLabel);
            data.push(groupHeader);
            data.push(locationRow);
            data.push(timeRow);
        }
    }
    function groupFinder(groups) {
        var data = [];
        if (groups.today.length >= 1) {
            var todayHeader = new header.HeaderRow("Today's Groups");
            data.push(todayHeader);
            groupSection(groups.today, data);
        }
        if (groups.tomorrow.length >= 1) {
            var tomorrowHeader = new header.HeaderRow("Tomorrow's Groups");
            data.push(tomorrowHeader);
            groupSection(groups.tomorrow, data);
        }
        if (groups.upcoming.length >= 1) {
            var upcomingHeader = new header.HeaderRow("Upcoming Groups");
            data.push(upcomingHeader);
            var lastDate = "";
            for (var i = 0; groups.upcoming.length > i; i++) {
                var startDate = new Date(groups.upcoming[i].start);
                if ("" === lastDate || startDate.toDateString() !== lastDate) {
                    lastDate = startDate.toDateString();
                    var dateRow = new header.HeaderRow(datetime.cleanDate(startDate), "#cc3333");
                    data.push(dateRow);
                }
                var groupHeader = new header.HeaderRow(groups.upcoming[i].title, "#414444");
                var locationRow = Ti.UI.createTableViewRow();
                var locationLabel = Titanium.UI.createLabel({
                    text: groups.upcoming[i].location,
                    font: {
                        fontSize: 18
                    },
                    color: "#414444",
                    left: 10,
                    textAlign: "left"
                });
                locationRow.add(locationLabel);
                var openTime = datetime.cleanTime(groups.upcoming[i].start);
                var closeTime = datetime.cleanTime(groups.upcoming[i].end);
                var time = openTime + " - " + closeTime;
                var timeRow = Ti.UI.createTableViewRow();
                var timeLabel = Titanium.UI.createLabel({
                    text: time,
                    font: {
                        fontSize: 18
                    },
                    color: "#414444",
                    left: 10,
                    textAlign: "left"
                });
                timeRow.add(timeLabel);
                data.push(groupHeader);
                data.push(locationRow);
                data.push(timeRow);
            }
        }
        if (0 === groups.today.length && 0 === groups.tomorrow.length && 0 === groups.upcoming.length) {
            var noData = new header.HeaderRow("No Groups are scheduled");
            data.push(noData);
        }
        $.groupFinderTable.setData(data);
    }
    function getLibrary(entry) {
        webservices.groupFinder({
            success: groupFinder,
            onerror: onerror,
            entry: entry
        });
    }
    function onerror() {
        alert("Group Finder encountered an error");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "groupFinder";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.groupFinder = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "Group Finder",
        id: "groupFinder"
    });
    $.__views.groupFinder && $.addTopLevelView($.__views.groupFinder);
    $.__views.groupFinderTable = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        id: "groupFinderTable"
    });
    $.__views.groupFinder.add($.__views.groupFinderTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var webservices = require("libraryWS"), header = require("HeaderRow"), datetime = require("datetimeJS");
    Ti.Network.online ? getLibrary("GroupFinder") : alert("No network connection detected");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;