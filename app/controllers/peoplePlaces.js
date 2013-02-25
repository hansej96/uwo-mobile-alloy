if (OS_IOS || OS_MOBILEWEB) {
    
    function peopleSearchClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('campusSearch', { peopleOrDeptUrl: "/directory/search/person/" }).getView());
    }
    
    function deptSearchClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('campusSearch', { peopleOrDeptUrl: "/directory/search/dept/" }).getView());
    }
    
    function locationSearchClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('locationSearch').getView());
    }
    
    function parkingMapClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('parkingMap').getView());
    }
    
    function campusMapClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('campusMap').getView());
    }
    
} else {
    
    function peopleSearchClick(e) {
        Alloy.createController('campusSearch', { peopleOrDeptUrl: "/directory/search/person/" }).getView().open();
    }
    
    function deptSearchClick(e) {
        Alloy.createController('campusSearch', { peopleOrDeptUrl: "/directory/search/dept/" }).getView().open();
    }
    
    function locationSearchClick(e) {
        Alloy.createController('locationSearch').getView().open();
    }
    
    function parkingMapClick(e) {
        Alloy.createController('parkingMap').getView().open();
    }
    
    function campusMapClick(e) {
        Alloy.createController('campusMap').getView().open();
    }
    
}
