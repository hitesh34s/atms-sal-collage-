// Initialize Google Map
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 }, // Default location (San Francisco)
        zoom: 12,
    });
}

// Function to find "Where is My Bus"
document.getElementById("findMyBus").addEventListener("click", () => {
    alert("Real-time bus tracking feature will be implemented here.");
    // TODO: Integrate GPS tracking API for real-time bus locations
});

// Function to find a route
document.getElementById("findRoute").addEventListener("click", () => {
    alert("Route finding feature will be implemented here.");
    // TODO: Implement Google Maps Directions API for route finding
});

// Function to find nearby stops
document.getElementById("showNearbyStops").addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setCenter(userLocation);
            new google.maps.Marker({
                position: userLocation,
                map: map,
                title: "You are here",
            });

            alert("Showing nearby bus stops.");
            // TODO: Fetch and display nearby bus stops from an API
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

// Function to apply for a bus pass
document.getElementById("applyBusPass").addEventListener("click", () => {
    alert("Redirecting to bus pass application.");
    window.location.href = "bus-pass.html"; // Change to actual application page
});

// Function to show help
document.getElementById("showHelp").addEventListener("click", () => {
    alert("Help section will be implemented here.");
    // TODO: Add FAQ or chatbot functionality
});

// Load the map when the page loads
window.onload = initMap;
