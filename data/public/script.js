function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.579609, lng: 36.946812 },
        zoom: 8,
        mapId: '54ec69962ab64cbf',
        mapTypeControl: false,
        fullscreenControl: false,
    });


    const markers = [
        [
            "Tent Avaliable",
            37.579609,
            36.946812,
            "./img/tent.png",
            38,
            31
        ],
        [
            "Tent Avaliable",
            37.896530,
            37.577144,
            "./img/tent.png",
            38,
            31
        ],
        [
            "Tent Avaliable",
            37.861844,
            38.368676,
            "./img/tent.png",
            38,
            31
        ],
        [
            "Vehicle Avaliable",
            36.981712,
            36.617697,
            "./img/vehicle.png",
            38,
            31
        ],
        [
            "Vehicle Avaliable",
            37.532599,
            37.249823,
            "./img/vehicle.png",
            38,
            31
        ],
        [
            "Vehicle Avaliable",
            37.414891,
            36.689815,
            "./img/vehicle.png",
            38,
            31
        ],
        [
            "Food Avaliable",
            36.907078,
            37.695516,
            "./img/water-bottle.png",
            38,
            31
        ],
        [
            "Food Avaliable",
            36.858746,
            37.041402,
            "./img/water-bottle.png",
            38,
            31
        ],
        [
            "Food Avaliable",
            37.528243,
            38.124467,
            "./img/water-bottle.png",
            38,
            31
        ]
    ];

    for(let i = 0; i<markers.length; i++){
        const currMarker = markers[i];

        const marker = new google.maps.Marker({
            position: { lat: currMarker[1], lng: currMarker[2] },
            map,
            title: currMarker[0],
            icon: {
                url: currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
            },
            animation: google.maps.Animation.DROP
        });

        const infowindow = new google.maps.InfoWindow({
            content: currMarker[0],
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
            });

    }
}
window.initMap = initMap;

