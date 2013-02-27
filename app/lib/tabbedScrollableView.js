exports.tabs = function(app, params) {

  // set
  var data = params.data || [],
    tabBarHeight = params.tabBarHeight || 36,
    width = params.width || Ti.Platform.displayCaps.platformWidth,
    images = {
      selected: '/images/buttonbar/button2_selected.png',
      unselected: '/images/buttonbar/button2_unselected_shadow.png',
      unselectedLS: '/images/buttonbar/button2_unselected_shadowL.png',
      unselectedRS: '/images/buttonbar/button2_unselected_shadowR.png'
    },
    font = params.font || {
      fontSize: 14,
      fontWeight: 'bold'
    },
    item, backgroundImage, tabView, tabLabel, scrollable, i;

  // Start creating the TabbedScrollableView
  var container = Ti.UI.createView();
  var tabbedBarView = Ti.UI.createView({
    top: 0,
    backgroundColor: params.backgroundColor || '#555',
    height: tabBarHeight
  });
  var tabbedBar = Ti.UI.createView({
    top: 0,
    backgroundColor: '#000',
    height: tabBarHeight,
    width: width
  });

  for(i = 0; i < data.length; i++) {
    item = data[i];

    // set the default state of the tab bar images
    if(i === 0) {
      backgroundImage = images.selected;
    } else if(i == 1) {
      backgroundImage = images.unselectedLS;
    } else {
      backgroundImage = images.unselected;
    }

    // create each tab bar button
    tabView = Ti.UI.createView({
      backgroundImage: backgroundImage,
      height: tabBarHeight,
      left: i * (width / data.length),
      right: width - ((parseInt(i) + 1) * (width / data.length)),
      index: i
    });
    tabLabel = Ti.UI.createLabel({
      text: item.title,
      textAlign: 'center',
      color: '#fff',
      height: 'auto',
      touchEnabled: false,
      font: font
    });

    // adjust images and scroll ScrollableView on tab bar clicks
    tabView.addEventListener('click', function(e) {
      var index = e.source.index;
      for(var j = 0; j < data.length; j++) {
        if(index == j) {
          data[j].tabView.backgroundImage = images.selected;
        } else if(index - 1 == j && data[index - 1]) {
          data[j].tabView.backgroundImage = images.unselectedRS;
        } else if(index + 1 == j && data[index + 1]) {
          data[j].tabView.backgroundImage = images.unselectedLS;
        } else {
          data[j].tabView.backgroundImage = images.unselected;
        }
      }

      scrollable.scrollToView(data[index].view);

      // provide ability to lazy load the tabs
      if(params.stagger) {
        if(data[index].start) {
          Ti.App.fireEvent(data[index].start);
        }
      }
    });
    // layout the tabbed scrollableview
    tabView.add(tabLabel);
    tabbedBar.add(tabView);
    item.tabView = tabView;
  }
  scrollable = Ti.UI.createScrollableView({
    showPagingControl: false,
    backgroundColor: '#FFF',
    top: tabBarHeight,
    views: (function() {
      var views = [];
      for(var j = 0; j < data.length; j++) {
        views.push(data[j].view);
      }
      return views;
    })()
  });
  //scrollable.addEventListener('scroll', function(e) {
  //  if(e.view) {
  //    data[e.currentPage].tabView.fireEvent('click');
  //  }
  //});
  Ti.Gesture.addEventListener('orientationchange', function(ev) {
    var newWidth = Ti.Platform.displayCaps.platformWidth;
    tabbedBar.width = newWidth;


    for(var i = 0; i < data.length; i++) {
      data[i].tabView.left = i * (newWidth / data.length);
      data[i].tabView.right = newWidth - ((parseInt(i) + 1) * (newWidth / data.length));
    }
    if(app.isLandscape(ev.orientation)) {
      tabbedBar.top = 10;
    } else {
      tabbedBar.top = 0;
    }
  });


  container.add(scrollable);
  tabbedBarView.add(tabbedBar);
  container.add(tabbedBarView);

  return container;
};
