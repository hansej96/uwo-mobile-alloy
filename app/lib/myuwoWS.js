/**
 * UWO Student portal Web Service integration
 */

/**
 * auth to the portal
 * @param {object} params expected params: username and password
 */
exports.auth = function(params) {

    var wsAuth = Titanium.Network.createHTTPClient({
        onload: function() {
            //Ti.API.info('RAW ='+this.responseText);
            if(this.status == '200') {
                //Ti.API.info('got my response, http status code ' + this.status);
                if(this.readyState == 4) {
                    var response = JSON.parse(this.responseText);
                    Ti.API.info(response);
                    if (response.d.LoginSuccessful === true) {
                        params.success();
                    } else {
                        params.onerror(response.d);
                    }
                } else {
                    alert('HTTP Ready State != 4');
                }
            } else {
                alert('HTTP Error Response Status Code = '+this.status);
                Ti.API.error("Error =>"+this.response);
            }
        },
        onerror: function(e) {
            Ti.API.error('Bad Server =>'+e.error);
        },
        timeout: 10000
    });
    wsAuth.open("POST", "https://portal.housing.uwosh.edu/services/PortalControls/PortalControlsService.asmx/Login"); //ADD your URL
    wsAuth.setRequestHeader("content-type", "application/json");
    var options= {
        "disableTimeout": false,
        "rememberMe": true,
        "returnURL": "/",
        "username": params.username,
        "password": params.password
    };
    wsAuth.send(JSON.stringify(options));
};

exports.titanCard = function(params){
    /*
     * Requires an authenticated user
     * Params: {object} params success authError callbacks
     * Return: JSON payload or
     */
    var wsCall = Titanium.Network.createHTTPClient({
        onload: function() {
            try {
                var response = JSON.parse(this.responseText);
                params.success(response);

            } catch(e) {
                var re = e.error;
                re = re.split('"');
                Ti.API.debug(re[1]);
                if(re[1] === 'Authentication needed') {
                    params.authError();
                } else {
                    Ti.API.error('Bad Server =>'+e.error);
                }
            }
        },
        onerror: function(e) {
            Ti.API.error('Bad Server =>'+e.error);
        },
        timeout: 10000
    });
    var path = 'https://portal.housing.uwosh.edu/apps/titancard/services/titancardmoduleservice.asmx/GetTitanCardInfo';
    wsCall.open("POST", path);
    wsCall.setRequestHeader("content-type","application/json");
    wsCall.send();
};

exports.dining = function(params) {
    var blackhawk = [],
        reeve = [];

    var wsCall = Ti.Network.createHTTPClient({
        onload: function() {
            try {
                if(this.status == '200') {
                    //Ti.API.info('got my response, http status code ' + this.status);
                    if(this.readyState == 4) {
                        var doc = this.responseXML.documentElement;
                        var items = doc.getElementsByTagName("item");
                        //loop through items
                        for(var i = 0; i < items.length; i++) {
                            var item = items.item(i);

                            var location = item.getElementsByTagName("title").item(0).text.split("-");
                            var title = location[1];
                            if(location[2]) {
                                title = title + ' - ' + location[2];
                            }
                            switch(location[0]) {
                                case "Blackhawk Commons ":
                                    blackhawk.push({
                                        title: title ,
                                        menu: item.getElementsByTagName("description").item(0).text
                                    });
                                    break;
                                case "Reeve Memorial Union ":
                                    reeve.push({
                                        title: title,
                                        menu: item.getElementsByTagName("description").item(0).text
                                    });
                                    break;
                            }
                        }
                    }
                }
                params.success(blackhawk,reeve);
            } catch(e) {
                Ti.API.debug(e);
                params.onerror();
            }

        },
        onerror: function(e){
            Ti.API.debug(e);
            params.onerror();
        },
        timeout: 10000
    });
    var path = 'https://portal.housing.uwosh.edu/apps/dining/rss/diningrss.aspx';
    wsCall.open("GET", path);
    wsCall.send();
};
