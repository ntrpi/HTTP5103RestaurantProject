// Initialize and add the map
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.451637, lng: -80.492531 },
    zoom: 13,
    });

    //Downtown Kitchener BIA - 54 Queen St S, Kitchener, ON N2G 1V6
    new google.maps.Marker ({
        position: { lat: 43.429451, lng: -80.526451 },
        map,
        title: "Hi"
    });
    //North Ward - 428 Lancaster St W, Kitchener, ON N2H 4V9
    new google.maps.Marker ({
        position: { lat: 43.472260, lng: -80.483760 },
        map,
        title: "Hi"
    });
    //King East - 120 Ottawa St N, Kitchener, ON N2H 3K4
    new google.maps.Marker ({
        position: { lat: 43.449400, lng: -80.448720 },
        map,
        title: "Hi"
    });
    //Victoria Hills - 805 Victoria St S, Kitchener, ON N2M 2E2
    new google.maps.Marker ({
        position: { lat: 43.437350, lng: -80.523190 },
        map,
        title: "Hi"
    });
}