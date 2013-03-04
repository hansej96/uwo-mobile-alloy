if (OS_IOS || OS_MOBILEWEB) {
    function titancardClick(e) {
        if(Ti.App.Properties.getBool("myUwoAuth") === true) {
            Alloy.CFG.navgroup.open(Alloy.createController('titancard').getView());
        } else {
            Alloy.CFG.navgroup.open(Alloy.createController('netID').getView());
        }
    }

    function polkLibraryClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('polkLibrary').getView());
    }

    function diningLocationsClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('diningLocations').getView());
    }

} else {
    function titancardClick(e) {
        if(Ti.App.Properties.getBool("myUwoAuth") === true) {
            Alloy.createController('titancard').getView().open();
        } else {
            Alloy.createController('netID').getView().open();
        }
    }

    function polkLibraryClick(e) {
        Alloy.createController('polkLibrary').getView().open();
    }

    function diningLocationsClick(e) {
        Alloy.createController('diningLocations').getView().open();
    }

}