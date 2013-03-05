var webservices = require("libraryWS"),
    header = require("HeaderRow");

function resources(json, entry) {
    var data = [];
    var labs = json.computers;

    var pcHeader = new header.HeaderRow("Available Computers");
    data.push(pcHeader);

    for(var i=0; i < json.computers.length; i++) {
        var labRow = Ti.UI.createTableViewRow();
        var labName = Titanium.UI.createLabel({
            text:labs[i].name,
            font:{
                fontSize:18,
                fontWeight:'bold'
            },
            color: '#414444',
            left:10,
            textAlign: 'left'
        });
        var labPcs = Titanium.UI.createLabel({
            text:labs[i].available_count,
            font:{fontSize:18},
            color: '#414444',
            right:10,
            textAlign: 'right'
        });

        labRow.add(labName);
        labRow.add(labPcs);
        data.push(labRow);
    }

    var arHeaderRow = Ti.UI.createTableViewRow({
        backgroundColor: "#D79A27"
    });
    var arHeader = Titanium.UI.createLabel({
        text: "Additional Resources",
        left: 10,
        color: "#FFF",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        }
    });
    arHeaderRow.add(arHeader);
    data.push(arHeaderRow);

    var ar = json.resources;
    for (var j=0; j < ar.length; j++) {
        var arRow = Ti.UI.createTableViewRow();
        var arName = Titanium.UI.createLabel({
            text:ar[j].name,
            font:{
                fontSize:18,
                fontWeight:'bold'
            },
            color: '#414444',
            left:10,
            textAlign: 'left'
        });
        var arNum = Titanium.UI.createLabel({
            text:ar[j].available_count,
            font:{fontSize:18},
            color: '#414444',
            right:10,
            textAlign: 'right'
        });

        arRow.add(arName);
        arRow.add(arNum);
        data.push(arRow);
    }
    $.groupFinderTable.setData(data);
}

function getLibrary(entry) {
    webservices.resources({
        success: resources,
        onerror: onerror,
        entry: entry
    });
}

function onerror() {
    alert("There was an error retrieving the available computers");
}

if(Ti.Network.online) {
    getLibrary("Available Computers");
} else {
    alert("No network connection detected");
}