var transparency = 0; // Start with fully opaque layer
var selectedTime_0 = 'w_mean_18_19'; // Initial selected time

var style_hexagons_std_dev_0 = function(feature, resolution) {
    var value = feature.get(selectedTime_0);
    var color = 'rgba(255,0,0,1.0)'; // Default color

    var sliderMax = parseFloat(document.getElementById('value-slider').max);
    var sliderValue = parseFloat(document.getElementById('value-slider').value);
    var invertedThreshold = (sliderMax - sliderValue) / sliderMax * 5; // scale it according to the data (assuming 5 as max data value)

    if (value >= 0.020082 && value <= 0.455042) {
        color = 'rgba(255,255,255,1.0)';
    } else if (value >= 0.455042 && value <= 0.787902) {
        color = 'rgba(255,191,191,1.0)';
    } else if (value >= 0.787902 && value <= 1.227275) {
        color = 'rgba(255,128,128,1.0)';
    } else if (value >= 1.227275 && value <= 1.937718) {
        color = 'rgba(255,64,64,1.0)';
    } else if (value >= 1.937718 && value <= 5) {
        color = 'rgba(255,0,0,1.0)';
    }

    if (value < invertedThreshold) {
        color = color.replace(/[^,]+(?=\))/, 0); // Make the polygon transparent
    }

    var style = [new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),
        fill: new ol.style.Fill({color: color}),
        // other style properties (text, etc)...
    })];

    return style;
};

document.getElementById('value-slider').addEventListener('input', function(e) {
    lyr_hexagons_std_dev_0.changed(); // Signal to OpenLayers that the layer style has changed
});

var timeSelect = document.getElementById('time-select');
timeSelect.addEventListener('change', function(e) {
    selectedTime_0 = e.target.value;
    lyr_hexagons_std_dev_0.setStyle(style_hexagons_std_dev_0);
    lyr_hexagons_std_dev_0.changed(); // Signal to OpenLayers that the layer style has changed
});



