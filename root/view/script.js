// Leaflet map initialization
var map = L.map("map").setView([0, 0], 2);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Plot Records on map
async function disRecords() {
  const response = await fetch("/weather");
  const res_json = await response.json();

  //Display records
  //console.log(res_json);
  recordsDiv.append("Weather reports:");
  for (items of res_json) {
    const div = document.createElement("div");
    const hr = document.createElement("hr");
    div.textContent = `➥ ${items.weather}`;
    recordsDiv.append(div, hr);
  }
  recordsDiv.style.padding = "50px";

  for (items of res_json) {
    var marker = L.marker([items.latitude, items.longitude]).addTo(map);
    marker.bindPopup(items.weather).addTo(map);
    //map.setView([items.latitude, items.longitude], 5);
  }
}
disRecords();

// Display coords on clicked location
var popup = L.popup();
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}
map.on("click", onMapClick);

// toggle b/w map and records
const mapButton = document.getElementById("map-button");
const recordsButton = document.getElementById("records-button");
const mapDiv = document.getElementById("map");
const recordsDiv = document.getElementById("records-div");

mapButton.addEventListener("click", function () {
  mapDiv.style.display = "block";
  recordsDiv.style.display = "none";
});

recordsButton.addEventListener("click", function () {
  recordsDiv.style.display = "block";
  mapDiv.style.display = "none";
});
