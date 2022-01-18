// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// The mapid will reference the id tag in our <div> element on the index.html file.
// The setView() method sets the view of the map with a geographical center, where the first coordinate is
// latitude (40.7) and the second is longitude (-.94.5). We set the zoom level of "4" on a scale 0-18.
let map = L.map("mapid").setView([40.7, -94.5], 4);

// An alternative to using the setView() method is to modify each attribute in the map object
// using the curly braces notation as follows:
//let map = L.map("mapid", {
//    center: [40.7, -94.5],
//    zoom: 4
//});

// The tile layer is used to load and display a tile layer on the map.
// We create the tile layer that will be the background of our map.
// The API URL with a reference to the accessToken
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
// The addTo() function will add the graymap object tile layer to our let map.
streets.addTo(map);