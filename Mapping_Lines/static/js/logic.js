// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map("mapid").setView([36.1733, -120.1794], 5);

// Coordinates for each point to be used in the polyline.
let line = [
    // Starting point of the line: Los Angeles International Airport (LAX)
    [33.9416, -118.4085],
    // San Francisco International Airport (SFO)
    [37.6213, -122.3790],
    // Salt Lake City Internation Airport (SLC)
    [40.7899, -111.9791],
    // Ending point of the line: Seattle-Tacoma Internation Airport (SEA)
    [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
}).addTo(map);

// Change the map style to "satellite-streets-v11."
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);