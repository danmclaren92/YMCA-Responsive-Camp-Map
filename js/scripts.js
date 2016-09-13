//Create map properties
var map = L.map('image-map', {
  minZoom: 4,
  maxZoom: 6,
  center: [0, 0],
  zoom: 5,
  crs: L.CRS.Simple
});
//--Create map properties--

//Dimensions of the image
var w = 1170,
    h = 904,
    url = 'Camp-Map.jpg';
//--Dimensions of the image--

//Copyright Text
L.tileLayer('http://www.colorhexa.com/dddddd.png', {
    attribution: '&copy; <a href="http://www.ymca.ca/">YMCA Canada</a>',
    maxZoom: 6
 }).addTo(map);
 map.attributionControl.setPrefix(''); // Don't show the 'Powered by Leaflet' text.
//--Copyright Text--

//calculate the edges of the image, in coordinate space
var southWest = map.unproject([0, h], map.getMinZoom()+1);
var northEast = map.unproject([w, 0], map.getMinZoom()+1);
var bounds = new L.LatLngBounds(southWest, northEast);
//--Calculate edges of the image--

//Add the image overlay so that it covers the entire map
L.imageOverlay(url, bounds).addTo(map);
//--Add the image overlay--

// Tell leaflet that the map is exactly as big as the image
map.setMaxBounds(bounds);
//--Tell leaflet that the map is exactly as big as the image--

//Detect the size of the browser, after pageload or resize, and set the dimensions of the map to be the same as the dimensions of the image to ensure it resizes correctly
$(window).on('orientationchange pageshow resize', function () {
    $("#image-map").height(southWest);
    $("#image-map").width(northEast);
    map.invalidateSize();
}).trigger('resize');
//--Detect the size of the browser, and set the dimensions of the map to be the same--

//Define new marker style
var RedIcon = L.Icon.Default.extend({
   options: {
       iconUrl: 'marker-icon-red.png'
   }
});
var redIcon = new RedIcon();
//--Define new marker style--

//--BEGIN MARKERS--
//Add marker to Dining Hall
L.marker([-12, 18.9375], {icon: redIcon}).addTo(map)
    .bindPopup('Customizable popup! <br><br> <img src="https://gv.ymca.ca/CWP/media/YGV/ymcagv.png" style="max-width: 100%;" />')

//Add marker to Upper Archery
L.marker([-9.6875, 8.49375], {icon: redIcon}).addTo(map)
    .bindPopup('Customizable popup! <br><br> <img src="https://gv.ymca.ca/CWP/media/YGV/ymcagv.png" style="max-width: 100%;" />')

//Add marker to Lower Archery
L.marker([-19.1875, 10.15625], {icon: redIcon}).addTo(map)
    .bindPopup('Customizable popup! <br><br> <img src="https://gv.ymca.ca/CWP/media/YGV/ymcagv.png" style="max-width: 100%;" />')

//Add marker to Cabins
L.marker([-7.875, 28.53125], {icon: redIcon}).addTo(map)
    .bindPopup('Customizable popup! <br><br> <img src="https://gv.ymca.ca/CWP/media/YGV/ymcagv.png" style="max-width: 100%;" />')

//Add marker to Wash Hut
L.marker([-5.4375, 22.96875], {icon: redIcon}).addTo(map)
    .bindPopup('Customizable popup! <br><br> <img src="https://gv.ymca.ca/CWP/media/YGV/ymcagv.png" style="max-width: 100%;" />')

//Add marker to Rec Hall
L.marker([-19.3125, 29.78125], {icon: redIcon}).addTo(map)
    .bindPopup('Customizable popup! <br><br> <img src="https://gv.ymca.ca/CWP/media/YGV/ymcagv.png" style="max-width: 100%;" />')

//Add marker to Boat House
L.marker([-23.375, 10.125], {icon: redIcon}).addTo(map)
    .bindPopup('Customizable popup! <br><br> <img src="https://gv.ymca.ca/CWP/media/YGV/ymcagv.png" style="max-width: 100%;" />')

//Add marker to E-Lodge
L.marker([-22.09375, 4.34375], {icon: redIcon}).addTo(map)
    .bindPopup('Customizable popup! <br><br> <img src="https://gv.ymca.ca/CWP/media/YGV/ymcagv.png" style="max-width: 100%;" />')

//Add marker to Ad Hall
L.marker([-18.21875, 20.8125], {icon: redIcon}).addTo(map)
    .bindPopup('Customizable popup! <br><br> <img src="https://gv.ymca.ca/CWP/media/YGV/ymcagv.png" style="max-width: 100%;" />')
//--END MARKERS--

//Open a popup with the related info when the user clicks the indicator

/*
var popup = L.popup();
map.on('click', function(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
});
*/
