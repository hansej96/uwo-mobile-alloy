var rss = require('rss');

function refreshRSS(feed) {
    rss.loadRssFeed({
        success: function(data) {
            var rows = [];
            _.each(data, function(item) {
                rows.push(Alloy.createController("newsFeedRow", {
                    articleUrl: item.link,
                    title: item.title,
                    date: item.date
                }).getView());
            });
            $.newsFeedTable.setData(rows);

            $.newsFeedTable.addEventListener('click', function (e) {
                Ti.Platform.openURL(e.row.articleUrl);
            });
        }
    }, feed);
}


if(Ti.Network.online) {
    // Load the RSS feed
    refreshRSS(arguments[0].url);
} else {
    alert('No network connection detected.');
}
