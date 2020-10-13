const map = L.map('mapid').setView([38.62, -9.10], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([38.711, -8.98]).addTo(map)
    .bindPopup('ABRIGO - Associação Portuguesa de Apoio à Criança.')
    .openPopup();

L.marker([38.62, -9.10]).addTo(map)
    .bindPopup('ABRIGO - Associação Portuguesa de Apoio à Criança.')
    .openPopup();

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
}).setContent('ABRIGO - Associação Portuguesa de Apoio à Criança. <a href=""')

// vou em 1h32:14 - day 2
