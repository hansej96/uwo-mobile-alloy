var WebServiceUrl = "http://www.uwosh.edu/library/ws/", timeout = 11e3, datetime = require("datetimeJS");

exports.resources = function(params) {
    var json;
    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            try {
                json = JSON.parse(this.responseText);
                json.cached_at ? params.success && params.success(json, params.entry) : params.onerror && params.onerror(params.entry);
            } catch (e) {
                Titanium.API.log(e);
                params.onerror && params.onerror(params.entry);
            }
        },
        onerror: function() {
            params.onerror && params.onerror(params.entry);
        },
        timeout: timeout
    });
    xhr.open("GET", WebServiceUrl + "getAvailableResources?alt=json");
    xhr.send();
};

exports.hours = function(params) {
    var json;
    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            try {
                json = JSON.parse(this.responseText);
                var nowOpen = json.current_status_text;
                var hours = [];
                if (json.times.length >= 1) {
                    for (var i = 0; json.times.length > i; i++) {
                        var day = {};
                        var opendate = new Date(1e3 * json.times[i].open_loc);
                        var closedate = new Date(1e3 * json.times[i].close_loc);
                        day.title = datetime.cleanDate(opendate);
                        day.open = opendate;
                        day.close = closedate;
                        day.isOpen = json.times[i].is_open;
                        hours.push(day);
                    }
                    params.success && params.success(nowOpen, hours, params.entry);
                } else params.onerror && params.onerror(params.entry);
            } catch (e) {
                Titanium.API.debug(e);
                params.onerror && params.onerror(params.entry);
            }
        },
        onerror: function() {
            params.onerror && params.onerror(params.entry);
        },
        timeout: timeout
    });
    xhr.open("GET", WebServiceUrl + "getLibraryHours?v=2&alt=json");
    xhr.send();
};

exports.groupFinder = function(params) {
    var json;
    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            try {
                json = JSON.parse(this.responseText);
                params.success && params.success(json, params.entry);
            } catch (e) {
                Titanium.API.debug(e);
                params.onerror && params.onerror(params.entry);
            }
        },
        onerror: function(e) {
            if (params.onerror) {
                Titanium.API.debug(e.error);
                params.onerror(params.entry);
            }
        },
        timeout: timeout
    });
    xhr.open("GET", WebServiceUrl + "getGroupFinderEvents?alt=json");
    xhr.send();
};