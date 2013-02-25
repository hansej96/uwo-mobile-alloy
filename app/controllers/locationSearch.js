function doSearch(path) {
    var data = [];
    var xhr = Ti.Network.createHTTPClient({
        onload : function() {
            try {
                // Parse response data
                var locations = JSON.parse(this.responseText);

                if(locations.length > 0) {
                    for(var x = 0; x < locations.length; x++) {
                        var location = {};
                        
                        // Set location information
                        location.id = locations[x].id;
                        location.title = locations[x].title;
                        location.description = locations[x].description;
                        location.address = locations[x].address;
                        location.image = locations[x].image;
                        location.panorama = locations[x].panorama;
                        location.latitude = locations[x].lat;
                        location.longitude = locations[x].lng;

                        // Style rows, bgcolor is for zebra-striping
                        var bgcolor = (x % 2) === 0 ? "#fff" : "#eee";
                        var row = Ti.UI.createTableViewRow({
                            height: 40,
                            hasChild: true,
                            backgroundColor: bgcolor
                        });

                        // Populate and style row labels
                        var label = Ti.UI.createLabel({
                            text: location.title,
                            left: 5,
                            top: 5,
                            bottom: 5,
                            right: 5,
                            fontSize: 14,
                            color: "#000"
                        });

                        row.add(label);
                        row.location = location;
                        data.push(row);
                    }
                } else {
                    data.push({
                        title: " ",
                        hasChild: false,
                        touchEnabled: false
                    });
                    data.push({
                        title: " ",
                        hasChild: false,
                        touchEnabled: false
                    });
                    var rowNoData = Ti.UI.createTableViewRow({
                        height : 40,
                        hasChild : false,
                        touchEnabled : false
                    });
                    var noData = Ti.UI.createLabel({
                        text : 'No Results',
                        fontSize : 14,
                        textAlign : 'center',
                        color : '#000'
                    });
                    rowNoData.add(noData);
                    data.push(rowNoData);
                }

                // refresh tableView data
                $.locationSearchTable.setData(data);
                
            } catch(e) {
                Ti.API.log(e);
            }
        },
        onerror : function(e) {
            var alertDialog = Titanium.UI.createAlertDialog({
                title: "WARNING!",
                message: "Could not get search data back from server.",
                buttonNames: ["OK"]
            });
            alertDialog.show();
            Ti.API.Debug(e);
        }
    });

    xhr.open("GET", path);
    xhr.send();
}

// Search Bar
$.sb.addEventListener('cancel', function(e) {
    $.sb.blur();
});
$.sb.addEventListener('return', function(e) {
    $.sb.blur();
    var searchPath = "/map/search/" + Titanium.Network.encodeURIComponent(e.value);
    var path = "http://m.uwosh.edu/api/beta/2.0" + searchPath;

    if(Ti.Network.online) {
        // Perform the search
        doSearch(path);
    } else {
        alert('No network connection detected.');
    }
});
