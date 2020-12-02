var wms_layers = [];

var format_U_11_01_BL_07_20_11_25_0 = new ol.format.GeoJSON();
var features_U_11_01_BL_07_20_11_25_0 = format_U_11_01_BL_07_20_11_25_0.readFeatures(json_U_11_01_BL_07_20_11_25_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_01_BL_07_20_11_25_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_01_BL_07_20_11_25_0.addFeatures(features_U_11_01_BL_07_20_11_25_0);
var lyr_U_11_01_BL_07_20_11_25_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_01_BL_07_20_11_25_0, 
                style: style_U_11_01_BL_07_20_11_25_0,
                interactive: true,
                title: '<img src="styles/legend/U_11_01_BL_07_20_11_25_0.png" /> U_11_01_BL_07_20_11_25'
            });
var format_U_11_06_BL_06_20_11_25_1 = new ol.format.GeoJSON();
var features_U_11_06_BL_06_20_11_25_1 = format_U_11_06_BL_06_20_11_25_1.readFeatures(json_U_11_06_BL_06_20_11_25_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_06_BL_06_20_11_25_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_06_BL_06_20_11_25_1.addFeatures(features_U_11_06_BL_06_20_11_25_1);
var lyr_U_11_06_BL_06_20_11_25_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_06_BL_06_20_11_25_1, 
                style: style_U_11_06_BL_06_20_11_25_1,
                interactive: true,
                title: '<img src="styles/legend/U_11_06_BL_06_20_11_25_1.png" /> U_11_06_BL_06_20_11_25'
            });
var format_U_11_06_BL_05_20_11_25_2 = new ol.format.GeoJSON();
var features_U_11_06_BL_05_20_11_25_2 = format_U_11_06_BL_05_20_11_25_2.readFeatures(json_U_11_06_BL_05_20_11_25_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_06_BL_05_20_11_25_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_06_BL_05_20_11_25_2.addFeatures(features_U_11_06_BL_05_20_11_25_2);
var lyr_U_11_06_BL_05_20_11_25_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_06_BL_05_20_11_25_2, 
                style: style_U_11_06_BL_05_20_11_25_2,
                interactive: true,
                title: '<img src="styles/legend/U_11_06_BL_05_20_11_25_2.png" /> U_11_06_BL_05_20_11_25'
            });
var format_U_11_06_BL_04_20_11_25_3 = new ol.format.GeoJSON();
var features_U_11_06_BL_04_20_11_25_3 = format_U_11_06_BL_04_20_11_25_3.readFeatures(json_U_11_06_BL_04_20_11_25_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_06_BL_04_20_11_25_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_06_BL_04_20_11_25_3.addFeatures(features_U_11_06_BL_04_20_11_25_3);
var lyr_U_11_06_BL_04_20_11_25_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_06_BL_04_20_11_25_3, 
                style: style_U_11_06_BL_04_20_11_25_3,
                interactive: true,
                title: '<img src="styles/legend/U_11_06_BL_04_20_11_25_3.png" /> U_11_06_BL_04_20_11_25'
            });
var format_U_11_06_BL_03_20_11_25_4 = new ol.format.GeoJSON();
var features_U_11_06_BL_03_20_11_25_4 = format_U_11_06_BL_03_20_11_25_4.readFeatures(json_U_11_06_BL_03_20_11_25_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_06_BL_03_20_11_25_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_06_BL_03_20_11_25_4.addFeatures(features_U_11_06_BL_03_20_11_25_4);
var lyr_U_11_06_BL_03_20_11_25_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_06_BL_03_20_11_25_4, 
                style: style_U_11_06_BL_03_20_11_25_4,
                interactive: true,
                title: '<img src="styles/legend/U_11_06_BL_03_20_11_25_4.png" /> U_11_06_BL_03_20_11_25'
            });
var format_U_11_06_BL_02_20_11_25_5 = new ol.format.GeoJSON();
var features_U_11_06_BL_02_20_11_25_5 = format_U_11_06_BL_02_20_11_25_5.readFeatures(json_U_11_06_BL_02_20_11_25_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_06_BL_02_20_11_25_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_06_BL_02_20_11_25_5.addFeatures(features_U_11_06_BL_02_20_11_25_5);
var lyr_U_11_06_BL_02_20_11_25_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_06_BL_02_20_11_25_5, 
                style: style_U_11_06_BL_02_20_11_25_5,
                interactive: true,
                title: '<img src="styles/legend/U_11_06_BL_02_20_11_25_5.png" /> U_11_06_BL_02_20_11_25'
            });
var format_U_11_06_BL_01_20_11_25_6 = new ol.format.GeoJSON();
var features_U_11_06_BL_01_20_11_25_6 = format_U_11_06_BL_01_20_11_25_6.readFeatures(json_U_11_06_BL_01_20_11_25_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_06_BL_01_20_11_25_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_06_BL_01_20_11_25_6.addFeatures(features_U_11_06_BL_01_20_11_25_6);
var lyr_U_11_06_BL_01_20_11_25_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_06_BL_01_20_11_25_6, 
                style: style_U_11_06_BL_01_20_11_25_6,
                interactive: true,
                title: '<img src="styles/legend/U_11_06_BL_01_20_11_25_6.png" /> U_11_06_BL_01_20_11_25'
            });
var format_U_11_06_B_YES_20_11_25_7 = new ol.format.GeoJSON();
var features_U_11_06_B_YES_20_11_25_7 = format_U_11_06_B_YES_20_11_25_7.readFeatures(json_U_11_06_B_YES_20_11_25_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_06_B_YES_20_11_25_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_06_B_YES_20_11_25_7.addFeatures(features_U_11_06_B_YES_20_11_25_7);
var lyr_U_11_06_B_YES_20_11_25_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_06_B_YES_20_11_25_7, 
                style: style_U_11_06_B_YES_20_11_25_7,
                interactive: true,
                title: '<img src="styles/legend/U_11_06_B_YES_20_11_25_7.png" /> U_11_06_B_YES_20_11_25'
            });
var format_U_11_06_BU_UNK_20_11_25_8 = new ol.format.GeoJSON();
var features_U_11_06_BU_UNK_20_11_25_8 = format_U_11_06_BU_UNK_20_11_25_8.readFeatures(json_U_11_06_BU_UNK_20_11_25_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_06_BU_UNK_20_11_25_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_06_BU_UNK_20_11_25_8.addFeatures(features_U_11_06_BU_UNK_20_11_25_8);
var lyr_U_11_06_BU_UNK_20_11_25_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_06_BU_UNK_20_11_25_8, 
                style: style_U_11_06_BU_UNK_20_11_25_8,
                interactive: true,
                title: '<img src="styles/legend/U_11_06_BU_UNK_20_11_25_8.png" /> U_11_06_BU_UNK_20_11_25'
            });
var format_U_11_06_B_MIX_20_11_25_9 = new ol.format.GeoJSON();
var features_U_11_06_B_MIX_20_11_25_9 = format_U_11_06_B_MIX_20_11_25_9.readFeatures(json_U_11_06_B_MIX_20_11_25_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_06_B_MIX_20_11_25_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_06_B_MIX_20_11_25_9.addFeatures(features_U_11_06_B_MIX_20_11_25_9);
var lyr_U_11_06_B_MIX_20_11_25_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_06_B_MIX_20_11_25_9, 
                style: style_U_11_06_B_MIX_20_11_25_9,
                interactive: true,
                title: '<img src="styles/legend/U_11_06_B_MIX_20_11_25_9.png" /> U_11_06_B_MIX_20_11_25'
            });
var format_U_11_06_B_IND_20_11_25_10 = new ol.format.GeoJSON();
var features_U_11_06_B_IND_20_11_25_10 = format_U_11_06_B_IND_20_11_25_10.readFeatures(json_U_11_06_B_IND_20_11_25_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_06_B_IND_20_11_25_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_06_B_IND_20_11_25_10.addFeatures(features_U_11_06_B_IND_20_11_25_10);
var lyr_U_11_06_B_IND_20_11_25_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_06_B_IND_20_11_25_10, 
                style: style_U_11_06_B_IND_20_11_25_10,
                interactive: true,
                title: '<img src="styles/legend/U_11_06_B_IND_20_11_25_10.png" /> U_11_06_B_IND_20_11_25'
            });
var format_U_11_06_B_GPR_20_11_25_11 = new ol.format.GeoJSON();
var features_U_11_06_B_GPR_20_11_25_11 = format_U_11_06_B_GPR_20_11_25_11.readFeatures(json_U_11_06_B_GPR_20_11_25_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_06_B_GPR_20_11_25_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_06_B_GPR_20_11_25_11.addFeatures(features_U_11_06_B_GPR_20_11_25_11);
var lyr_U_11_06_B_GPR_20_11_25_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_06_B_GPR_20_11_25_11, 
                style: style_U_11_06_B_GPR_20_11_25_11,
                interactive: true,
                title: '<img src="styles/legend/U_11_06_B_GPR_20_11_25_11.png" /> U_11_06_B_GPR_20_11_25'
            });
var format_U_11_06_B_GPU_20_11_25_12 = new ol.format.GeoJSON();
var features_U_11_06_B_GPU_20_11_25_12 = format_U_11_06_B_GPU_20_11_25_12.readFeatures(json_U_11_06_B_GPU_20_11_25_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_06_B_GPU_20_11_25_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_06_B_GPU_20_11_25_12.addFeatures(features_U_11_06_B_GPU_20_11_25_12);
var lyr_U_11_06_B_GPU_20_11_25_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_06_B_GPU_20_11_25_12, 
                style: style_U_11_06_B_GPU_20_11_25_12,
                interactive: true,
                title: '<img src="styles/legend/U_11_06_B_GPU_20_11_25_12.png" /> U_11_06_B_GPU_20_11_25'
            });
var format_U_11_06_B_COM_20_11_25_13 = new ol.format.GeoJSON();
var features_U_11_06_B_COM_20_11_25_13 = format_U_11_06_B_COM_20_11_25_13.readFeatures(json_U_11_06_B_COM_20_11_25_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_06_B_COM_20_11_25_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_06_B_COM_20_11_25_13.addFeatures(features_U_11_06_B_COM_20_11_25_13);
var lyr_U_11_06_B_COM_20_11_25_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_06_B_COM_20_11_25_13, 
                style: style_U_11_06_B_COM_20_11_25_13,
                interactive: true,
                title: '<img src="styles/legend/U_11_06_B_COM_20_11_25_13.png" /> U_11_06_B_COM_20_11_25'
            });
var format_U_11_06_B_RES_20_11_25_14 = new ol.format.GeoJSON();
var features_U_11_06_B_RES_20_11_25_14 = format_U_11_06_B_RES_20_11_25_14.readFeatures(json_U_11_06_B_RES_20_11_25_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_06_B_RES_20_11_25_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_06_B_RES_20_11_25_14.addFeatures(features_U_11_06_B_RES_20_11_25_14);
var lyr_U_11_06_B_RES_20_11_25_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_06_B_RES_20_11_25_14, 
                style: style_U_11_06_B_RES_20_11_25_14,
                interactive: true,
                title: '<img src="styles/legend/U_11_06_B_RES_20_11_25_14.png" /> U_11_06_B_RES_20_11_25'
            });

lyr_U_11_01_BL_07_20_11_25_0.setVisible(true);lyr_U_11_06_BL_06_20_11_25_1.setVisible(true);lyr_U_11_06_BL_05_20_11_25_2.setVisible(true);lyr_U_11_06_BL_04_20_11_25_3.setVisible(true);lyr_U_11_06_BL_03_20_11_25_4.setVisible(true);lyr_U_11_06_BL_02_20_11_25_5.setVisible(true);lyr_U_11_06_BL_01_20_11_25_6.setVisible(true);lyr_U_11_06_B_YES_20_11_25_7.setVisible(true);lyr_U_11_06_BU_UNK_20_11_25_8.setVisible(true);lyr_U_11_06_B_MIX_20_11_25_9.setVisible(true);lyr_U_11_06_B_IND_20_11_25_10.setVisible(true);lyr_U_11_06_B_GPR_20_11_25_11.setVisible(true);lyr_U_11_06_B_GPU_20_11_25_12.setVisible(true);lyr_U_11_06_B_COM_20_11_25_13.setVisible(true);lyr_U_11_06_B_RES_20_11_25_14.setVisible(true);
var layersList = [lyr_U_11_01_BL_07_20_11_25_0,lyr_U_11_06_BL_06_20_11_25_1,lyr_U_11_06_BL_05_20_11_25_2,lyr_U_11_06_BL_04_20_11_25_3,lyr_U_11_06_BL_03_20_11_25_4,lyr_U_11_06_BL_02_20_11_25_5,lyr_U_11_06_BL_01_20_11_25_6,lyr_U_11_06_B_YES_20_11_25_7,lyr_U_11_06_BU_UNK_20_11_25_8,lyr_U_11_06_B_MIX_20_11_25_9,lyr_U_11_06_B_IND_20_11_25_10,lyr_U_11_06_B_GPR_20_11_25_11,lyr_U_11_06_B_GPU_20_11_25_12,lyr_U_11_06_B_COM_20_11_25_13,lyr_U_11_06_B_RES_20_11_25_14];
lyr_U_11_01_BL_07_20_11_25_0.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', });
lyr_U_11_06_BL_06_20_11_25_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', });
lyr_U_11_06_BL_05_20_11_25_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr_city': 'addr_city', 'building': 'building', 'building_l': 'building_l', 'name': 'name', });
lyr_U_11_06_BL_04_20_11_25_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'name': 'name', 'shop': 'shop', });
lyr_U_11_06_BL_03_20_11_25_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'type': 'type', 'addr_city': 'addr_city', 'addr_stree': 'addr_stree', 'amenity': 'amenity', 'name': 'name', 'phone': 'phone', 'building_u': 'building_u', });
lyr_U_11_06_BL_02_20_11_25_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'type': 'type', 'building_u': 'building_u', 'man_made': 'man_made', 'addr_city': 'addr_city', 'addr_stree': 'addr_stree', 'name': 'name', 'shop': 'shop', 'max_level': 'max_level', 'min_level': 'min_level', });
lyr_U_11_06_BL_01_20_11_25_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr_city': 'addr_city', 'amenity': 'amenity', 'building': 'building', 'building_l': 'building_l', 'denominati': 'denominati', 'name': 'name', 'religion': 'religion', 'building_u': 'building_u', 'man_made': 'man_made', 'shop': 'shop', 'building_m': 'building_m', 'height': 'height', 'addr_stree': 'addr_stree', 'sport': 'sport', });
lyr_U_11_06_B_YES_20_11_25_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'type': 'type', 'building_l': 'building_l', 'building_u': 'building_u', 'man_made': 'man_made', 'amenity': 'amenity', 'denominati': 'denominati', 'name': 'name', 'name_es': 'name_es', 'religion': 'religion', 'tourism': 'tourism', 'addr_city': 'addr_city', 'addr_stree': 'addr_stree', 'ref': 'ref', 'shop': 'shop', 'club': 'club', 'informatio': 'informatio', 'opening_ho': 'opening_ho', 'phone': 'phone', 'industrial': 'industrial', 'Source': 'Source', 'product': 'product', 'building_1': 'building_1', 'natural': 'natural', });
lyr_U_11_06_BU_UNK_20_11_25_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'building_u': 'building_u', });
lyr_U_11_06_B_MIX_20_11_25_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'building_u': 'building_u', 'name': 'name', 'shop': 'shop', });
lyr_U_11_06_B_IND_20_11_25_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_u': 'building_u', 'man_made': 'man_made', 'building_l': 'building_l', 'name': 'name', 'industrial': 'industrial', });
lyr_U_11_06_B_GPR_20_11_25_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr_city': 'addr_city', 'amenity': 'amenity', 'building': 'building', 'building_l': 'building_l', 'denominati': 'denominati', 'name': 'name', 'religion': 'religion', 'addr_stree': 'addr_stree', 'phone': 'phone', 'building_1': 'building_1', });
lyr_U_11_06_B_GPU_20_11_25_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'type': 'type', });
lyr_U_11_06_B_COM_20_11_25_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr_city': 'addr_city', 'addr_stree': 'addr_stree', 'building': 'building', 'building_l': 'building_l', 'name': 'name', 'shop': 'shop', 'building_1': 'building_1', 'sport': 'sport', 'building_u': 'building_u', 'max_level': 'max_level', 'min_level': 'min_level', });
lyr_U_11_06_B_RES_20_11_25_14.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', });
lyr_U_11_01_BL_07_20_11_25_0.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', });
lyr_U_11_06_BL_06_20_11_25_1.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', });
lyr_U_11_06_BL_05_20_11_25_2.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'addr_city': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'name': 'TextEdit', });
lyr_U_11_06_BL_04_20_11_25_3.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'name': 'TextEdit', 'shop': 'TextEdit', });
lyr_U_11_06_BL_03_20_11_25_4.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'type': 'TextEdit', 'addr_city': 'TextEdit', 'addr_stree': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'phone': 'TextEdit', 'building_u': 'TextEdit', });
lyr_U_11_06_BL_02_20_11_25_5.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'type': 'TextEdit', 'building_u': 'TextEdit', 'man_made': 'TextEdit', 'addr_city': 'TextEdit', 'addr_stree': 'TextEdit', 'name': 'TextEdit', 'shop': 'TextEdit', 'max_level': 'TextEdit', 'min_level': 'TextEdit', });
lyr_U_11_06_BL_01_20_11_25_6.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'addr_city': 'TextEdit', 'amenity': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'denominati': 'TextEdit', 'name': 'TextEdit', 'religion': 'TextEdit', 'building_u': 'TextEdit', 'man_made': 'TextEdit', 'shop': 'TextEdit', 'building_m': 'TextEdit', 'height': 'TextEdit', 'addr_stree': 'TextEdit', 'sport': 'TextEdit', });
lyr_U_11_06_B_YES_20_11_25_7.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'type': 'TextEdit', 'building_l': 'TextEdit', 'building_u': 'TextEdit', 'man_made': 'TextEdit', 'amenity': 'TextEdit', 'denominati': 'TextEdit', 'name': 'TextEdit', 'name_es': 'TextEdit', 'religion': 'TextEdit', 'tourism': 'TextEdit', 'addr_city': 'TextEdit', 'addr_stree': 'TextEdit', 'ref': 'TextEdit', 'shop': 'TextEdit', 'club': 'TextEdit', 'informatio': 'TextEdit', 'opening_ho': 'TextEdit', 'phone': 'TextEdit', 'industrial': 'TextEdit', 'Source': 'TextEdit', 'product': 'TextEdit', 'building_1': 'TextEdit', 'natural': 'TextEdit', });
lyr_U_11_06_BU_UNK_20_11_25_8.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'building_u': 'TextEdit', });
lyr_U_11_06_B_MIX_20_11_25_9.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'building_u': 'TextEdit', 'name': 'TextEdit', 'shop': 'TextEdit', });
lyr_U_11_06_B_IND_20_11_25_10.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_u': 'TextEdit', 'man_made': 'TextEdit', 'building_l': 'TextEdit', 'name': 'TextEdit', 'industrial': 'TextEdit', });
lyr_U_11_06_B_GPR_20_11_25_11.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'addr_city': 'TextEdit', 'amenity': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'denominati': 'TextEdit', 'name': 'TextEdit', 'religion': 'TextEdit', 'addr_stree': 'TextEdit', 'phone': 'TextEdit', 'building_1': 'TextEdit', });
lyr_U_11_06_B_GPU_20_11_25_12.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'type': 'TextEdit', });
lyr_U_11_06_B_COM_20_11_25_13.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'addr_city': 'TextEdit', 'addr_stree': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'name': 'TextEdit', 'shop': 'TextEdit', 'building_1': 'TextEdit', 'sport': 'TextEdit', 'building_u': 'TextEdit', 'max_level': 'TextEdit', 'min_level': 'TextEdit', });
lyr_U_11_06_B_RES_20_11_25_14.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', });
lyr_U_11_01_BL_07_20_11_25_0.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', });
lyr_U_11_06_BL_06_20_11_25_1.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', });
lyr_U_11_06_BL_05_20_11_25_2.set('fieldLabels', {'osm_type': 'no label', 'addr_city': 'no label', 'building': 'no label', 'building_l': 'no label', 'name': 'no label', });
lyr_U_11_06_BL_04_20_11_25_3.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'name': 'no label', 'shop': 'no label', });
lyr_U_11_06_BL_03_20_11_25_4.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'type': 'no label', 'addr_city': 'no label', 'addr_stree': 'no label', 'amenity': 'no label', 'name': 'no label', 'phone': 'no label', 'building_u': 'no label', });
lyr_U_11_06_BL_02_20_11_25_5.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'type': 'no label', 'building_u': 'no label', 'man_made': 'no label', 'addr_city': 'no label', 'addr_stree': 'no label', 'name': 'no label', 'shop': 'no label', 'max_level': 'no label', 'min_level': 'no label', });
lyr_U_11_06_BL_01_20_11_25_6.set('fieldLabels', {'osm_type': 'no label', 'addr_city': 'no label', 'amenity': 'no label', 'building': 'no label', 'building_l': 'no label', 'denominati': 'no label', 'name': 'no label', 'religion': 'no label', 'building_u': 'no label', 'man_made': 'no label', 'shop': 'no label', 'building_m': 'no label', 'height': 'no label', 'addr_stree': 'no label', 'sport': 'no label', });
lyr_U_11_06_B_YES_20_11_25_7.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'type': 'no label', 'building_l': 'no label', 'building_u': 'no label', 'man_made': 'no label', 'amenity': 'no label', 'denominati': 'no label', 'name': 'no label', 'name_es': 'no label', 'religion': 'no label', 'tourism': 'no label', 'addr_city': 'no label', 'addr_stree': 'no label', 'ref': 'no label', 'shop': 'no label', 'club': 'no label', 'informatio': 'no label', 'opening_ho': 'no label', 'phone': 'no label', 'industrial': 'no label', 'Source': 'no label', 'product': 'no label', 'building_1': 'no label', 'natural': 'no label', });
lyr_U_11_06_BU_UNK_20_11_25_8.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_u': 'no label', });
lyr_U_11_06_B_MIX_20_11_25_9.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_u': 'no label', 'name': 'no label', 'shop': 'no label', });
lyr_U_11_06_B_IND_20_11_25_10.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_u': 'no label', 'man_made': 'no label', 'building_l': 'no label', 'name': 'no label', 'industrial': 'no label', });
lyr_U_11_06_B_GPR_20_11_25_11.set('fieldLabels', {'osm_type': 'no label', 'addr_city': 'no label', 'amenity': 'no label', 'building': 'no label', 'building_l': 'no label', 'denominati': 'no label', 'name': 'no label', 'religion': 'no label', 'addr_stree': 'no label', 'phone': 'no label', 'building_1': 'no label', });
lyr_U_11_06_B_GPU_20_11_25_12.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'type': 'no label', });
lyr_U_11_06_B_COM_20_11_25_13.set('fieldLabels', {'osm_type': 'no label', 'addr_city': 'no label', 'addr_stree': 'no label', 'building': 'no label', 'building_l': 'no label', 'name': 'no label', 'shop': 'no label', 'building_1': 'no label', 'sport': 'no label', 'building_u': 'no label', 'max_level': 'no label', 'min_level': 'no label', });
lyr_U_11_06_B_RES_20_11_25_14.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', });
lyr_U_11_06_B_RES_20_11_25_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});