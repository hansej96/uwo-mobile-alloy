if (OS_IOS || OS_MOBILEWEB) {
    function titancardClick(e) {
        if (Ti.App.Properties.getBool("myUwoAuth") === true) {
            Titanium.Analytics.featureEvent('titancard');
            Alloy.CFG.navgroup.open(Alloy.createController('titancard').getView());
        } else {
            Titanium.Analytics.featureEvent('netID');
            Alloy.CFG.navgroup.open(Alloy.createController('netID').getView());
        }
    }

    function polkLibraryClick(e) {
        Titanium.Analytics.featureEvent('polkLibrary');
        Alloy.CFG.navgroup.open(Alloy.createController('polkLibrary').getView());
    }

    function studentRecreationClick(e) {
        Titanium.Analytics.featureEvent('studentRecreation');
        Alloy.CFG.navgroup.open(Alloy.createController('studentRecreation').getView());
    }

    function diningLocationsClick(e) {
        Titanium.Analytics.featureEvent('diningLocations');
        Alloy.CFG.navgroup.open(Alloy.createController('diningLocations').getView());
    }

} else {
    function titancardClick(e) {
        if (Ti.App.Properties.getBool("myUwoAuth") === true) {
            Titanium.Analytics.featureEvent('titancard');
            Alloy.createController('titancard').getView().open();
        } else {
            Titanium.Analytics.featureEvent('netID');
            Alloy.createController('netID').getView().open();
        }
    }

    function polkLibraryClick(e) {
        Titanium.Analytics.featureEvent('polkLibrary');
        Alloy.createController('polkLibrary').getView().open();
    }

    function studentRecreationClick(e) {
        Titanium.Analytics.featureEvent('studentRecreation');
        Alloy.createController('studentRecreation').getView().open();
    }

    function diningLocationsClick(e) {
        Titanium.Analytics.featureEvent('diningLocations');
        Alloy.createController('diningLocations').getView().open();
    }

}
