var portal = require("myuwoWS");

function reloadAllMenus() {
    portal.dining({
      success: loadMenus,
      onerror: function(msg) {
        loadedViews = [];
        ai.hideModal();
        alert(msg);
      }
    });
};

