var webservices = require("libraryWS"),
    datetime = require("datetimeJS");

function hours(nowOpen, hours, entry) {
    var data = [];

    var todayHeader = Ti.UI.createTableViewRow();
    var todayHeaderLabel = Titanium.UI.createLabel({
        text: 'Today'
    });

    var status = Ti.UI.createTableViewRow();
    var statusTitleLabel = Titanium.UI.createLabel({
        text: 'Currently:'
    });
}