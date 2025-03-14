// Function to set up layer toggle switches (same as before)
function setupLegendToggles() {
    const legendMappings = [
        { checkbox: 'cycleStreetsToggle', layer: 'cycleStreets' },
        { checkbox: 'localBusRoutesToggle', layer: 'localBusRoutes' },
        { checkbox: 'localBusStopsToggle', layer: 'localBusStops' },
        { checkbox: 'bikeSharingToggle', layer: 'bikeSharing' },
        { checkbox: 'mobilityHubToggle', layer: 'mobilityHub' },
        { checkbox: 'oasaStopsToggle', layer: 'oasaStops' },
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
const legendButton = document.getElementById('legendButton');
const legendDiv = document.getElementById('legend');

// Toggle legend display on button click
legendButton.addEventListener('click', function () {
    if (legendDiv.style.display === 'block') {
        legendDiv.style.display = 'none';
    } else {
        legendDiv.style.display = 'block';
    }
});

// Optionally, show legend on hover over the button
legendButton.addEventListener('mouseenter', function () {
    legendDiv.style.display = 'block';
});
legendButton.addEventListener('mouseleave', function () {
    // Optionally hide legend after a slight delay (if not toggled open)
    setTimeout(() => {
        // Check if the mouse is over the legend
        if (!legendDiv.matches(':hover')) {
            legendDiv.style.display = 'none';
        }
    }, 300);
});

// Also keep the legend visible if the mouse is over it
legendDiv.addEventListener('mouseenter', function () {
    legendDiv.style.display = 'block';
});
legendDiv.addEventListener('mouseleave', function () {
    legendDiv.style.display = 'none';
});
