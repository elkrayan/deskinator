"use strict";

window.onload = async () => {
    await getCurrentWeather('brussels');
    document.querySelector('#date').innerHTML = getDate();
    setInterval( () => {
        document.querySelector('#time').innerHTML = getHour();
    })
}





function getHour(){
    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }
      
      const d = new Date();
      let h = addZero(d.getHours());
      let m = addZero(d.getMinutes());
      let s = addZero(d.getSeconds());
      let time = h + ":" + m + ":" + s;
      return time;
}
function getDate(){
    let d = new Date();
    let dayFr = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    let monthFr = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septemblre', 'octobre', 'novembre', 'décembre'];

    let date = dayFr[d.getDay()] + " " + d.getDate() + " " + monthFr[d.getMonth()] + " " + d.getFullYear();

    return date;

}
let getCurrentWeather = async (city) => {
    const key = '45c3e13a8fe167b17de291f1c4d28b8f';
    const lang = 'FR';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&units=metric&appid=${key}`)
        .then(response => response.json())
        .then(data => displatWeather(data));
}

let displatWeather = (data) => {
    console.log(data)
    let temps = [`${Math.round(data.main.temp_min)}°C`,`${Math.round(data.main.temp_max)}°C`,`${Math.round(data.main.feels_like)}°C`];
    let currentTemp = `${Math.round(data.main.temp)}°C`;

    document.querySelector("html body main div.row.middle-module div.col.half div.module.full.weather.col div.row div.now-weather p")
        .innerHTML = currentTemp;
    
    let count = 0;
    let text = ['min', 'max', 'ressenti'];
    for (let temp of temps){
        let el = document.createElement('li');
        el.textContent = `${text[count]}: ${temp}`;
        document.getElementById('weatherDetail').append(el);
        count++;
    }

}
/* let displayCurrentWeather = (data) => {
    // http://openweathermap.org/img/wn/10d@2x.png
    console.log(data);
    let temps = [`${Math.round(data.main.temp_min)}°C`,`${Math.round(data.main.temp_max)}°C`,`${Math.round(data.main.feels_like)}°C`];
    let currentTemp = `${Math.round(data.main.temp)}°C`;
    document.getElementById('currentTemp').innerHTML = currentTemp;
    for (let temp of temps){
        let el = document.createElement('h3');
        el.textContent = temp;
        document.getElementById('tempInfo').append(el);
    }

    for (let weather of data.weather){
        let icon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
        let img = document.createElement('img');
        img.setAttribute('src', icon);
        document.getElementById('weatherIcon').append(img);

        let description = weather.description;
    }

} */