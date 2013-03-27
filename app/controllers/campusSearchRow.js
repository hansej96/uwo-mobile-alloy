var args = arguments[0] || {};
var row = [];
row.person = args.item;

$.row.title = row.person.fullName;
//$.person.text = row.person.fullName;
//$.row.filter = $.person.text;
//$.row.filter = row.person.fullName;

if (OS_IOS || OS_MOBILEWEB) {
    function openDetail(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('campusSearchDetail', { person: row.person }).getView());
    }

} else {
    function openDetail(e) {
        Alloy.createController('campusSearchDetail', { person: row.person }).getView().open();
    }

}
