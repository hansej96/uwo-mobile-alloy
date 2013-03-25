var search = require('search');

function peopleSearch(path) {
    search.doPeopleSearch({
        success: function(data){
            var rows = [];
            _.each(data, function(item) {
                rows.push(Alloy.createController("departmentPeopleListRow", {
                   item: item
                }).getView());
            });
            $.departmentPeopleListTable.setData(rows);

        }
    }, path);
}

// Is this a people search or a department search?
var peopleOrDeptUrl = arguments[0].peopleOrDeptUrl;


var searchPath = Titanium.Network.encodeURIComponent(peopleOrDeptUrl);
var path = "http://m.uwosh.edu/api/beta/2.0/directory/search/dept/" + searchPath;

if(Ti.Network.online) {
    // Perform the search
    peopleSearch(path);
} else {
    alert('No network connection detected.');
}
