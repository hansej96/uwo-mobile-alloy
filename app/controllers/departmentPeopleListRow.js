var args = arguments[0] || {};
var row = [];
row.person = args.item;

$.person.text = row.person.fullName;

if (OS_IOS || OS_MOBILEWEB) {
    function openDetail(e) {
        Titanium.Analytics.featureEvent('campusSearchDetail');
        Alloy.CFG.navgroup.open(Alloy.createController('campusSearchDetail', {
            person: row.person
        }).getView());
    }

} else {
    function openDetail(e) {
        Titanium.Analytics.featureEvent('campusSearchDetail');
        Alloy.createController('campusSearchDetail', {
            person: row.person
        }).getView().open();
    }

}
