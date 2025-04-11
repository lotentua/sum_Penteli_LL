// Initialize the map
const map = new maplibregl.Map({
    container: 'map',
    style: osmStyle, // Initialized in layers.js,
    center: [23.845069, 38.054058],
    zoom: 10
});


// Zoom to extents
const BOUNDING_BOX = [
    [23.81819444979635, 38.04028431202943],  // Southwest corner
    [23.875234720333395, 38.07182980794474] // Northeast corner
];

// Instantly zoom and pan the map to the defined bounds with padding
map.fitBounds(BOUNDING_BOX, { padding: 20, duration: 0 });

// Add navigation controls
map.addControl(new maplibregl.NavigationControl());

// On map load, add the sources and layers
map.on('load', function () {
    addSourcesLayers();
});


// EVENTS FOR CLICKABLE LAYERS - INACTIVE FOR NOW
// // Add events to clickable layers
// clickableLayers.forEach(layerId => {

//     // Mouse enter
//     map.on('mouseenter', layerId, () => {
//         map.getCanvas().style.cursor = 'pointer';
//     });

//     // Mouse leave
//     map.on('mouseleave', layerId, () => {
//         map.getCanvas().style.cursor = '';
//     });

//     // Mouse click
//     map.on('click', layerId, (e) => {
//         // Check if there are features under the mouse
//         if (!e.features || !e.features.length) return;

//         // Get the first feature and properties
//         const feature = e.features[0];
//         const properties = feature.properties;

//         // Add a popup with the feature properties, passing e.lngLat to the function
//         attributeTablePopup(properties, e.lngLat);
//     });
// });

// // FUNCTION to create a popup with the feature properties
// function attributeTablePopup(properties, lngLat) {
//     // Remove previous popups
//     document.querySelectorAll('.maplibregl-popup').forEach(popup => popup.remove());

//     // Build an HTML table with Bootstrap 5 classes
//     let tableHTML = `<table class="table table-striped table-bordered mb-0">`;
//     for (const key in properties) {
//         if (properties.hasOwnProperty(key)) {
//             tableHTML += `<tr><th scope="row">${key}</th><td>${properties[key]}</td></tr>`;
//         }
//     }
//     tableHTML += `</table>`;

//     // Create and show a popup at the clicked location
//     new maplibregl.Popup({ maxWidth: '300px' })
//         .setLngLat(lngLat)
//         .setHTML(tableHTML)
//         .addTo(map);
// }
