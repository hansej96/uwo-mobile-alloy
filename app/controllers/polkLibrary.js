if (OS_IOS || OS_MOBILEWEB) {
    function availableComputersClick(e) {
        Ti.Platform.openURL("http://www.uwosh.edu/library/m/computer_availability_page.php");
    }

    function polkHoursClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('polkHours').getView());
    }

    function findBooksVideosClick(e) {
        Ti.Platform.openURL("http://oshlib.wisconsin.edu/vwebv/searchBasic?sk=mobile");
    }

    function groupFinderClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('groupFinder').getView());
    }

} else {
    function availableComputersClick(e) {
        Ti.Platform.openURL("http://www.uwosh.edu/library/m/computer_availability_page.php");
    }

    function polkHoursClick(e) {
        Alloy.createController('polkHours').getView().open();
    }

    function findBooksVideosClick(e) {
        Ti.Platform.openURL("http://oshlib.wisconsin.edu/vwebv/searchBasic?sk=mobile");
    }

    function groupFinderClick(e) {
        Alloy.createController('groupFinder').getView().open();
    }

}