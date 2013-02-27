var args = arguments[0] || {};

$.twitterTimeline.url = "https://twitter.com/" + args.twitterUser;
$.twitterWebView.title = args.twitterUser;