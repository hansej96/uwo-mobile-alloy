exports.loadRssFeed = function(o, feed) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.open("GET", feed);
    xhr.onload = function() {
        try {
            var xml = this.responseXML;
            var items = xml.documentElement.getElementsByTagName("item");
            var data = [];
            for (var c = 0; items.length > c; c++) {
                var item = items.item(c);
                var articleDate;
                try {
                    articleDate = item.getElementsByTagName("pubDate").item(0).text;
                } catch (e) {
                    articleDate = item.getElementsByTagName("dc:date").item(0).text;
                }
                data.push({
                    title: item.getElementsByTagName("title").item(0).text,
                    link: item.getElementsByTagName("link").item(0).text,
                    date: articleDate
                });
            }
            o.success && o.success(data);
        } catch (E) {
            Titanium.API.log(E);
        }
    };
    xhr.onerror = function() {
        o.error && o.error();
    };
    o.start && o.start();
    xhr.send();
};