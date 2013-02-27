function Twitter(app, params) {

    //load dependancies
    var datetime = require("dateTime"),
        TabbedScrollableView = require("tabbedScrollableView");


    // set variables
    var tweetCount = 50,
        twitterTimeout = 11000,
        firstRun = true,
        ai = new ActivityIndicator();


    function createTwitterTable(search) {
        return Ti.UI.createTableView({
            height : '100%',
            width : '100%',
            viewTitle : search
        });
    }


    var twitterWindow = Titanium.UI.createWindow({
        backgroundColor : '#ffffff',
        barColor: '#414444',
        fullscreen : false,
        navBarHidden : false,
        id : 'twitterWindow',
        title : 'Twitter'
    });

    var data = [{
        title : 'uwoshkosh',
        view : createTwitterTable('@uwoshkosh'),
        url : 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=uwoshkosh&count=' + tweetCount,
        isSearch : false
    }, {
        title : 'UWO Today',
        view : createTwitterTable('UWO Today'),
        url : 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=UWOshkoshToday&count=' + tweetCount,
        isSearch : false
    }, {
        title : 'UWO Engage',
        view : createTwitterTable('UWOshkoshEngage'),
        url : 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=UWOshkoshEngage&count=' + tweetCount,
        isSearch : false
    }];
    var loadedViews = [];

    twitterWindow.add(new TabbedScrollableView(app,{data : data}));

    // add a click handler to all twitter tables
    for(var index in data) {
        if(data[index]) {
            var item = data[index];
            item.view.addEventListener('click', function(e) {
                var options = {
                    title : e.rowData.user,
                    text : e.rowData.tweet,
                    name : e.rowData.user,
                    date : e.rowData.date
                };
                app.loadPage('TwitterDetail', options);
            });
        }
    }

    // Using the parsing method shown https://gist.github.com/819929
    var tweetWebJs = "document.body.addEventListener('touchmove', function(e) { e.preventDefault();}, false);";
    var baseHTMLStart = '<html><head></head><body>', baseHTMLEnd = '<script type="text/javascript">' + tweetWebJs + '</script></body></html>';

    // set this to true if you are only tracking one user
    var single = true;


    function getTweets(entry) {
        // create table view data object
        var tvData = [];

        var xhr = Ti.Network.createHTTPClient();
        xhr.timeout = twitterTimeout;
        xhr.open("GET", entry.url);

        xhr.onerror = function() {
            loadedViews.push(entry.view);
            if(loadedViews.length >= data.length) {
                loadedViews = [];
                ai.hideModal();
            }
        };

        xhr.onload = function() {
            try {
                var json = JSON.parse(this.responseText);
                var tweets = entry.isSearch ? json.results : json;
                for(var c = 0; c < tweets.length; c++) {
                    var tweet = tweets[c].text;
                    var user = entry.isSearch ? tweets[c].from_user : tweets[c].user.screen_name;
                    var avatarWidth = 48;
                    var avatar;
                    if(single === true && !entry.isSearch) {
                        avatar = tweets[1].user.profile_image_url;
                    } else {
                        avatar = entry.isSearch ? tweets[c].profile_image_url : tweets[c].user.profile_image_url;

                    }

                    var created_at = datetime.getTwitterInterval(tweets[c].created_at);
                    var bgcolor = (c % 2) === 0 ? '#fff' : '#eee';

                    var row = Ti.UI.createTableViewRow({
                        hasChild : true,
                        className : 'twitterRow',
                        backgroundColor : bgcolor,
                        height : 'auto',
                        date : created_at,
                        user : user,
                        tweet : tweet
                    });

                    // Create a vertical layout view to hold all the info labels and images for each tweet
                    var post_view = Ti.UI.createView({
                        height : 15,
                        left : 64,
                        top : 10,
                        right : 5
                    });

                    var av = Ti.UI.createImageView({
                        image : avatar,
                        left : 10,
                        top : 10,
                        height : 48,
                        width : avatarWidth
                    });
                    row.add(av);

                    var user_label = Ti.UI.createLabel({
                        text : user,
                        left : 0,
                        width : 120,
                        top : -3,
                        height : 20,
                        textAlign : 'left',
                        color : '#444444',
                        font : {
                            fontFamily : 'Trebuchet MS',
                            fontSize : 14,
                            fontWeight : 'bold'
                        }
                    });
                    post_view.add(user_label);

                    var date_label = Ti.UI.createLabel({
                        text : created_at,
                        right : 20,
                        top : -2,
                        height : 20,
                        textAlign : 'right',
                        width : 110,
                        color : '#444444',
                        font : {
                            fontFamily : 'Trebuchet MS',
                            fontSize : 12
                        }
                    });
                    post_view.add(date_label);
                    row.add(post_view);

                    var tweet_text = Ti.UI.createLabel({
                        text : tweet,
                        left : 64,
                        top : 30,
                        right : 20,
                        color : '#333',
                        height : 'auto',
                        textAlign : 'left',
                        bottom : 10,
                        font : {
                            fontSize : 14
                        }
                    });

                    // Add the tweet to the view
                    row.add(tweet_text);
                    tvData[c] = row;
                }

                entry.view.setData(tvData);
                loadedViews.push(entry.view);
                if(loadedViews.length >= data.length) {
                    loadedViews = [];
                    ai.hideModal();
                }
            } catch (e) {
                Ti.API.info(e);
            }
        };
        // Get the data
        xhr.send();
    }

    var reloadAllTweets = function() {
        ai.showModal('Loading latest tweets...', twitterTimeout, 'Twitter timed out. All streams may not have updated.');
        for(var i = 0; i < data.length; i++) {
            getTweets(data[i]);
        }
    }
    // Get the tweets for 'twitter_name'
    if(Ti.Network.online) {
        twitterWindow.addEventListener('open', function(e) {
            if(firstRun) {
                firstRun = false;
                reloadAllTweets();
            }
        });
        if(app.isAndroid()) {
            twitterWindow.activity.onCreateOptionsMenu = function(e) {
                var menuitem = e.menu.add({
                    title : 'Refresh Tweets'
                });
                menuitem.addEventListener('click', function(e) {
                    reloadAllTweets();
                });
            };
        } else {
            var button = Ti.UI.createButton({
                systemButton : Ti.UI.iPhone.SystemButton.REFRESH
            });
            button.addEventListener('click', function(e) {
                reloadAllTweets();
            });
            twitterWindow.rightNavButton = button;
        }
    } else {
        alert('No network connection detected.');
    }

    return twitterWindow;
}
