// Initialize and add the map
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.451637, lng: -80.492531 },
    zoom: 13,
    });

    //Downtown Kitchener BIA - 54 Queen St S, Kitchener, ON N2G 1V6
    new google.maps.Marker ({
        position: { lat: 43.449240, lng: -80.489850 },
        map,
        title: "Downtown Kitchener"
    });
    //North Ward - 428 Lancaster St W, Kitchener, ON N2H 4V9
    new google.maps.Marker ({
        position: { lat: 43.472260, lng: -80.483760 },
        map,
        title: "North Ward"
    });
    //King East - 120 Ottawa St N, Kitchener, ON N2H 3K4
    new google.maps.Marker ({
        position: { lat: 43.449400, lng: -80.448720 },
        map,
        title: "King East"
    });
    //Victoria Hills - 805 Victoria St S, Kitchener, ON N2M 2E2
    new google.maps.Marker ({
        position: { lat: 43.437350, lng: -80.523190 },
        map,
        title: "Victoria Hills"
    });
    //Forest Heights - 875 Highland Rd W, Kitchener, ON N2N 2Y2
    new google.maps.Marker ({
        position: { lat: 43.429451, lng: -80.526451 },
        map,
        title: "Forest Heights"
    });
    
    
    //Set on click to move the map to location: Downtown Kitchener
    var location1 = document.getElementById("dkb");
    location1.addEventListener("click", start1);
    function start1(){
        map.setZoom(17);
        map.setCenter({ lat: 43.449240, lng: -80.489850 });
    };
    //Set on click to move the map to location: North Ward
    var location2 = document.getElementById("nw");
    location2.addEventListener("click", start2);
    function start2(){
        map.setZoom(17);
        map.setCenter({ lat: 43.472260, lng: -80.483760 });
    };
    //Set on click to move the map to location: King East
    var location3 = document.getElementById("ke");
    location3.addEventListener("click", start3);
    function start3(){
        map.setZoom(17);
        map.setCenter({ lat: 43.449400, lng: -80.448720 });
    };
    //Set on click to move the map to location: Victoria Hills
    var location4 = document.getElementById("vh");
    location4.addEventListener("click", start4);
    function start4(){
        map.setZoom(17);
        map.setCenter({ lat: 43.437350, lng: -80.523190 });
    };
    //Set on click to move the map to location: Forest Heights
    var location5 = document.getElementById("fh");
    location5.addEventListener("click", start5);
    function start5(){
        map.setZoom(17);
        map.setCenter({ lat: 43.429451, lng: -80.526451 });
    };
    
}






