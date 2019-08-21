const icon = document.getElementById("icon");
const temp = document.getElementById("temp");
const place = document.getElementById("place");
const time = document.getElementById("time");
const name = document.getElementById("name");
const input = document.getElementById("input");

function showTime(){
    const now = new Date();
    time.innerText = now.toLocaleTimeString().slice(3);
}

setInterval(showTime,1000);

input.onchange = function(){
    console.log(input.value);
    localStorage.setItem("name",input.value);
}

function showName(){
    name.innerText = localStorage.getItem("name");
    input.style.display = "none";
    name.style.display = "inline-block";
}

name.onclick = function(){
    input.style.display = "inline-block";
    input.value = nameinnerText;
    name.style.display = "none";
}


showName();

function showWeather(){
    navigator.geolocation.getCurrentPosition(position=>getWeather(position.coords),e=>console.log(e.message));
}

async function getWeather({latitude,longitude}){
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2313f72f528ba9b181f713691469a1df&units=metric`);
    console.log(latitude,longitude);
    const data = await result.Json();
    temp.innerText = data.main.temp+"℃";
    place.innerText = data.name
    data.weather[0].main
}

showWeather();
