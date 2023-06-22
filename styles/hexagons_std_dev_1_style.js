var selectedCity = 'Linz'; // Set the selected city

// Define your cities object with the appropriate marks
var city = {
  'Linz': {
    marks: [19, 12, 9.5, 7, 4.5, 2, -0.5, -3],
    center: [14.3994, 48.2731],
    extent: [14.325966079558944, 48.1665606236224, 14.472833920441056, 48.3796393763776]
  }
};

// Define your color map and reverse it
var colorMap = ['rgba(0, 0, 255, 1.0)', 'rgba(0, 255, 255, 1.0)', 'rgba(0, 255, 0, 1.0)', 'rgba(255, 255, 0, 1.0)', 'rgba(255, 165, 0, 1.0)', 'rgba(255, 0, 0, 1.0)'].reverse();
var selectedTime = 'w_mean_18_19';

var style_hexagons_std_dev_1 = function(feature, resolution) {
    var value = feature.get(selectedTime); // get the value for the selected time
    var style;
    
    // Loop over the marks for the selected city
    for (var i = 0; i < city[selectedCity].marks.length; i++) {
      // If the value is greater or equal to the current mark
      if (value >= city[selectedCity].marks[i]) {
        // Create a new style with the appropriate color
        style = new ol.style.Style({
          fill: new ol.style.Fill({
            color: colorMap[i]
          }),
          stroke: new ol.style.Stroke({
            color: '#6e6e6e',
            width: 0.7
          })
        });
        break; // Exit the loop as we found our color
      }
    }
    
    return style;
};

document.getElementById('temp-select').addEventListener('change', function(e) {
  selectedTime = e.target.value;
  lyr_hexagons_std_dev_1.setStyle(style_hexagons_std_dev_1);

  lyr_hexagons_std_dev_1.changed(); // Update the layer when the time selection changes
});
