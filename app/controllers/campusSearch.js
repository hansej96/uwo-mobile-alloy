function doSearch(path) {
    var xhr = Ti.Network.createHTTPClient({
        onload : function() {
            try {
                // Parse response data
                var people = JSON.parse(this.responseText);
                // Create table view data object
                var data = [];
                var i = 0;

                if(people.length > 0 && people.length < 51) {
                    for(var x = 0; x < people.length; x++) {
                        var person = {};
                        // Set person information
                        person.firstName = people[x].firstName;
                        person.lastName = people[x].lastName;
                        person.fullName = person.firstName + " " + person.lastName;
                        person.email = people[x].email;
                        person.dept = people[x].deptinfo.dept;
                        person.phone = "(920) 424-" + people[x].deptinfo.phone;
                        person.office = people[x].deptinfo.office;

                        // Style rows, bgcolor is for zebra-striping
                        var bgcolor = (x % 2) === 0 ? "#fff" : "#eee";
                        var row = Ti.UI.createTableViewRow({
                            height: 40,
                            hasChild: true,
                            backgroundColor: bgcolor
                        });

                        // Populate and style row labels
                        var name = Ti.UI.createLabel({
                            text: person.lastName + ", " + person.firstName,
                            left: 5,
                            top: 5,
                            bottom: 5,
                            right: 5,
                            fontSize: 14,
                            color: "#000"
                        });

                        row.add(name);
                        row.person = person;
                        data[i++] = row;
                    }
                } else if(people.length >= 51) {
                    // Set message as tablerow data
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
                    var rowX = Ti.UI.createTableViewRow({
                        height : 40,
                        hasChild : false,
                        touchEnabled : false
                    });
                    var xData = Ti.UI.createLabel({
                        text : 'Too many results, please narrow your search',
                        fontSize : 14,
                        textAlign : 'center',
                        color : '#000'
                    });
                    rowX.add(xData);
                    data.push(rowX);
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
                $.campusSearchTable.setData(data);
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
    var searchPath = "/directory/search/person/" + Titanium.Network.encodeURIComponent(e.value);
    var path = "http://m.uwosh.edu/api/beta/2.0" + searchPath;

    if(Ti.Network.online) {
        // Perform the search
        doSearch(path);
    } else {
        alert('No network connection detected.');
    }
});
