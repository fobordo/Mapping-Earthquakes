// Add console.log to check to see if our code is working.
console.log("working");

// Create the street view tile layer that will be the default background of the map.
let streets = L.tileLayer(
    'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
});

// Create the satellite street view tile layer that will be an option for the map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};

// Create the map object with center, zoom level, and default layer.
let map = L.map("mapid", {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [satelliteStreets]
});

// Pass the map layers into the layers control and add the layers.
// baseMaps is the base layer object.
L.control.layers(baseMaps).addTo(map)

// Access the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/fobordo/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Get the GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data)
    // Create a GeoJSON layer with the retrieved data.
    L.geoJSON(data).addTo(map)
    // {
    //     // Turn each feature into a marker on the map.
    //     onEachFeature: function(feature, layer) {
    //         console.log(layer)
    //         layer.bindPopup(
    //             `<h3> Airport code: ${feature.properties.faa} </h3> 
    //             <hr> 
    //             <h3> Airport name: ${feature.properties.name} </h3>`
    //         )
    //     }
    // })
    // .addTo(map)
});