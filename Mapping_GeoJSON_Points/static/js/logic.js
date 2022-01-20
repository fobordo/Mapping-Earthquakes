// Add console.log to check to see if our code is working.
console.log("working");

// Create the street view tile layer that will be the default background of the map.
let streets = L.tileLayer(
    'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
});

// Create the dark view tile layer that will be an option for the map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    // "Street" and "Dark" set the text on the control of the map
    // "streets" and "dark" reference the tile layers
    Street: streets,
    Dark: dark
};

// // setView() method
// // Create the map object with center and zoom level.
// let map = L.map("mapid").setView([30, 30], 2);

// alternative to setView() method
// Create the map object with center, zoom level, and default layer.
let map = L.map("mapid", {
    center: [30, 30],
    zoom: 2,
    layers: [streets],
});

// Pass the map layers into the layers control and add the layers.
// baseMaps is the base layer object.
L.control.layers(baseMaps).addTo(map)

// Access the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/fobordo/Mapping_Earthquakes/main/majorAirports.json";

// Get the GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data)
    // Create a GeoJSON layer with the retrieved data.
    L.geoJSON(data, {
        // Turn each feature into a marker on the map.
        onEachFeature: function(feature, layer) {
            console.log(layer)
            layer.bindPopup(
                `<h3> Airport code: ${feature.properties.faa} </h3> 
                <hr> 
                <h3> Airport name: ${feature.properties.name} </h3>`
            )
        }
    })
    .addTo(map)
});