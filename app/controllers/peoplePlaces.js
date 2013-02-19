if (OS_IOS || OS_MOBILEWEB) {
    function parkingMapClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('parkingMap').getView());
    }
    function campusMapClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('campusMap').getView());
    }
} else {
    function parkingMapClick(e) {
        Alloy.createController('parkingMap').getView().open();
    }
    function campusMapClick(e) {
        Alloy.createController('campusMap').getView().open();
    }
}
