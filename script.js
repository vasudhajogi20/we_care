let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
function initMap() {
    var myLatLng = { lat: -34.397, lng: 150.644 }; // Initial coordinates
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8, // Initial zoom level
        center: myLatLng, // Initial center coordinates
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Hello World!", // Marker tooltip
    });
}