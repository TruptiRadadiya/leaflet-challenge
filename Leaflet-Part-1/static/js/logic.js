// Create the map
let myMap = L.map("map", {
  center: [0, 0],
  zoom: 3,
});

// Add a tile layer to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

// Define the GeoJSON URL for earthquake data
let url =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Function to determine marker size based on earthquake magnitude
function getRadius(magnitude) {
  return magnitude * 4;
}

// Function to determine marker color based on earthquake depth
function getColor(depth) {
  return depth >= 90
    ? "#800026"
    : depth >= 70
    ? "#BD0026"
    : depth >= 50
    ? "#E31A1C"
    : depth >= 30
    ? "#FC4E2A"
    : depth >= 10
    ? "#FD8D3C"
    : depth >= -10
    ? "#FEB24C"
    : "#FFEDA0";
}

// Getting our GeoJSON data
d3.json(url).then(function (data) {
  // Function to create a circle marker
  function createCircleMarker(feature, latlng) {
    let options = {
      radius: getRadius(feature.properties.mag),
      fillColor: getColor(feature.geometry.coordinates[2]),
      color: "#000",
      weight: 1,
      fillOpacity: 1,
    };
    return L.circleMarker(latlng, options);
  }

  // Function to add popups
  function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.place) {
      layer.bindPopup(
        `<h3>${feature.properties.place}</h3><hr><p>Magnitude: ${feature.properties.mag}<br>Depth: ${feature.geometry.coordinates[2]} km</p>`
      );
    }
  }

  // Add GeoJSON data to the map
  L.geoJSON(data, {
    pointToLayer: createCircleMarker,
    onEachFeature: onEachFeature,
  }).addTo(myMap);
});

// Add a legend to the map
var legend = L.control({ position: "bottomright" });

legend.onAdd = function (map) {
  var div = L.DomUtil.create("div", "legend"),
    grades = [-10, 10, 30, 50, 70, 90];

  // loop through depth intervals and generate a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
      '<i style="background:' +
      getColor(grades[i] + 1) +
      '"></i> ' +
      grades[i] +
      (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
  }

  return div;
};

legend.addTo(myMap);
