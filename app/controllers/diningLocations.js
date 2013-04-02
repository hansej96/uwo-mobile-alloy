if (OS_IOS || OS_MOBILEWEB) {
    function reeveUnionClick(e) {
        Titanium.Analytics.featureEvent('diningMenusReeveUnion');
        Alloy.CFG.navgroup.open(Alloy.createController('diningMenus', {
            selectedLocation: "reeveUnion"
        }).getView());
    }

    function blackhawkClick(e) {
        Titanium.Analytics.featureEvent('diningMenusBlackhawkCommons');
        Alloy.CFG.navgroup.open(Alloy.createController('diningMenus', {
            selectedLocation: "blackhawkCommons"
        }).getView());
    }

} else {
    function reeveUnionClick(e) {
        Titanium.Analytics.featureEvent('diningMenusReeveUnion');
        Alloy.createController('diningMenus', {
            selectedLocation: "reeveUnion"
        }).getView().open();
    }

    function blackhawkClick(e) {
        Titanium.Analytics.featureEvent('diningMenusBlackhawkCommons');
        Alloy.createController('diningMenus', {
            selectedLocation: "blackhawkCommons"
        }).getView().open();
    }

}
