if (OS_IOS || OS_MOBILEWEB) {
    function parkingMapClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('parkingMap').getView());
    }
} else {
    function parkingMapClick(e) {
        Alloy.createController('parkingMap').getView().open();
    }
}
