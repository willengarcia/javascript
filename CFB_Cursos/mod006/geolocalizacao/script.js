const long = document.getElementById('long')
const lati = document.getElementById('lati')
let geo = navigator.geolocation.getCurrentPosition(getGeolocalizacao)
function getCEP(latitude ,longitude) {
    var url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.address && data.address.postcode) {
                console.log("CEP: " + data.address.postcode);
            } else {
                console.log('Nenhum CEP encontrado');
            }
        })
        .catch(error => {
            console.log('Erro:', error);
        });
}
function getGeolocalizacao(pos){
    return pos.coords.longitude, pos.coords.latitude
}
window.addEventListener('load', ()=>{
    getCEP(geo[0], geo[1])
})
