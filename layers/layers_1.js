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
  var lyr_hexagons_std_dev_1 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_hexagons_std_dev_0,
    style: style_hexagons_std_dev_1,
    interactive: true,
    title: 'hexagons_std_dev<br />' +
        '<div style="background-color:' + colorMap[5] + '"> >= ' + city[selectedCity].marks[5] + '</div>' +
        '<div style="background-color:' + colorMap[4] + '"> >= ' + city[selectedCity].marks[4] + '</div>' +
        '<div style="background-color:' + colorMap[3] + '"> >= ' + city[selectedCity].marks[3] + '</div>' +
        '<div style="background-color:' + colorMap[2] + '"> >= ' + city[selectedCity].marks[2] + '</div>' +
        '<div style="background-color:' + colorMap[1] + '"> >= ' + city[selectedCity].marks[1] + '</div>' +
        '<div style="background-color:' + colorMap[0] + '"> < ' + city[selectedCity].marks[0] + '</div>'
});
lyr_hexagons_std_dev_1.setVisible(true);

  var layersList = [baseMapLayer,lyr_hexagons_std_dev_1];
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
          center: ol.proj.fromLonLat([14.35611, 48.35639]), // Transform from EPSG:4326 to EPSG:3857 
          zoom: 12 // for example
      })
  });


var layerSwitcher = new ol.control.LayerSwitcher({
    tipLabel: 'Layer Switcher' // Optional label for button
});
map.addControl(layerSwitcher);
  

