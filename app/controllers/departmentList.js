var search = require('search');

function getDepartments(path) {
    search.doDepartmentSearch({
        success: function(data){
            var rows = [];
            _.each(data, function(item) {
                rows.push(Alloy.createController("departmentListRow", {
                    item: item
                }).getView());
            });
            $.departmentListTable.setData(rows);
        }
    }, path);
}

if(Ti.Network.online) {
    var path = "http://m.uwosh.edu/api/beta/2.0/directory/deptList";
    // Perform the search
    getDepartments(path);
} else {
    alert('No network connection detected.');
}
