// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center and zoom level.
let map = L.map("mapid").setView([30, 30], 2);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            // The coordinates appear in reverse order, compared to their order in the setView() method. 
            // This is b/c the GeoJSON data coordinates are set with the first parameter as X (longitude) 
            // and the second parameter as Y (latitude). The L.geoJSON() layer reverses the coordinates to 
            // plot them on the map.
            "coordinates":[-122.375,37.61899948120117]}}
]};

// // Without markers
// // Get the GeoJSON data.
// l.geoJSON(sanFranAirport).addTo(map);

// // Using the pointToLayer function
// // Get the GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // Turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//         console.log(feature)
//         return L.marker(latlng)
//         // Add a popup marker
//         .bindPopup('<h2>' + feature.properties.city + '</h2>')
//     }
// })
// .addTo(map);

// Using the onEachFeature function
// Get the GeoJSON data.
L.geoJSON(sanFranAirport, {
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
.addTo(map);

// Change the map style to "satellite-streets-v11."
let streets = L.tileLayer(
    'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Access the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/francescaobordo/Mapping_Earthquakes/main/majorAirports.json";