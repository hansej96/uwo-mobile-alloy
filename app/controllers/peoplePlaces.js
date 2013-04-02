if (OS_IOS || OS_MOBILEWEB) {

    function peopleSearchClick(e) {
        Titanium.Analytics.featureEvent('peopleSearch');
        Alloy.CFG.navgroup.open(Alloy.createController('campusSearch', {
            peopleOrDeptUrl: "/directory/search/person/"
        }).getView());
    }

    function deptSearchClick(e) {
        Titanium.Analytics.featureEvent('departmentList');
        Alloy.CFG.navgroup.open(Alloy.createController('departmentList').getView());
        //Alloy.CFG.navgroup.open(Alloy.createController('campusSearch', { peopleOrDeptUrl: "/directory/search/dept/" }).getView());
    }

    function locationSearchClick(e) {
        Titanium.Analytics.featureEvent('locationSearch');
        Alloy.CFG.navgroup.open(Alloy.createController('locationSearch').getView());
    }

    function parkingMapClick(e) {
        Titanium.Analytics.featureEvent('parkingMap');
        Alloy.CFG.navgroup.open(Alloy.createController('parkingMap').getView());
    }

    function campusMapClick(e) {
        Titanium.Analytics.featureEvent('campusMap');
        Alloy.CFG.navgroup.open(Alloy.createController('campusMap').getView());
    }

} else {

    function peopleSearchClick(e) {
        Titanium.Analytics.featureEvent('peopleSearch');
        Alloy.createController('campusSearch', {
            peopleOrDeptUrl: "/directory/search/person/"
        }).getView().open();
    }

    function deptSearchClick(e) {
        Titanium.Analytics.featureEvent('departmentList');
        Alloy.createController('departmentList').getView().open();
        //Alloy.createController('campusSearch', { peopleOrDeptUrl: "/directory/search/dept/" }).getView().open();
    }

    function locationSearchClick(e) {
        Titanium.Analytics.featureEvent('locationSearch');
        Alloy.createController('locationSearch').getView().open();
    }

    function parkingMapClick(e) {
        Titanium.Analytics.featureEvent('parkingMap');
        Alloy.createController('parkingMap').getView().open();
    }

    function campusMapClick(e) {
        Titanium.Analytics.featureEvent('campusMap');
        Alloy.createController('campusMap').getView().open();
    }

}
