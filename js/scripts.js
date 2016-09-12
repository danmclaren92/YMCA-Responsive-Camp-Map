var map = L.map('image-map', {
  minZoom: 4,
  maxZoom: 6,
  center: [0, 0],
  zoom: 5,
  crs: L.CRS.Simple
});

//Dimensions of the image
var w = 1170,
    h = 904,
    url = 'Camp-Map.jpg';

//calculate the edges of the image, in coordinate space
var southWest = map.unproject([0, h], map.getMinZoom()+1);
var northEast = map.unproject([w, 0], map.getMinZoom()+1);
var bounds = new L.LatLngBounds(southWest, northEast);

//Add the image overlay,
//So that it covers the entire map
L.imageOverlay(url, bounds).addTo(map);

// Tell leaflet that the map is exactly as big as the image
map.setMaxBounds(bounds);

//Detect the size of the browser, after pageload or resize, and set the dimensions of the map to be the same as the dimensions of the image to ensure it resizes correctly
$(window).on('orientationchange pageshow resize', function () {
    $("#image-map").height(southWest);
    $("#image-map").width(northEast);
    map.invalidateSize();
}).trigger('resize');


//Add marker to Dining Hall
L.marker([-12, 18.9375]).addTo(map)
    .bindPopup('Customizable popup! <br> Still works on mobile too!')

//Add marker to Upper Archery
L.marker([-9.6875, 8.49375]).addTo(map)
    .bindPopup('Customizable popup! <br> Still works on mobile too!')

//Add marker to Lower Archery
L.marker([-19.1875, 10.15625]).addTo(map)
    .bindPopup('Customizable popup! <br> Still works on mobile too!')

//Add marker to Cabins
L.marker([-7.875, 28.53125]).addTo(map)
    .bindPopup('Customizable popup! <br> Still works on mobile too!')

//Add marker to Wash Hut
L.marker([-5.4375, 22.96875]).addTo(map)
    .bindPopup('Customizable popup! <br> Still works on mobile too!')

//Add marker to Rec Hall
L.marker([-19.3125, 29.78125]).addTo(map)
    .bindPopup('Customizable popup! <br> Still works on mobile too!')

//Add marker to Boat House
L.marker([-23.375, 10.125]).addTo(map)
    .bindPopup('Customizable popup! <br> Still works on mobile too!')

//Add marker to E-Lodge
L.marker([-22.09375, 4.34375]).addTo(map)
    .bindPopup('Customizable popup! <br> Still works on mobile too!')

//Add marker to Ad Hall
L.marker([-18.21875, 20.8125]).addTo(map)
    .bindPopup('Customizable popup! <br> Still works on mobile too!')

//Open a popup with the related info when the user clicks the indicator

var popup = L.popup();
map.on('click', function(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
});
