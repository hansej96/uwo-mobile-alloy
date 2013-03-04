if (OS_IOS || OS_MOBILEWEB) {
    function reeveUnionClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('diningMenus', { selectedLocation: "reeveUnion"}).getView());
    }

    function blackhawkClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('diningMenus', { selectedLocation: "blackhawkCommons"}).getView());
    }

} else {
    function reeveUnionClick(e) {
        Alloy.createController('diningMenus', { selectedLocation: "reeveUnion"}).getView().open();
    }

    function blackhawkClick(e) {
        Alloy.createController('diningMenus', { selectedLocation: "blackhawkCommons"}).getView().open();
    }

}