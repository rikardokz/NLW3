const map = L.map('mapid').setView([38.62, -9.10], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// icon created
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent('ABRIGO - Proteção Criança <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"/></a>')

// markers

L.marker([38.711, -8.98], { icon }).addTo(map)
    .bindPopup(popup)
    
