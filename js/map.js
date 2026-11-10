// ---------- Change these to your academy's details ----------
const academyLocation = [-29.8587, 31.0218];   // [latitude, longitude] - central Durban; replace with your exact spot
const academyName = "Pawsitive Pet Academy";
const academyAddress = "45 Pet Lane<br>Durban, 4001<br>South Africa";
 
// ---------- Create the map ----------
// "map" is the id of the <div> in contact.html; 15 is the zoom level (1 = world, 18 = street)
const map = L.map("map").setView(academyLocation, 15);
 
// ---------- Load the map tiles (CARTO tiles, built from OpenStreetMap data) ----------
L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    subdomains: "abcd",
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
}).addTo(map);
 
// ---------- Add a pin with a popup ----------
L.marker(academyLocation)
    .addTo(map)
    .bindPopup("<b>" + academyName + "</b><br>" + academyAddress)
    .openPopup();
