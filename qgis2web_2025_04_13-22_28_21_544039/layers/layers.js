var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Communesagglo_1 = new ol.format.GeoJSON();
var features_Communesagglo_1 = format_Communesagglo_1.readFeatures(json_Communesagglo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communesagglo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communesagglo_1.addFeatures(features_Communesagglo_1);
var lyr_Communesagglo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communesagglo_1, 
                style: style_Communesagglo_1,
                popuplayertitle: 'Communes agglo',
                interactive: true,
                title: '<img src="styles/legend/Communesagglo_1.png" /> Communes agglo'
            });
var format_Faibledensit_2 = new ol.format.GeoJSON();
var features_Faibledensit_2 = format_Faibledensit_2.readFeatures(json_Faibledensit_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Faibledensit_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Faibledensit_2.addFeatures(features_Faibledensit_2);
var lyr_Faibledensit_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Faibledensit_2, 
                style: style_Faibledensit_2,
                popuplayertitle: 'Faible densité',
                interactive: true,
    title: 'Faible densité<br />\
    <img src="styles/legend/Faibledensit_2_0.png" /> 1 - 4<br />\
    <img src="styles/legend/Faibledensit_2_1.png" /> 4 - 7<br />\
    <img src="styles/legend/Faibledensit_2_2.png" /> 7 - 10<br />\
    <img src="styles/legend/Faibledensit_2_3.png" /> 10 - 13<br />' });
var format_individueldense_3 = new ol.format.GeoJSON();
var features_individueldense_3 = format_individueldense_3.readFeatures(json_individueldense_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_individueldense_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_individueldense_3.addFeatures(features_individueldense_3);
var lyr_individueldense_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_individueldense_3, 
                style: style_individueldense_3,
                popuplayertitle: 'individuel dense',
                interactive: true,
    title: 'individuel dense<br />\
    <img src="styles/legend/individueldense_3_0.png" /> 1 - 8<br />\
    <img src="styles/legend/individueldense_3_1.png" /> 8 - 15<br />\
    <img src="styles/legend/individueldense_3_2.png" /> 15 - 22<br />' });
var format_trespeudense_4 = new ol.format.GeoJSON();
var features_trespeudense_4 = format_trespeudense_4.readFeatures(json_trespeudense_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trespeudense_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trespeudense_4.addFeatures(features_trespeudense_4);
var lyr_trespeudense_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_trespeudense_4, 
                style: style_trespeudense_4,
                popuplayertitle: 'tres peu dense',
                interactive: true,
    title: 'tres peu dense<br />\
    <img src="styles/legend/trespeudense_4_0.png" /> 1 - 2<br />' });
var format_btiforteemprise_5 = new ol.format.GeoJSON();
var features_btiforteemprise_5 = format_btiforteemprise_5.readFeatures(json_btiforteemprise_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_btiforteemprise_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_btiforteemprise_5.addFeatures(features_btiforteemprise_5);
var lyr_btiforteemprise_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_btiforteemprise_5, 
                style: style_btiforteemprise_5,
                popuplayertitle: 'bâti forte emprise',
                interactive: true,
    title: 'bâti forte emprise<br />\
    <img src="styles/legend/btiforteemprise_5_0.png" /> 1 - 3<br />\
    <img src="styles/legend/btiforteemprise_5_1.png" /> 3 - 5<br />\
    <img src="styles/legend/btiforteemprise_5_2.png" /> 5 - 7<br />\
    <img src="styles/legend/btiforteemprise_5_3.png" /> 7 - 9<br />\
    <img src="styles/legend/btiforteemprise_5_4.png" /> 9 - 11<br />' });
var format_Centreurbain_6 = new ol.format.GeoJSON();
var features_Centreurbain_6 = format_Centreurbain_6.readFeatures(json_Centreurbain_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centreurbain_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centreurbain_6.addFeatures(features_Centreurbain_6);
var lyr_Centreurbain_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centreurbain_6, 
                style: style_Centreurbain_6,
                popuplayertitle: 'Centre urbain',
                interactive: true,
    title: 'Centre urbain<br />\
    <img src="styles/legend/Centreurbain_6_0.png" /> 1 - 5<br />\
    <img src="styles/legend/Centreurbain_6_1.png" /> 5 - 9<br />\
    <img src="styles/legend/Centreurbain_6_2.png" /> 9 - 13<br />\
    <img src="styles/legend/Centreurbain_6_3.png" /> 13 - 17<br />\
    <img src="styles/legend/Centreurbain_6_4.png" /> 17 - 21<br />' });
var format_Mixteetdense_7 = new ol.format.GeoJSON();
var features_Mixteetdense_7 = format_Mixteetdense_7.readFeatures(json_Mixteetdense_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mixteetdense_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mixteetdense_7.addFeatures(features_Mixteetdense_7);
var lyr_Mixteetdense_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mixteetdense_7, 
                style: style_Mixteetdense_7,
                popuplayertitle: 'Mixte et dense',
                interactive: true,
    title: 'Mixte et dense<br />\
    <img src="styles/legend/Mixteetdense_7_0.png" /> 1 - 6<br />\
    <img src="styles/legend/Mixteetdense_7_1.png" /> 6 - 11<br />\
    <img src="styles/legend/Mixteetdense_7_2.png" /> 11 - 16<br />\
    <img src="styles/legend/Mixteetdense_7_3.png" /> 16 - 21<br />\
    <img src="styles/legend/Mixteetdense_7_4.png" /> 21 - 26<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Communesagglo_1.setVisible(true);lyr_Faibledensit_2.setVisible(true);lyr_individueldense_3.setVisible(true);lyr_trespeudense_4.setVisible(true);lyr_btiforteemprise_5.setVisible(true);lyr_Centreurbain_6.setVisible(true);lyr_Mixteetdense_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Communesagglo_1,lyr_Faibledensit_2,lyr_individueldense_3,lyr_trespeudense_4,lyr_btiforteemprise_5,lyr_Centreurbain_6,lyr_Mixteetdense_7];
lyr_Communesagglo_1.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', });
lyr_Faibledensit_2.set('fieldAliases', {'fid': 'fid', '% veg': '% veg', 'nb ecoles': 'nb ecoles', 'dens pop': 'dens pop', 'siren': 'siren', '6 classes': '6 classes', 'velos': 'velos', 'Magasins': 'Magasins', 'Médical': 'Médical', 'Loisirs': 'Loisirs', });
lyr_individueldense_3.set('fieldAliases', {'fid': 'fid', '% veg': '% veg', 'nb ecoles': 'nb ecoles', 'dens pop': 'dens pop', 'siren': 'siren', '6 classes': '6 classes', 'velos': 'velos', 'Magasins': 'Magasins', 'Médical': 'Médical', 'Loisirs': 'Loisirs', });
lyr_trespeudense_4.set('fieldAliases', {'fid': 'fid', '% veg': '% veg', 'nb ecoles': 'nb ecoles', 'dens pop': 'dens pop', 'siren': 'siren', '6 classes': '6 classes', 'velos': 'velos', 'Magasins': 'Magasins', 'Médical': 'Médical', 'Loisirs': 'Loisirs', });
lyr_btiforteemprise_5.set('fieldAliases', {'fid': 'fid', '% veg': '% veg', 'nb ecoles': 'nb ecoles', 'dens pop': 'dens pop', 'siren': 'siren', '6 classes': '6 classes', 'velos': 'velos', 'Magasins': 'Magasins', 'Médical': 'Médical', 'Loisirs': 'Loisirs', });
lyr_Centreurbain_6.set('fieldAliases', {'fid': 'fid', '% veg': '% veg', 'nb ecoles': 'nb ecoles', 'dens pop': 'dens pop', 'siren': 'siren', '6 classes': '6 classes', 'velos': 'velos', 'Magasins': 'Magasins', 'Médical': 'Médical', 'Loisirs': 'Loisirs', });
lyr_Mixteetdense_7.set('fieldAliases', {'fid': 'fid', '% veg': '% veg', 'nb ecoles': 'nb ecoles', 'dens pop': 'dens pop', 'siren': 'siren', '6 classes': '6 classes', 'velos': 'velos', 'Magasins': 'Magasins', 'Médical': 'Médical', 'Loisirs': 'Loisirs', });
lyr_Communesagglo_1.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', });
lyr_Faibledensit_2.set('fieldImages', {'fid': 'TextEdit', '% veg': 'TextEdit', 'nb ecoles': 'TextEdit', 'dens pop': 'TextEdit', 'siren': 'TextEdit', '6 classes': 'TextEdit', 'velos': 'TextEdit', 'Magasins': 'TextEdit', 'Médical': 'TextEdit', 'Loisirs': 'TextEdit', });
lyr_individueldense_3.set('fieldImages', {'fid': 'TextEdit', '% veg': 'TextEdit', 'nb ecoles': 'TextEdit', 'dens pop': 'TextEdit', 'siren': 'TextEdit', '6 classes': 'TextEdit', 'velos': 'TextEdit', 'Magasins': 'TextEdit', 'Médical': 'TextEdit', 'Loisirs': 'TextEdit', });
lyr_trespeudense_4.set('fieldImages', {'fid': 'TextEdit', '% veg': 'TextEdit', 'nb ecoles': 'TextEdit', 'dens pop': 'TextEdit', 'siren': 'TextEdit', '6 classes': 'TextEdit', 'velos': 'TextEdit', 'Magasins': 'TextEdit', 'Médical': 'TextEdit', 'Loisirs': 'TextEdit', });
lyr_btiforteemprise_5.set('fieldImages', {'fid': 'TextEdit', '% veg': 'TextEdit', 'nb ecoles': 'TextEdit', 'dens pop': 'TextEdit', 'siren': 'TextEdit', '6 classes': 'TextEdit', 'velos': 'TextEdit', 'Magasins': 'TextEdit', 'Médical': 'TextEdit', 'Loisirs': 'TextEdit', });
lyr_Centreurbain_6.set('fieldImages', {'fid': 'TextEdit', '% veg': 'TextEdit', 'nb ecoles': 'TextEdit', 'dens pop': 'TextEdit', 'siren': 'TextEdit', '6 classes': 'TextEdit', 'velos': 'TextEdit', 'Magasins': 'TextEdit', 'Médical': 'TextEdit', 'Loisirs': 'TextEdit', });
lyr_Mixteetdense_7.set('fieldImages', {'fid': 'TextEdit', '% veg': 'TextEdit', 'nb ecoles': 'TextEdit', 'dens pop': 'TextEdit', 'siren': 'TextEdit', '6 classes': 'TextEdit', 'velos': 'TextEdit', 'Magasins': 'TextEdit', 'Médical': 'TextEdit', 'Loisirs': 'TextEdit', });
lyr_Communesagglo_1.set('fieldLabels', {'ID': 'no label', 'INSEE_COM': 'no label', 'INSEE_ARR': 'no label', 'INSEE_COL': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'POPULATION': 'no label', 'SURFACE_HA': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'CODE_POST': 'no label', 'NOM': 'no label', 'CL_ARROND': 'no label', 'CL_COLLTER': 'no label', 'CL_DEPART': 'no label', 'CL_REGION': 'no label', 'CAPITALE': 'no label', 'DATE_RCT': 'no label', 'RECENSEUR': 'no label', 'SIREN_EPCI': 'no label', 'ID_CH_LIEU': 'no label', 'ID_AUT_ADM': 'no label', 'CODE_SIREN': 'no label', });
lyr_Faibledensit_2.set('fieldLabels', {'fid': 'no label', '% veg': 'no label', 'nb ecoles': 'no label', 'dens pop': 'no label', 'siren': 'no label', '6 classes': 'no label', 'velos': 'no label', 'Magasins': 'no label', 'Médical': 'no label', 'Loisirs': 'no label', });
lyr_individueldense_3.set('fieldLabels', {'fid': 'no label', '% veg': 'no label', 'nb ecoles': 'no label', 'dens pop': 'no label', 'siren': 'no label', '6 classes': 'no label', 'velos': 'no label', 'Magasins': 'no label', 'Médical': 'no label', 'Loisirs': 'no label', });
lyr_trespeudense_4.set('fieldLabels', {'fid': 'no label', '% veg': 'no label', 'nb ecoles': 'no label', 'dens pop': 'no label', 'siren': 'no label', '6 classes': 'no label', 'velos': 'no label', 'Magasins': 'no label', 'Médical': 'no label', 'Loisirs': 'no label', });
lyr_btiforteemprise_5.set('fieldLabels', {'fid': 'no label', '% veg': 'no label', 'nb ecoles': 'no label', 'dens pop': 'no label', 'siren': 'no label', '6 classes': 'no label', 'velos': 'no label', 'Magasins': 'no label', 'Médical': 'no label', 'Loisirs': 'no label', });
lyr_Centreurbain_6.set('fieldLabels', {'fid': 'no label', '% veg': 'no label', 'nb ecoles': 'no label', 'dens pop': 'no label', 'siren': 'no label', '6 classes': 'no label', 'velos': 'no label', 'Magasins': 'no label', 'Médical': 'no label', 'Loisirs': 'no label', });
lyr_Mixteetdense_7.set('fieldLabels', {'fid': 'no label', '% veg': 'no label', 'nb ecoles': 'no label', 'dens pop': 'no label', 'siren': 'no label', '6 classes': 'no label', 'velos': 'no label', 'Magasins': 'no label', 'Médical': 'no label', 'Loisirs': 'no label', });
lyr_Mixteetdense_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});