exports.doPeopleSearch = function(o, path) {
    var xhr = Ti.Network.createHTTPClient();
    
    xhr.open("GET", path);
    
    xhr.onload = function() {
        try {
            // Parse response data
            var people = JSON.parse(this.responseText);
            var data = [];

            for(var x = 0; x < people.length; x++) {
                    
                data.push({
                    firstName: people[x].firstName,
                    lastName: people[x].lastName,
                    fullName: people[x].firstName + " " + people[x].lastName,
                    email: people[x].email,
                    dept: people[x].deptinfo.dept,
                    phone: "(920) 424-" + people[x].deptinfo.phone,
                    office: people[x].deptinfo.office
                });
            }
            if (o.success) { o.success(data); }
            
        } catch(e) {
            Ti.API.log(e);
        }
    };
        
    xhr.onerror = function(e) {
        if (o.error) { o.error(); }
    };

    xhr.send();
}

