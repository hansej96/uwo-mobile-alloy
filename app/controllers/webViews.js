var args = arguments[0] || {};

if (OS_IOS || OS_MOBILEWEB) {
    var button = Ti.UI.createButton({ title: 'Browser'});
    button.addEventListener('click', function(e) {
        Titanium.Analytics.featureEvent('openInBrowser');
        Ti.Platform.openURL(args.url);
    });
    $.webViewWindow.rightNavButton = button;
}

$.web.url = args.url;
$.webViewWindow.title = args.title;
