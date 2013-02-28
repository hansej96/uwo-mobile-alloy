/*
 * Header Row UI component
 */

function HeaderRow(title, color) {

  var headerRow = Ti.UI.createTableViewRow({
    classname: 'header_row',
    height: 36,
    backgroundColor: (color) ? color : '#D79A27',
    touchEnabled: false
  });
  var headerLabel = Ti.UI.createLabel({
    text: title,
    color: '#fff',
    font: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    left: 10,
    touchEnabled: false
  });
  headerRow.add(headerLabel);

  return headerRow;
}

module.exports = HeaderRow;
