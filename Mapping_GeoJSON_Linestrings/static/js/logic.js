// Add console.log to check to see if our code is working.
console.log("working");

// Create the light view tile layer that will be the default background of the map.
let light = L.tileLayer(
    'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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
    // "Light" and "Dark" set the text on the control of the map
    // "light" and "dark" reference the tile layers
    Light: light,
    Dark: dark
};

// Create the map object with center, zoom level, and default layer.
let map = L.map("mapid", {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [dark],
});

// Pass the map layers into the layers control and add the layers.
// baseMaps is the base layer object.
L.control.layers(baseMaps).addTo(map)

// Access the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/fobordo/Mapping_Earthquakes/main/torontoRoutes.json";

// Create a style for the airline route lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// Get the GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data)
    // Create a GeoJSON layer with the retrieved data.
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            layer.bindPopup(
                `<h3> Airline: ${feature.properties.airline} </h3>
                <hr>
                <h3> Destination: ${feature.properties.dst} </h3>`
            )
        }
    })
    .addTo(map)
});