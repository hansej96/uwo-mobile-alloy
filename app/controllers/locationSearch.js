var search = require('search');

function locationSearch(path) {
    search.doLocationSearch({
        success: function(data){
            var rows = [];
            _.each(data, function(item) {
                rows.push(Alloy.createController("locationSearchRow", {
                   item: item
                }).getView());
            });
            $.locationSearchTable.setData(rows);
            
        }
    }, path);
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
        locationSearch(path);
    } else {
        alert('No network connection detected.');
    }
});
