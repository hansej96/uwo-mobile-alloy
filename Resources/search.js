exports.doPeopleSearch = function(o, path) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.open("GET", path);
    xhr.onload = function() {
        try {
            var people = JSON.parse(this.responseText);
            var data = [];
            for (var x = 0; people.length > x; x++) data.push({
                firstName: people[x].firstName,
                lastName: people[x].lastName,
                fullName: people[x].firstName + " " + people[x].lastName,
                email: people[x].email,
                dept: people[x].deptinfo.dept,
                phone: people[x].deptinfo.phone,
                office: people[x].deptinfo.office
            });
            o.success && o.success(data);
        } catch (e) {
            Ti.API.log(e);
        }
    };
    xhr.onerror = function() {
        o.error && o.error();
    };
    xhr.send();
};

exports.doLocationSearch = function(o, path) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.open("GET", path);
    xhr.onload = function() {
        try {
            var locations = JSON.parse(this.responseText);
            var data = [];
            for (var x = 0; locations.length > x; x++) data.push({
                id: locations[x].id,
                title: locations[x].title,
                description: locations[x].description,
                address: locations[x].address,
                image: locations[x].image,
                panorama: locations[x].panorama,
                latitude: locations[x].lat,
                longitude: locations[x].lng
            });
            o.success && o.success(data);
        } catch (e) {
            Ti.API.log(e);
        }
    };
    xhr.onerror = function() {
        o.error && o.error();
    };
    xhr.send();
};

exports.doDepartmentSearch = function(o, path) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.open("GET", path);
    xhr.onload = function() {
        try {
            var departments = JSON.parse(this.responseText);
            var data = [];
            for (var x = 0; departments.length > x; x++) data.push({
                dept: departments[x]
            });
            o.success && o.success(data);
        } catch (e) {
            Ti.API.log(e);
        }
    };
    xhr.onerror = function() {
        o.error && o.error();
    };
    xhr.send();
};