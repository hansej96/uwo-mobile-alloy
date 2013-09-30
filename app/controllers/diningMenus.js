var args = arguments[0] || {};
var portal = require("myuwoWS");
var selectedLocation = args.selectedLocation;

function reloadAllMenus() {
    portal.dining({
      success: loadMenus,
      onerror: function(msg) {
        loadedViews = [];
        alert('There was an error retrieving the menus');
      }
    });
};

var loadMenus = function(blackhawk, reeve) {
    var location = [];
    var rows = [];

    if (selectedLocation === "reeveUnion") {
        location = reeve;
        $.diningMenusWindow.title = "Reeve Union";
    } else {
        location = blackhawk;
        $.diningMenusWindow.title = "Blackhawk Commons";
    }

    // Loop through menu data
    for(var x = 0; x < location.length; x++) {
        rows.push(Alloy.createController('diningMenusRow', {
            restaurantName: location[x].title,
            menuItems: location[x].menu
        }).getView());
    }

    $.diningTable.setData(rows);
};

if(Ti.Network.online) {
    // Perform the search
    reloadAllMenus();
} else {
    alert('No network connection detected.');
}
