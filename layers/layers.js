var baseMapLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
  });
  
  var wms_layers = [];
  
  var format_hexagons_std_dev_0 = new ol.format.GeoJSON();
  var features_hexagons_std_dev_0 = format_hexagons_std_dev_0.readFeatures(json_hexagons_std_dev_0, 
              {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
  var jsonSource_hexagons_std_dev_0 = new ol.source.Vector({
      attributions: ' ',
  });
  jsonSource_hexagons_std_dev_0.addFeatures(features_hexagons_std_dev_0);
  var lyr_hexagons_std_dev_0 = new ol.layer.Vector({
                  declutter: true,
                  source:jsonSource_hexagons_std_dev_0, 
                  style: style_hexagons_std_dev_0,
                  interactive: false,
      title: 'Anomaly C°<br />\
      <img src="styles/legend/hexagons_std_dev_0_0.png" /> 0,00 - 0,50<br />\
      <img src="styles/legend/hexagons_std_dev_0_1.png" /> 0,51 - 0,80<br />\
      <img src="styles/legend/hexagons_std_dev_0_2.png" /> 0,81 - 1,25<br />\
      <img src="styles/legend/hexagons_std_dev_0_3.png" /> 1,26 - 2,00<br />\
      <img src="styles/legend/hexagons_std_dev_0_4.png" /> 2,01 - 5,00<br />'
          });

  lyr_hexagons_std_dev_0.setVisible(false);


  var format_hexagons_std_dev_1 = new ol.format.GeoJSON();
  var features_hexagons_std_dev_1 = format_hexagons_std_dev_1.readFeatures(json_hexagons_std_dev_1, 
              {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
  var jsonSource_hexagons_std_dev_1 = new ol.source.Vector({
      attributions: ' ',
  });
  jsonSource_hexagons_std_dev_1.addFeatures(features_hexagons_std_dev_1);


var lyr_hexagons_std_dev_1 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_hexagons_std_dev_1,
    style: style_hexagons_std_dev_1,
    interactive: false,
      title: 'LST C°<br />' +
    '<div style="background-color:' + colorMap[5] + '"> >= ' + city[selectedCity].marks[5] + '</div>' +
    '<div style="background-color:' + colorMap[4] + '"> >= ' + city[selectedCity].marks[4] + '</div>' +
    '<div style="background-color:' + colorMap[3] + '"> >= ' + city[selectedCity].marks[3] + '</div>' +
    '<div style="background-color:' + colorMap[2] + '"> >= ' + city[selectedCity].marks[2] + '</div>' +
    '<div style="background-color:' + colorMap[1] + '"> >= ' + city[selectedCity].marks[1] + '</div>' +
    '<div style="background-color:' + colorMap[0] + '"> < ' + city[selectedCity].marks[0] + '</div>'
});





  var layersList = [baseMapLayer,lyr_hexagons_std_dev_1,lyr_hexagons_std_dev_0];
  lyr_hexagons_std_dev_0.set('fieldAliases', {'w_mean_18_19': 'w_mean_18_19', 'w_mean_19_20': 'w_mean_19_20', 'w_mean_20_21': 'w_mean_20_21', 'w_mean_21_22': 'w_mean_21_22', 'w_mean_22_23': 'w_mean_22_23', 'std_dev_w_mean_18_19': 'std_dev_w_mean_18_19', 'std_dev_w_mean_19_20': 'std_dev_w_mean_19_20', 'std_dev_w_mean_20_21': 'std_dev_w_mean_20_21', 'std_dev_w_mean_21_22': 'std_dev_w_mean_21_22', 'std_dev_w_mean_22_23': 'std_dev_w_mean_22_23', });
  lyr_hexagons_std_dev_0.set('fieldImages', {'w_mean_18_19': 'TextEdit', 'w_mean_19_20': 'TextEdit', 'w_mean_20_21': 'TextEdit', 'w_mean_21_22': 'TextEdit', 'w_mean_22_23': 'TextEdit', 'std_dev_w_mean_18_19': 'TextEdit', 'std_dev_w_mean_19_20': 'TextEdit', 'std_dev_w_mean_20_21': 'TextEdit', 'std_dev_w_mean_21_22': 'TextEdit', 'std_dev_w_mean_22_23': 'TextEdit', });
  lyr_hexagons_std_dev_0.set('fieldLabels', {'w_mean_18_19': 'no label', 'w_mean_19_20': 'no label', 'w_mean_20_21': 'no label', 'w_mean_21_22': 'no label', 'w_mean_22_23': 'no label', 'std_dev_w_mean_18_19': 'no label', 'std_dev_w_mean_19_20': 'no label', 'std_dev_w_mean_20_21': 'no label', 'std_dev_w_mean_21_22': 'no label', 'std_dev_w_mean_22_23': 'no label', });
  lyr_hexagons_std_dev_0.on('precompose', function(evt) {
      evt.context.globalCompositeOperation = 'normal';
  });


  lyr_hexagons_std_dev_1.set('fieldAliases', {'w_mean_18_19': 'w_mean_18_19', 'w_mean_19_20': 'w_mean_19_20', 'w_mean_20_21': 'w_mean_20_21', 'w_mean_21_22': 'w_mean_21_22', 'w_mean_22_23': 'w_mean_22_23', 'std_dev_w_mean_18_19': 'std_dev_w_mean_18_19', 'std_dev_w_mean_19_20': 'std_dev_w_mean_19_20', 'std_dev_w_mean_20_21': 'std_dev_w_mean_20_21', 'std_dev_w_mean_21_22': 'std_dev_w_mean_21_22', 'std_dev_w_mean_22_23': 'std_dev_w_mean_22_23', });
  lyr_hexagons_std_dev_1.set('fieldImages', {'w_mean_18_19': 'TextEdit', 'w_mean_19_20': 'TextEdit', 'w_mean_20_21': 'TextEdit', 'w_mean_21_22': 'TextEdit', 'w_mean_22_23': 'TextEdit', 'std_dev_w_mean_18_19': 'TextEdit', 'std_dev_w_mean_19_20': 'TextEdit', 'std_dev_w_mean_20_21': 'TextEdit', 'std_dev_w_mean_21_22': 'TextEdit', 'std_dev_w_mean_22_23': 'TextEdit', });
  lyr_hexagons_std_dev_1.set('fieldLabels', {'w_mean_18_19': 'no label', 'w_mean_19_20': 'no label', 'w_mean_20_21': 'no label', 'w_mean_21_22': 'no label', 'w_mean_22_23': 'no label', 'std_dev_w_mean_18_19': 'no label', 'std_dev_w_mean_19_20': 'no label', 'std_dev_w_mean_20_21': 'no label', 'std_dev_w_mean_21_22': 'no label', 'std_dev_w_mean_22_23': 'no label', });
  lyr_hexagons_std_dev_1.on('precompose', function(evt) {
      evt.context.globalCompositeOperation = 'normal';
  });
  
  var map = new ol.Map({
      target: 'map',
      layers: layersList,
      view: new ol.View({
          center: ol.proj.fromLonLat([14.37611, 48.27639]), // Transform from EPSG:4326 to EPSG:3857 
          zoom: 12 // for example
      })
  });
  

  var layerSwitcher = new ol.control.LayerSwitcher({
    tipLabel: 'Layer Switcher' // Optional label for button
});




document.addEventListener("DOMContentLoaded", function(event) {
    // get the dropdown element
    var anomalySelect = document.getElementById('time-select');

    // set the layer to invisible initially
    lyr_hexagons_std_dev_0.setVisible(false);

    // add event listener for 'change' event
    anomalySelect.addEventListener('change', function(e) {
        // if any option is selected, show the layer
        if (anomalySelect.selectedIndex >= 0) {
            lyr_hexagons_std_dev_0.setVisible(true);
        }
    });
});




document.addEventListener("DOMContentLoaded", function(event) { 
    // DOM is ready
    var timeSelect = document.getElementById('time-select');
    var tempSelect = document.getElementById('temp-select');
    var sliderContainer = document.getElementById('slider-container');
    
    function handleTimeSelectChange() {
        var selectedIndex = timeSelect.selectedIndex;
        // Update layer visibility based on selected index
        // assuming layers are in the same order as select options
        // and there's a 1-1 correspondence
        for (var i = 0; i < wms_layers.length; i++) {
            wms_layers[i].setVisible(i === selectedIndex);
        }

        // Show the slider when any option is selected
        sliderContainer.style.display = 'block';
    }

    function handleTempSelectChange() {
        var selectedIndex = tempSelect.selectedIndex;
        // Update layer visibility based on selected index
        // assuming layers are in the same order as select options
        // and there's a 1-1 correspondence
        for (var i = 0; i < wms_layers.length; i++) {
            wms_layers[i].setVisible(i === selectedIndex);
        }
    }

    timeSelect.addEventListener('change', handleTimeSelectChange);
    tempSelect.addEventListener('change', handleTempSelectChange);
});



  


map.addControl(layerSwitcher);


  