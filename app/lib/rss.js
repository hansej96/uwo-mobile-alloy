exports.loadRssFeed = function(o, feed) {
    var xhr = Ti.Network.createHTTPClient();

    xhr.open("GET", feed);

    xhr.onload = function() {
        try
        {
            var xml = this.responseXML;
            var items = xml.documentElement.getElementsByTagName("item");
            var data =[];
            
            for(var c = 0; c < items.length; c++) {
                var item = items.item(c);
                
                data.push({
                    title: item.getElementsByTagName("title").item(0).text,
                    link: item.getElementsByTagName("link").item(0).text
                });
            }
            if (o.success) { o.success(data); }

        } catch(E) {
            Titanium.API.log(E);
        }
    };

    xhr.onerror = function(e) {
        if (o.error) { o.error(); }
    };
    
    if (o.start) { o.start(); }
    xhr.send();
}

