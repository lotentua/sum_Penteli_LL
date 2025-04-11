/*
    GeoJSON data sources (placed in ../data/*.js)
    bikeSharingGeoJSON: GeoJSON object (Points)
    cycleStreetsGeoJSON: GeoJSON object (LineStrings)
    localBusRoutesGeoJSON: GeoJSON object (LineStrings)
    localBusStopsGeoJSON: GeoJSON object (Points)
    mobilityHubGeoJSON: GeoJSON object (Points)
    oasaStopsGeoJSON: GeoJSON object (Points)
    penteliBoundariesGeoJSON: GeoJSON object (Polygons)
*/

// Array of all layers, update with new layers
const clickableLayers = [
    'cycleStreets',
    'localBusRoutes',
    'localBusStops',
    'bikeSharing',
    'mobilityHub',
    'oasaStops',
    'penteliBoundaries'
];

// FUNCTION to add sources and layers to the map (called in map.js)
async function addSourcesLayers() {
    // Cycle Streets (LineStrings)
    map.addSource('cycleStreetsSource', {
        type: 'geojson',
        data: cycleStreetsGeoJSON
    });
    map.addLayer({
        id: 'cycleStreets',
        type: 'line',
        source: 'cycleStreetsSource',
        layout: {
            'line-join': 'round',
            'line-cap': 'round'
        },
        paint: {
            'line-color': [
                'match',
                ['get', 's_type'],
                'Cycle street', '#33a02c',
                'Cycle track', '#25502f',
                'Pedestrian', '#ff7f00',
                'Traffic calming', '#c107ca',
                '#000000' // Default
            ],
            'line-width': 6
        }
    });

    // Local Bus Routes (LineStrings)
    map.addSource('localBusRoutesSource', {
        type: 'geojson',
        data: localBusRoutesGeoJSON
    });
    map.addLayer({
        id: 'localBusRoutes',
        type: 'line',
        source: 'localBusRoutesSource',
        layout: {
            'line-join': 'round',
            'line-cap': 'round'
        },
        paint: {
            'line-color': [
                'match',
                ['get', 'Layer'],
                '1 ΔΙΑΔΡΟΜΗ ΛΕΩΦΟΡΕΙΟΥ', '#3a528b',
                '2 ΔΙΑΔΡΟΜΗ ΛΕΩΦΟΡΕΙΟΥ', '#c107ca',
                '3 ΔΙΑΔΡΟΜΗ ΛΕΩΦΟΡΕΙΟΥ', '#a2a2a2',
                'ΠΡΩΙΝΗ ΔΙΑΔΡΟΜΗ ΛΕΩΦΟΡΕΙΟΥ', '#db9975',
                '#000000' // Default
            ],
            'line-width': 6
        }
    });

    // Local Bus Stops (Points)
    const image_bus = await map.loadImage('https://lotentua.github.io/sum_Penteli_LL/img/bus_stop.png');
    map.addImage('bus_stop_img', image_bus.data);
    map.addSource('localBusStopsSource', {
        type: 'geojson',
        data: localBusStopsGeoJSON
    });
    map.addLayer({
        id: 'localBusStops',
        type: 'symbol',
        source: 'localBusStopsSource',
        layout: {
            'icon-image': 'bus_stop_img',
            'icon-size': 0.5,
            'icon-allow-overlap': true
        }
    });

    // Bike Sharing (Points)
    const image_bike = await map.loadImage('https://lotentua.github.io/sum_Penteli_LL/img/bike_share.png');
    map.addImage('bike_sharing_img', image_bike.data);
    map.addSource('bikeSharingSource', {
        type: 'geojson',
        data: bikeSharingGeoJSON
    });
    map.addLayer({
        id: 'bikeSharing',
        type: 'symbol',
        source: 'bikeSharingSource',
        layout: {
            'icon-image': 'bike_sharing_img',
            'icon-size': 0.8,
            'icon-allow-overlap': true
        }
    });

    // Mobility Hubs (Points)
    map.addSource('mobilityHubSource', {
        type: 'geojson',
        data: mobilityHubGeoJSON
    });
    map.addLayer({
        id: 'mobilityHub',
        type: 'circle',
        source: 'mobilityHubSource',
        paint: {
            'circle-radius': 7,
            'circle-color': '#800080'
        }
    });

    // OASA Stops (Points)
    const image_bus_oasa = await map.loadImage('https://lotentua.github.io/sum_Penteli_LL/img/bus_oasa.png');
    map.addImage('bus_oasa_img', image_bus_oasa.data);
    map.addSource('oasaStopsSource', {
        type: 'geojson',
        data: oasaStopsGeoJSON
    });
    map.addLayer({
        id: 'oasaStops',
        type: 'symbol',
        source: 'oasaStopsSource',
        layout: {
            'icon-image': 'bus_oasa_img',
            'icon-size': 0.3,
            'icon-allow-overlap': true
        }
    });

    // OASA Stops (Points)
    const image_metro = await map.loadImage('https://lotentua.github.io/sum_Penteli_LL/img/metro.png');
    map.addImage('metro_img', image_metro.data);
    map.addSource('metroStopsSource', {
        type: 'geojson',
        data: metroStopsGeoJSON
    });
    map.addLayer({
        id: 'metroStops',
        type: 'symbol',
        source: 'metroStopsSource',
        layout: {
            'icon-image': 'metro_img',
            'icon-size': 0.7,
            'icon-allow-overlap': true
        }
    });

    // Penteli Boundaries (Polygons)
    map.addSource('penteliBoundariesSource', {
        type: 'geojson',
        data: penteliBoundariesGeoJSON
    });
    map.addLayer({
        id: 'penteliBoundaries',
        type: 'line',
        source: 'penteliBoundariesSource',
        paint: {
            'line-color': '#000000',
            'line-width': 2,
            'line-dasharray': [4, 2]
        }
    });
}




// OpenStreetMap Map Style (called on map init in map.js)
const osmStyle = {
    version: 8,
    sources: {
        'osm-tiles': {
            type: 'raster',
            tiles: [
                'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
                'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
                'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
            ],
            tileSize: 256
        }
    },
    layers: [
        {
            id: 'osm-layer',
            type: 'raster',
            source: 'osm-tiles'
        }
    ]
};