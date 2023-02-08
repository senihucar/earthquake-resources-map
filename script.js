
function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    mapId: "54ec69962ab64cbf",
    center: { lat: 37.579609, lng: 36.946812 },
    zoom: 12,
  });
}

window.initMap = initMap;
