if (OS_IOS || OS_MOBILEWEB) {
    function availableComputersClick(e) {
        Titanium.Analytics.featureEvent('availableComputers');
        Ti.Platform.openURL("http://www.uwosh.edu/library/m/computer_availability_page.php");
    }

    function polkHoursClick(e) {
        Titanium.Analytics.featureEvent('polkHours');
        Alloy.CFG.navgroup.open(Alloy.createController('polkHours').getView());
    }

    function findBooksVideosClick(e) {
        Titanium.Analytics.featureEvent('findBooksVideos');
        Ti.Platform.openURL("http://oshlib.wisconsin.edu/vwebv/searchBasic?sk=mobile");
    }

    function groupFinderClick(e) {
        Titanium.Analytics.featureEvent('groupFinder');
        Alloy.CFG.navgroup.open(Alloy.createController('groupFinder').getView());
    }

} else {
    function availableComputersClick(e) {
        Titanium.Analytics.featureEvent('availableComputers');
        Ti.Platform.openURL("http://www.uwosh.edu/library/m/computer_availability_page.php");
    }

    function polkHoursClick(e) {
        Titanium.Analytics.featureEvent('polkHours');
        Alloy.createController('polkHours').getView().open();
    }

    function findBooksVideosClick(e) {
        Titanium.Analytics.featureEvent('findBooksVideos');
        Ti.Platform.openURL("http://oshlib.wisconsin.edu/vwebv/searchBasic?sk=mobile");
    }

    function groupFinderClick(e) {
        Titanium.Analytics.featureEvent('groupFinder');
        Alloy.createController('groupFinder').getView().open();
    }

}
