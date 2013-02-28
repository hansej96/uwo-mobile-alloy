var rss = require('rss');

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


if(Ti.Network.online) {
    // Load the RSS feed
    refreshRSS(arguments[0].url);
} else {
    alert('No network connection detected.');
}
