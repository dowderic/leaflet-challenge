//Eric Dowd's Javascript code for Leaflet homework




// storing datasource in a variable
var quakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// utilizing D3 to query URL and send the JSON data to an object c
d3.json(quakeUrl, function(data) {
  createFeatures(data.features);
});




// Create a map object with starting coordinates
// var myMap = L.map("map", {
//   center: [15.5994, -28.6731],
//   zoom: 3
// });

// L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//   tileSize: 512,
//   maxZoom: 18,
//   zoomOffset: -1,
//   id: "mapbox/streets-v11",
//   accessToken: API_KEY
// }).addTo(myMap);