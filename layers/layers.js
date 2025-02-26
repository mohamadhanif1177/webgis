var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MERGEPA_1 = new ol.format.GeoJSON();
var features_MERGEPA_1 = format_MERGEPA_1.readFeatures(json_MERGEPA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MERGEPA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MERGEPA_1.addFeatures(features_MERGEPA_1);
var lyr_MERGEPA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MERGEPA_1, 
                style: style_MERGEPA_1,
                popuplayertitle: 'MERGE PA',
                interactive: true,
                title: '<img src="styles/legend/MERGEPA_1.png" /> MERGE PA'
            });
var format_MERGETANDASEMPADAN_2 = new ol.format.GeoJSON();
var features_MERGETANDASEMPADAN_2 = format_MERGETANDASEMPADAN_2.readFeatures(json_MERGETANDASEMPADAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MERGETANDASEMPADAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MERGETANDASEMPADAN_2.addFeatures(features_MERGETANDASEMPADAN_2);
var lyr_MERGETANDASEMPADAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MERGETANDASEMPADAN_2, 
                style: style_MERGETANDASEMPADAN_2,
                popuplayertitle: 'MERGE TANDA SEMPADAN',
                interactive: true,
                title: '<img src="styles/legend/MERGETANDASEMPADAN_2.png" /> MERGE TANDA SEMPADAN'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_MERGEPA_1.setVisible(true);lyr_MERGETANDASEMPADAN_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MERGEPA_1,lyr_MERGETANDASEMPADAN_2];
lyr_MERGEPA_1.set('fieldAliases', {'FID': 'FID', 'no_lot': 'no_lot', 'area': 'area', 'tsp — hakm': 'tsp — hakm', 'tsp — ha_1': 'tsp — ha_1', 'tsp — pemi': 'tsp — pemi', 'layer': 'layer', 'path': 'path', });
lyr_MERGETANDASEMPADAN_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'vertex_ind': 'vertex_ind', 'vertex_par': 'vertex_par', 'vertex_p_1': 'vertex_p_1', 'distance': 'distance', 'angle': 'angle', 'path': 'path', });
lyr_MERGEPA_1.set('fieldImages', {'FID': '', 'no_lot': '', 'area': '', 'tsp — hakm': '', 'tsp — ha_1': '', 'tsp — pemi': '', 'layer': '', 'path': '', });
lyr_MERGETANDASEMPADAN_2.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', 'vertex_ind': '', 'vertex_par': '', 'vertex_p_1': '', 'distance': '', 'angle': '', 'path': '', });
lyr_MERGEPA_1.set('fieldLabels', {'FID': 'no label', 'no_lot': 'no label', 'area': 'no label', 'tsp — hakm': 'no label', 'tsp — ha_1': 'no label', 'tsp — pemi': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_MERGETANDASEMPADAN_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'vertex_ind': 'no label', 'vertex_par': 'no label', 'vertex_p_1': 'no label', 'distance': 'no label', 'angle': 'no label', 'path': 'no label', });
lyr_MERGETANDASEMPADAN_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});