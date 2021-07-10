
const API_KEY = "41ebb238866a06e3eaba04fc263fc6ad"




function onGeoOk(position){
    const API_KEY = "41ebb238866a06e3eaba04fc263fc6ad"
    const lat = position.coords.latitude;

    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric&units=metric`;
    console.log("you live in ",lat,log);
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText= data.name;
        weather.innerText = `${data.main.temp}°C/${data.weather[0].main}`;
    });

}

function onGeoError(){
    alert("can't find you. No weather for you.")
}



navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);



