function createRSS() {
    var data = [];
    var xhr = Ti.Network.createHTTPClient();

    xhr.open("GET", "http://www.uwosh.edu/today/feed/?cat=5%2C6");
    xhr.onerror = function(e) {
        Ti.API.info(e);
    };

    xhr.onload = function() {
        try
        {
            var doc = this.responseXML.documentElement;
            var items = doc.getElementsByTagName("item");
            var x = 0;
            
            for(var c = 0; c < items.length; c++) {
                var item = items.item(c);
                
                var title = item.getElementsByTagName("title").item(0).text;
                var row = Ti.UI.createTableViewRow({
                    height : 60,
                    hasChild : true
                });
                var label = Ti.UI.createLabel({
                    text : title,
                    left : 5,
                    top : 5,
                    bottom : 5,
                    right : 5,
                    font : {
                        fontSize : 14
                    },
                    color : '#000'
                });
                row.add(label);
                data[x++] = row;
                row.shortTitle = title;
                row.url = item.getElementsByTagName("link").item(0).text;
            }
            
            $.newsFeedTable.setData(data);
            
            $.newsFeedTable.addEventListener('click', function (e) {
                Ti.Platform.openURL(e.row.url);
            });
            
        } catch(E) {
            Titanium.API.log(E);
        }
    };
    
    xhr.send();
}

createRSS();
