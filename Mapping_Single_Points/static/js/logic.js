// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid").setView([34.0522, -118.2437], 14);

// The tile layer is used to load and display a tile layer on the map. This is the default tile layer.
/* let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
}); */

// This tile layer creates a dark background.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Add a marker to the map for Los Angeles, California.

// Using the marker() function
/* let marker = L.marker([34.0522, -118.2437]).addTo(map); */

// Using the circle() function
/* L.circle([34.0522, -118.2437], {
    radius: 100
}).addTo(map); */

// Using the circleMarker() function
// This creates a light-yellow cirle with black lines indicating a 300-pixel radius on a dark map
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: "#ffffa1"
}).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

