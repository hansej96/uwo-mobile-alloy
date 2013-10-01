if (OS_IOS || OS_MOBILEWEB) {
    function reeveUnionClick(e) {
        Titanium.Analytics.featureEvent('diningMenusReeveUnion');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('diningMenus', {
            selectedLocation: "reeveUnion"
        }).getView());
    }

    function blackhawkClick(e) {
        Titanium.Analytics.featureEvent('diningMenusBlackhawkCommons');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('diningMenus', {
            selectedLocation: "blackhawkCommons"
        }).getView());
    }

} else {
    function reeveUnionAndroidClick(e) {
        Titanium.Analytics.featureEvent('diningMenusReeveUnion');
        Alloy.createController('diningMenus', {
            selectedLocation: "reeveUnion"
        }).getView().open();
    }

    function blackhawkAndroidClick(e) {
        Titanium.Analytics.featureEvent('diningMenusBlackhawkCommons');
        Alloy.createController('diningMenus', {
            selectedLocation: "blackhawkCommons"
        }).getView().open();
    }

}
