var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Communes_1 = new ol.format.GeoJSON();
var features_Communes_1 = format_Communes_1.readFeatures(json_Communes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_1.addFeatures(features_Communes_1);
var lyr_Communes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_1, 
                style: style_Communes_1,
                popuplayertitle: 'Communes',
                interactive: false,
                title: '<img src="styles/legend/Communes_1.png" /> Communes'
            });
var format_Peudense_2 = new ol.format.GeoJSON();
var features_Peudense_2 = format_Peudense_2.readFeatures(json_Peudense_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peudense_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peudense_2.addFeatures(features_Peudense_2);
var lyr_Peudense_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Peudense_2, 
                style: style_Peudense_2,
                popuplayertitle: 'Peu dense',
                interactive: true,
                title: '<img src="styles/legend/Peudense_2.png" /> Peu dense'
            });
var format_btiforteemprise_3 = new ol.format.GeoJSON();
var features_btiforteemprise_3 = format_btiforteemprise_3.readFeatures(json_btiforteemprise_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_btiforteemprise_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_btiforteemprise_3.addFeatures(features_btiforteemprise_3);
var lyr_btiforteemprise_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_btiforteemprise_3, 
                style: style_btiforteemprise_3,
                popuplayertitle: 'bâti forte emprise',
                interactive: true,
                title: '<img src="styles/legend/btiforteemprise_3.png" /> bâti forte emprise'
            });
var format_Centreurbain_4 = new ol.format.GeoJSON();
var features_Centreurbain_4 = format_Centreurbain_4.readFeatures(json_Centreurbain_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centreurbain_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centreurbain_4.addFeatures(features_Centreurbain_4);
var lyr_Centreurbain_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centreurbain_4, 
                style: style_Centreurbain_4,
                popuplayertitle: 'Centre urbain',
                interactive: true,
                title: '<img src="styles/legend/Centreurbain_4.png" /> Centre urbain'
            });
var format_individueldense_5 = new ol.format.GeoJSON();
var features_individueldense_5 = format_individueldense_5.readFeatures(json_individueldense_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_individueldense_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_individueldense_5.addFeatures(features_individueldense_5);
var lyr_individueldense_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_individueldense_5, 
                style: style_individueldense_5,
                popuplayertitle: 'individuel dense',
                interactive: true,
                title: '<img src="styles/legend/individueldense_5.png" /> individuel dense'
            });
var format_Mixteetdense_6 = new ol.format.GeoJSON();
var features_Mixteetdense_6 = format_Mixteetdense_6.readFeatures(json_Mixteetdense_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mixteetdense_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mixteetdense_6.addFeatures(features_Mixteetdense_6);
var lyr_Mixteetdense_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mixteetdense_6, 
                style: style_Mixteetdense_6,
                popuplayertitle: 'Mixte et dense',
                interactive: true,
                title: '<img src="styles/legend/Mixteetdense_6.png" /> Mixte et dense'
            });
var format_trespeudense_7 = new ol.format.GeoJSON();
var features_trespeudense_7 = format_trespeudense_7.readFeatures(json_trespeudense_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trespeudense_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trespeudense_7.addFeatures(features_trespeudense_7);
var lyr_trespeudense_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_trespeudense_7, 
                style: style_trespeudense_7,
                popuplayertitle: 'tres peu dense',
                interactive: true,
                title: '<img src="styles/legend/trespeudense_7.png" /> tres peu dense'
            });
var format_Communesagglo_8 = new ol.format.GeoJSON();
var features_Communesagglo_8 = format_Communesagglo_8.readFeatures(json_Communesagglo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communesagglo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communesagglo_8.addFeatures(features_Communesagglo_8);
var lyr_Communesagglo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communesagglo_8, 
                style: style_Communesagglo_8,
                popuplayertitle: 'Communes agglo',
                interactive: false,
                title: '<img src="styles/legend/Communesagglo_8.png" /> Communes agglo'
            });
var format_Nomcommunes_9 = new ol.format.GeoJSON();
var features_Nomcommunes_9 = format_Nomcommunes_9.readFeatures(json_Nomcommunes_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nomcommunes_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nomcommunes_9.addFeatures(features_Nomcommunes_9);
var lyr_Nomcommunes_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nomcommunes_9, 
                style: style_Nomcommunes_9,
                popuplayertitle: 'Nom communes',
                interactive: false,
                title: '<img src="styles/legend/Nomcommunes_9.png" /> Nom communes'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Communes_1.setVisible(true);lyr_Peudense_2.setVisible(true);lyr_btiforteemprise_3.setVisible(true);lyr_Centreurbain_4.setVisible(true);lyr_individueldense_5.setVisible(true);lyr_Mixteetdense_6.setVisible(true);lyr_trespeudense_7.setVisible(true);lyr_Communesagglo_8.setVisible(true);lyr_Nomcommunes_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Communes_1,lyr_Peudense_2,lyr_btiforteemprise_3,lyr_Centreurbain_4,lyr_individueldense_5,lyr_Mixteetdense_6,lyr_trespeudense_7,lyr_Communesagglo_8,lyr_Nomcommunes_9];
lyr_Communes_1.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', });
lyr_Peudense_2.set('fieldAliases', {'fid': 'fid', '% veg': '% veg', 'nb ecoles': 'nb ecoles', 'dens pop': 'dens pop', 'siren': 'siren', '6 classes': '6 classes', 'velos': 'velos', 'Magasins': 'Magasins', 'Médical': 'Médical', });
lyr_btiforteemprise_3.set('fieldAliases', {'fid': 'fid', '% veg': '% veg', 'nb ecoles': 'nb ecoles', 'dens pop': 'dens pop', 'siren': 'siren', '6 classes': '6 classes', 'velos': 'velos', 'Magasins': 'Magasins', 'Médical': 'Médical', 'Loisirs': 'Loisirs', });
lyr_Centreurbain_4.set('fieldAliases', {'fid': 'fid', '% veg': '% veg', 'nb ecoles': 'nb ecoles', 'dens pop': 'dens pop', 'siren': 'siren', '6 classes': '6 classes', 'velos': 'velos', 'Magasins': 'Magasins', 'Médical': 'Médical', 'Loisirs': 'Loisirs', });
lyr_individueldense_5.set('fieldAliases', {'fid': 'fid', '% veg': '% veg', 'nb ecoles': 'nb ecoles', 'dens pop': 'dens pop', 'siren': 'siren', '6 classes': '6 classes', 'velos': 'velos', 'Magasins': 'Magasins', 'Médical': 'Médical', 'Loisirs': 'Loisirs', });
lyr_Mixteetdense_6.set('fieldAliases', {'fid': 'fid', '% veg': '% veg', 'nb ecoles': 'nb ecoles', 'dens pop': 'dens pop', 'siren': 'siren', '6 classes': '6 classes', 'velos': 'velos', 'Magasins': 'Magasins', 'Médical': 'Médical', 'Loisirs': 'Loisirs', });
lyr_trespeudense_7.set('fieldAliases', {'fid': 'fid', '% veg': '% veg', 'nb ecoles': 'nb ecoles', 'dens pop': 'dens pop', 'siren': 'siren', '6 classes': '6 classes', 'velos': 'velos', 'Magasins': 'Magasins', 'Médical': 'Médical', 'Loisirs': 'Loisirs', });
lyr_Communesagglo_8.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', });
lyr_Nomcommunes_9.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', });
lyr_Communes_1.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', });
lyr_Peudense_2.set('fieldImages', {'fid': 'TextEdit', '% veg': 'TextEdit', 'nb ecoles': 'TextEdit', 'dens pop': 'TextEdit', 'siren': 'TextEdit', '6 classes': 'TextEdit', 'velos': 'TextEdit', 'Magasins': 'TextEdit', 'Médical': 'TextEdit', });
lyr_btiforteemprise_3.set('fieldImages', {'fid': 'TextEdit', '% veg': 'TextEdit', 'nb ecoles': 'TextEdit', 'dens pop': 'TextEdit', 'siren': 'TextEdit', '6 classes': 'TextEdit', 'velos': 'TextEdit', 'Magasins': 'TextEdit', 'Médical': 'TextEdit', 'Loisirs': 'TextEdit', });
lyr_Centreurbain_4.set('fieldImages', {'fid': 'TextEdit', '% veg': 'TextEdit', 'nb ecoles': 'TextEdit', 'dens pop': 'TextEdit', 'siren': 'TextEdit', '6 classes': 'TextEdit', 'velos': 'TextEdit', 'Magasins': 'TextEdit', 'Médical': 'TextEdit', 'Loisirs': 'TextEdit', });
lyr_individueldense_5.set('fieldImages', {'fid': 'TextEdit', '% veg': 'TextEdit', 'nb ecoles': 'TextEdit', 'dens pop': 'TextEdit', 'siren': 'TextEdit', '6 classes': 'TextEdit', 'velos': 'TextEdit', 'Magasins': 'TextEdit', 'Médical': 'TextEdit', 'Loisirs': 'TextEdit', });
lyr_Mixteetdense_6.set('fieldImages', {'fid': 'TextEdit', '% veg': 'TextEdit', 'nb ecoles': 'TextEdit', 'dens pop': 'TextEdit', 'siren': 'TextEdit', '6 classes': 'TextEdit', 'velos': 'TextEdit', 'Magasins': 'TextEdit', 'Médical': 'TextEdit', 'Loisirs': 'TextEdit', });
lyr_trespeudense_7.set('fieldImages', {'fid': 'TextEdit', '% veg': 'TextEdit', 'nb ecoles': 'TextEdit', 'dens pop': 'TextEdit', 'siren': 'TextEdit', '6 classes': 'TextEdit', 'velos': 'TextEdit', 'Magasins': 'TextEdit', 'Médical': 'TextEdit', 'Loisirs': 'TextEdit', });
lyr_Communesagglo_8.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', });
lyr_Nomcommunes_9.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', });
lyr_Communes_1.set('fieldLabels', {'ID': 'no label', 'INSEE_COM': 'no label', 'INSEE_ARR': 'no label', 'INSEE_COL': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'POPULATION': 'no label', 'SURFACE_HA': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'CODE_POST': 'no label', 'NOM': 'no label', 'CL_ARROND': 'no label', 'CL_COLLTER': 'no label', 'CL_DEPART': 'no label', 'CL_REGION': 'no label', 'CAPITALE': 'no label', 'DATE_RCT': 'no label', 'RECENSEUR': 'no label', 'SIREN_EPCI': 'no label', 'ID_CH_LIEU': 'no label', 'ID_AUT_ADM': 'no label', 'CODE_SIREN': 'no label', });
lyr_Peudense_2.set('fieldLabels', {'fid': 'hidden field', '% veg': 'hidden field', 'nb ecoles': 'hidden field', 'dens pop': 'hidden field', 'siren': 'hidden field', '6 classes': 'hidden field', 'velos': 'hidden field', 'Magasins': 'hidden field', 'Médical': 'hidden field', });
lyr_btiforteemprise_3.set('fieldLabels', {'fid': 'hidden field', '% veg': 'hidden field', 'nb ecoles': 'hidden field', 'dens pop': 'hidden field', 'siren': 'hidden field', '6 classes': 'hidden field', 'velos': 'hidden field', 'Magasins': 'hidden field', 'Médical': 'hidden field', 'Loisirs': 'hidden field', });
lyr_Centreurbain_4.set('fieldLabels', {'fid': 'hidden field', '% veg': 'hidden field', 'nb ecoles': 'hidden field', 'dens pop': 'hidden field', 'siren': 'hidden field', '6 classes': 'hidden field', 'velos': 'hidden field', 'Magasins': 'hidden field', 'Médical': 'hidden field', 'Loisirs': 'hidden field', });
lyr_individueldense_5.set('fieldLabels', {'fid': 'hidden field', '% veg': 'hidden field', 'nb ecoles': 'hidden field', 'dens pop': 'hidden field', 'siren': 'hidden field', '6 classes': 'hidden field', 'velos': 'hidden field', 'Magasins': 'hidden field', 'Médical': 'hidden field', 'Loisirs': 'hidden field', });
lyr_Mixteetdense_6.set('fieldLabels', {'fid': 'hidden field', '% veg': 'hidden field', 'nb ecoles': 'hidden field', 'dens pop': 'hidden field', 'siren': 'hidden field', '6 classes': 'hidden field', 'velos': 'hidden field', 'Magasins': 'hidden field', 'Médical': 'hidden field', 'Loisirs': 'hidden field', });
lyr_trespeudense_7.set('fieldLabels', {'fid': 'hidden field', '% veg': 'hidden field', 'nb ecoles': 'hidden field', 'dens pop': 'hidden field', 'siren': 'hidden field', '6 classes': 'hidden field', 'velos': 'hidden field', 'Magasins': 'hidden field', 'Médical': 'hidden field', 'Loisirs': 'hidden field', });
lyr_Communesagglo_8.set('fieldLabels', {'ID': 'no label', 'INSEE_COM': 'no label', 'INSEE_ARR': 'no label', 'INSEE_COL': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'POPULATION': 'no label', 'SURFACE_HA': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'CODE_POST': 'no label', 'NOM': 'no label', 'CL_ARROND': 'no label', 'CL_COLLTER': 'no label', 'CL_DEPART': 'no label', 'CL_REGION': 'no label', 'CAPITALE': 'no label', 'DATE_RCT': 'no label', 'RECENSEUR': 'no label', 'SIREN_EPCI': 'no label', 'ID_CH_LIEU': 'no label', 'ID_AUT_ADM': 'no label', 'CODE_SIREN': 'no label', });
lyr_Nomcommunes_9.set('fieldLabels', {'ID': 'no label', 'INSEE_COM': 'no label', 'INSEE_ARR': 'no label', 'INSEE_COL': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'POPULATION': 'no label', 'SURFACE_HA': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'CODE_POST': 'no label', 'NOM': 'no label', 'CL_ARROND': 'no label', 'CL_COLLTER': 'no label', 'CL_DEPART': 'no label', 'CL_REGION': 'no label', 'CAPITALE': 'no label', 'DATE_RCT': 'no label', 'RECENSEUR': 'no label', 'SIREN_EPCI': 'no label', 'ID_CH_LIEU': 'no label', 'ID_AUT_ADM': 'no label', 'CODE_SIREN': 'no label', });
lyr_Nomcommunes_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});