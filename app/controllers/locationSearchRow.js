var args = arguments[0] || {};
var row = [];
row.location = args.item;

$.row.title = row.location.title;
//$.title.text = row.location.title;
//$.row.filter = row.location.title;

if (OS_IOS || OS_MOBILEWEB) {
    function openDetail(e) {
        Titanium.Analytics.featureEvent('locationSearchDetail');
        Alloy.CFG.navgroup.open(Alloy.createController('locationSearchDetail', {
            location: row.location
        }).getView());
    }

} else {
    function openDetail(e) {
        Titanium.Analytics.featureEvent('locationSearchDetail');
        Alloy.createController('locationSearchDetail', {
            location: row.location
        }).getView().open();
    }

}
