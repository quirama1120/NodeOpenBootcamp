let marker, map;
let marker2, marker3;

function initMap() {

    const posicion = {
        lat: 39.45791581781802, 
        lng: -0.456232419653928
    }
    const posicion2 = {
        lat:6.167125815771899, 
        lng:-75.59568839987362
    }
    const posicion3 = {
        lat:12.590014756498414, 
        lng:-81.7079536373578
    }
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: posicion
    })
    
    marker = new google.maps.Marker({
        position: posicion2,
        map,
        title: "hogar"
    })
    marker2 = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posición Inicial"
    })
    marker3 = new google.maps.Marker({
        position: posicion3,
        map,
        title: "paseito"
    })
}

//     geoPosiciona()
// }

// function geoPosiciona() {
//     if (navigator.geolocation) {
//         const geoLoc = navigator.geolocation
//         const options = { timeout: 60000 }
//         const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
//     } else {
//         alert("Tu navegador no admite geolocalización")
//     }
// }

// function centraMapa(position) {
//     const nuevaPos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//     }
//     marker.setPosition(nuevaPos)
//     map.setCenter(nuevaPos)
// }

// function onError(error) {
//     console.log("Se ha producido un error y lo hemos gestionado")
//     console.error(error)
// }

window.initMap = initMap;
