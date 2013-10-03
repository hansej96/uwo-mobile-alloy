exports.auth = function(params) {
    var wsAuth = Titanium.Network.createHTTPClient({
        onload: function() {
            if ("200" == this.status) if (4 == this.readyState) {
                var response = JSON.parse(this.responseText);
                Ti.API.info(response);
                true === response.d.LoginSuccessful ? params.success() : params.onerror(response.d);
            } else alert("HTTP Ready State != 4"); else {
                alert("HTTP Error Response Status Code = " + this.status);
                Ti.API.error("Error =>" + this.response);
            }
        },
        onerror: function(e) {
            Ti.API.error("Bad Server =>" + e.error);
        },
        timeout: 1e4
    });
    wsAuth.open("POST", "https://portal.housing.uwosh.edu/services/PortalControls/PortalControlsService.asmx/Login");
    wsAuth.setRequestHeader("content-type", "application/json");
    var options = {
        disableTimeout: false,
        rememberMe: true,
        returnURL: "/",
        username: params.username,
        password: params.password
    };
    wsAuth.send(JSON.stringify(options));
};

exports.titanCard = function(params) {
    var wsCall = Titanium.Network.createHTTPClient({
        onload: function() {
            try {
                var response = JSON.parse(this.responseText);
                params.success(response);
            } catch (e) {
                var re = e.error;
                re = re.split('"');
                Ti.API.debug(re[1]);
                "Authentication needed" === re[1] ? params.authError() : Ti.API.error("Bad Server =>" + e.error);
            }
        },
        onerror: function(e) {
            Ti.API.error("Bad Server =>" + e.error);
        },
        timeout: 1e4
    });
    var path = "https://portal.housing.uwosh.edu/apps/titancard/services/titancardmoduleservice.asmx/GetTitanCardInfo";
    wsCall.open("POST", path);
    wsCall.setRequestHeader("content-type", "application/json");
    wsCall.send();
};

exports.dining = function(params) {
    var blackhawk = [], reeve = [];
    var wsCall = Ti.Network.createHTTPClient({
        onload: function() {
            try {
                if ("200" == this.status && 4 == this.readyState) {
                    var doc = this.responseXML.documentElement;
                    var items = doc.getElementsByTagName("item");
                    for (var i = 0; items.length > i; i++) {
                        var item = items.item(i);
                        var location = item.getElementsByTagName("title").item(0).text.split("-");
                        var title = location[1];
                        location[2] && (title = title + " - " + location[2]);
                        switch (location[0]) {
                          case "Blackhawk Commons ":
                            blackhawk.push({
                                title: title,
                                menu: item.getElementsByTagName("description").item(0).text
                            });
                            break;

                          case "Reeve Memorial Union ":
                            reeve.push({
                                title: title,
                                menu: item.getElementsByTagName("description").item(0).text
                            });
                        }
                    }
                }
                params.success(blackhawk, reeve);
            } catch (e) {
                Ti.API.debug(e);
                params.onerror();
            }
        },
        onerror: function(e) {
            Ti.API.debug(e);
            params.onerror();
        },
        timeout: 1e4
    });
    var path = "https://portal.housing.uwosh.edu/apps/dining/rss/diningrss.aspx";
    wsCall.open("GET", path);
    wsCall.send();
};