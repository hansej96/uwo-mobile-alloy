if (OS_IOS || OS_MOBILEWEB) {

    function peopleSearchClick(e) {
        Titanium.Analytics.featureEvent('peopleSearch');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('campusSearch', {
            peopleOrDeptUrl: "/directory/search/person/"
        }).getView());
    }

    function deptSearchClick(e) {
        Titanium.Analytics.featureEvent('departmentList');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('departmentList').getView());
        //Alloy.CFG.navgroup.open(Alloy.createController('campusSearch', { peopleOrDeptUrl: "/directory/search/dept/" }).getView());
    }

    function locationSearchClick(e) {
        Titanium.Analytics.featureEvent('locationSearch');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('locationSearch').getView());
    }

    function parkingMapClick(e) {
        Titanium.Analytics.featureEvent('parkingMap');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('parkingMap').getView());
    }

    function campusMapClick(e) {
        Titanium.Analytics.featureEvent('campusMap');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('campusMap').getView());
    }

} else {

    function peopleSearchAndroidClick(e) {
        Titanium.Analytics.featureEvent('peopleSearch');
        Alloy.createController('campusSearch', {
            peopleOrDeptUrl: "/directory/search/person/"
        }).getView().open();
    }

    function deptSearchAndroidClick(e) {
        Titanium.Analytics.featureEvent('departmentList');
        Alloy.createController('departmentList').getView().open();
        //Alloy.createController('campusSearch', { peopleOrDeptUrl: "/directory/search/dept/" }).getView().open();
    }

    function locationSearchAndroidClick(e) {
        Titanium.Analytics.featureEvent('locationSearch');
        Alloy.createController('locationSearch').getView().open();
    }

    function parkingMapAndroidClick(e) {
        Titanium.Analytics.featureEvent('parkingMap');
        Alloy.createController('parkingMap').getView().open();
    }

    function campusMapAndroidClick(e) {
        Titanium.Analytics.featureEvent('campusMap');
        Alloy.createController('campusMap').getView().open();
    }

}
