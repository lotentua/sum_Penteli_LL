// Function to set up layer toggle switches (same as before)
function setupLegendToggles() {
    const legendMappings = [
        { checkbox: 'cycleStreetsToggle', layer: 'cycleStreets' },
        { checkbox: 'localBusRoutesToggle', layer: 'localBusRoutes' },
        { checkbox: 'localBusStopsToggle', layer: 'localBusStops' },
        { checkbox: 'bikeSharingToggle', layer: 'bikeSharing' },
        { checkbox: 'mobilityHubToggle', layer: 'mobilityHub' },
        { checkbox: 'oasaStopsToggle', layer: 'oasaStops' },
        { checkbox: 'metroStopsToggle', layer: 'metroStops' },
        { checkbox: 'penteliBoundariesToggle', layer: 'penteliBoundaries' }
    ];

    legendMappings.forEach(mapping => {
        const checkbox = document.getElementById(mapping.checkbox);
        checkbox.addEventListener('change', function () {
            map.setLayoutProperty(mapping.layer, 'visibility', this.checked ? 'visible' : 'none');
        });
    });
}

// Call setupLegendToggles after adding layers
setupLegendToggles();

// Legend button toggle behavior
const legendButton = document.getElementById('legend-button');
const legendDiv = document.getElementById('legend');
const legendClose = document.getElementById('legend-close');

// Toggle legend display on button click
legendButton.addEventListener('click', function () {
    if (legendDiv.style.display === 'block') {
        legendDiv.style.display = 'none';
    } else {
        legendDiv.style.display = 'block';
    }
});


legendButton.addEventListener('click', () => {
    legendDiv.style.display = legendDiv.style.display = 'block';
    legendButton.style.display = 'none!important';
})

legendClose.addEventListener('click', () => {
    legendDiv.style.display = 'none';
    legendButton.style.display = 'block';
});


// On window resize, if width>= 768px, show legend
window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
        legendDiv.style.display = 'block';
        legendButton.style.display = 'none';
    } else {
        legendDiv.style.display = 'none';
        legendButton.style.display = 'block';
    }
});


// On page load, check window width and set legend display accordingly
window.addEventListener('load', function () {
    if (window.innerWidth >= 768) {
        legendDiv.style.display = 'block';
        legendButton.style.display = 'none';
    } else {
        legendDiv.style.display = 'none';
        legendButton.style.display = 'block';
    }
});