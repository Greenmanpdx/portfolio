/**
 * Created by greenman on 6/30/17.
 */

var MapMaker = function () {
    var map;

    return {
        createOSMap: function (lon, lat, zoom) {
            //a layer for markers - initially it has no markers
            var markerLayer = new ol.layer.Vector({
                source: new ol.source.Vector({features: [], projection: 'EPSG:4326'})
            });

            var baseLayer = new ol.layer.Tile({
                source: new ol.source.OSM()
            });

            map = new ol.Map({
                target: 'map',  // The DOM element that will contains the map
                renderer: 'canvas', // Force the renderer to be used
                layers: [baseLayer, markerLayer],
                // Create a view centered on the specified location and zoom level
                view: new ol.View({
                    center: ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857'),
                    zoom: zoom
                })
            });
        }, //ENDOF createOSMap

        addMarker: function (id, lon, lat, mag) {
            //create a point
            var geom = new ol.geom.Circle(ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857'), mag*90909.090909);
            var feature = new ol.Feature(geom);
           // feature.setStyle([
            //     new ol.style.Style({
            //         image: new ol.style.Circle(({
            //             fill:
            //         }))
            //     })
            // ]);

            if (id !== null) {
                feature.setId(id);
            }

            map.getLayers().item(1).getSource().addFeature(feature);
        }
    }
};

mymap = MapMaker();
mymap.createOSMap(58.368245318110304, 37.89354632472305, 3);

$.ajax({
    type: "GET",
    url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson",
    success: function (data) {
        console.log(data.features[0].properties.mag);
        var i = 1;
        $.each(data.features, function(){
            var lon = this.geometry.coordinates[0];
            var lat = this.geometry.coordinates[1];

            var mag = this.properties.mag;
            console.log(mag);

            mymap.addMarker(i, lon, lat, mag);
            ++i;
        })
    ;
    }
});



