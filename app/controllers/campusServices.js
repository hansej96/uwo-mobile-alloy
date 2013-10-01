if (OS_IOS || OS_MOBILEWEB) {
    function titancardClick(e) {
        if (Ti.App.Properties.getBool("myUwoAuth") === true) {
            Titanium.Analytics.featureEvent('titancard');
            Alloy.Globals.navwindow.openWindow(Alloy.createController('titancard').getView());
        } else {
            Titanium.Analytics.featureEvent('netID');
            Alloy.Globals.navwindow.openWindow(Alloy.createController('netID').getView());
        }
    }

    function polkLibraryClick(e) {
        Titanium.Analytics.featureEvent('polkLibrary');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('polkLibrary').getView());
    }

    function studentRecreationClick(e) {
        Titanium.Analytics.featureEvent('studentRecreation');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('studentRecreation').getView());
    }

    function diningLocationsClick(e) {
        Titanium.Analytics.featureEvent('diningLocations');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('diningLocations').getView());
    }

    function safewalkClick(e) {
        Titanium.Analytics.featureEvent('safewalk');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('safewalk').getView());
    }

} else {
    function titancardAndroidClick(e) {
        if (Ti.App.Properties.getBool("myUwoAuth") === true) {
            Titanium.Analytics.featureEvent('titancard');
            Alloy.createController('titancard').getView().open();
        } else {
            Titanium.Analytics.featureEvent('netID');
            Alloy.createController('netID').getView().open();
        }
    }

    function polkLibraryAndroidClick(e) {
        Titanium.Analytics.featureEvent('polkLibrary');
        Alloy.createController('polkLibrary').getView().open();
    }

    function studentRecreationAndroidClick(e) {
        Titanium.Analytics.featureEvent('studentRecreation');
        Alloy.createController('studentRecreation').getView().open();
    }

    function diningLocationsAndroidClick(e) {
        Titanium.Analytics.featureEvent('diningLocations');
        Alloy.createController('diningLocations').getView().open();
    }
    function safewalkAndroidClick(e) {
        Titanium.Analytics.featureEvent('safewalk');
        Alloy.createController('safewalk').getView().open();
    }

}
