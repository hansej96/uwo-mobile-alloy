if (OS_IOS || OS_MOBILEWEB) {
    function polkHoursClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('polkHours').getView());
    }

    function availableComputersClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('polkComputers').getView());
    }

    function groupFinderClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('groupFinder').getView());
    }

} else {
    function polkHoursClick(e) {
        Alloy.createController('polkHours').getView().open();
    }

    function availableComputersClick(e) {
        Alloy.createController('polkComputers').getView().open();
    }

    function groupFinderClick(e) {
        Alloy.createController('groupFinder').getView().open();
    }

}