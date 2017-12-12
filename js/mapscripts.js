"use strict";

function initMap() {
  let odense = {lat: 55.371381, lng: 10.449028};
  let elmiavagen = {lat: 57.787591, lng: 14.230723};
  let london = {lat: 51.503038, lng: 0.003154};
  let katowice = {lat: 50.266053, lng: 19.02537};
  let mapDemo = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 4,
    center: odense
  });

  // these set different markers you want to show on your map
  let markerOdense = new google.maps.Marker({
    position: odense,
    map: map,
    title: 'Pro League Season 6 Finals'
  });
  let markerElmiavagen = new google.maps.Marker({
    position: elmiavagen,
    map: map,
    title: 'Dreamhack Winter 2017'
  });
	let markerKatowice = new google.maps.Marker({
	position: katowice,
	map: map,
	title: 'IEM Katowice 2018'
});
	let markerLondon = new google.maps.Marker({
	position: london,
	map: map,
	title: 'ESEA Pro League Season 3 Finals'
});
}
