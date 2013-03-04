/**
 * Library SW Model
 * @version 0.1
 * @author Joel Herron
 */

/**
 * private vars & methods
 */
var WebServiceUrl = 'http://www.uwosh.edu/library/ws/',
    timeout = 11000,
    datetime = require("datetimeJS");

/**********************************
 * Public Methods & Variables
 *********************************/

/**
 * get Available technology Resources
 * @param {object} params
 */
exports.resources = function(params) {
    var json;
    /*
     * Setup xhr request
     */
    var xhr = Ti.Network.createHTTPClient({
        onload : function() {
            try {
                json = JSON.parse(this.responseText);

                if(json.cached_at) {
                    if(params.success) {
                        params.success(json,params.entry);
                    }
                } else {
                    if(params.onerror) {
                        params.onerror(params.entry);
                    }
                }
            } catch(e) {
                Titanium.API.log(e);
                if(params.onerror) {
                    params.onerror(params.entry);
                }
            }
        },
        onerror: function() {
            if(params.onerror) {
                params.onerror(params.entry);
            }
        },
        timeout: timeout
    });
    xhr.open("GET", WebServiceUrl + "getAvailableResources?alt=json");
    xhr.send();
};

/**
 * Get current Library hours
 * @param {object} params
 */
exports.hours = function(params) {
    var json;

    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            try {
                json = JSON.parse(this.responseText);
                var nowOpen = json.current_status_text;
                var hours = [];
                if(json.times.length >= 1) {
                    for(var i = 0; i < json.times.length; i++) {
                        var day = {};
                        var opendate = new Date(json.times[i].open_loc*1000);
                        var closedate = new Date(json.times[i].close_loc*1000);
                        day.title = datetime.cleanDate(opendate);
                        day.open = opendate;
                        day.close = closedate;
                        day.isOpen = json.times[i].is_open;
                        hours.push(day);
                    }
                    if(params.success) {
                        params.success(nowOpen,hours, params.entry);
                    }
                } else {
                    if(params.onerror) {
                        params.onerror(params.entry);
                    }
                }
            } catch(e) {
                Titanium.API.debug(e);
                if(params.onerror) {
                    params.onerror(params.entry);
                }
            }
        },
        onerror: function() {
            if(params.onerror) {
                params.onerror(params.entry);
            }
        },
        timeout: timeout
    });
    xhr.open("GET", WebServiceUrl +"getLibraryHours?v=2&alt=json");
    xhr.send();
};

/**
 * get current group finder sessions
 * @param {object} params
 */
exports.groupFinder = function(params) {
    var json;

    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            try {
                json = JSON.parse(this.responseText);
                if(params.success) {
                    params.success(json, params.entry);
                }

            } catch(e) {
                Titanium.API.debug(e);
                if(params.onerror) {
                    params.onerror(params.entry);
                }
            }
        },
        onerror: function(e) {
            if(params.onerror) {
                Titanium.API.debug(e.error);
                params.onerror(params.entry);
            }
        },
        timeout: timeout
    });
    xhr.open("GET", WebServiceUrl + "getGroupFinderEvents?alt=json");
    xhr.send();
};
