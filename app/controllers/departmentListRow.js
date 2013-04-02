var args = arguments[0] || {};
var row = [];
row.department = args.item;


$.department.text = row.department.dept;

if (OS_IOS || OS_MOBILEWEB) {

    function departmentClick(e) {
        Titanium.Analytics.featureEvent('departmentPeopleList');
        Alloy.CFG.navgroup.open(Alloy.createController('departmentPeopleList', {
            peopleOrDeptUrl: $.department.text
        }).getView());
    }

} else {

    function departmentClick(e) {
        Titanium.Analytics.featureEvent('departmentPeopleList');
        Alloy.createController('departmentPeopleList', {
            peopleOrDeptUrl: $.department.text
        }).getView().open();
    }

}
