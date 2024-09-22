let map;
let marker;

function initMap(lat, lon) {
    // Initialize the map centered at the user's location
    map = L.map('map').setView([lat, lon], 13); // Zoom level 13

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
}

function checkNearby() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const userLocation = [position.coords.latitude, position.coords.longitude];

            // Initialize and show the map
            initMap(userLocation[0], userLocation[1]);
            document.getElementById('map').style.display = 'block';
            document.getElementById('nearBy').style.display = 'block';

            // Add a marker for the user's location
            marker = L.marker(userLocation).addTo(map).bindPopup('You are here!').openPopup();

            // Fetch nearby equipment using Overpass API
            const query = `[out:json];node(around:5000,${userLocation[0]},${userLocation[1]})[amenity];out;`;
            fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`)
                .then(res => res.json())
                .then(equipmentData => {
                    equipmentData.elements.forEach(element => {
                        const equipmentMarker = L.marker([element.lat, element.lon]).addTo(map);
                        equipmentMarker.bindPopup(`Equipment: ${element.tags.name || 'Unknown'}`);
                    });
                });
        }, error => {
            alert('Unable to retrieve your location.');
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

// Event listener for the button
document.getElementById('checkNearbyButton').onclick = checkNearby;