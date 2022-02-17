"use strict";
// SOCKET.IO

window.onload = async () => {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const port = params.get('port');
    console.log(port);

    setInterval(() => {
        resetPage();
    });

    await getCurrentWeather('brussels');
    document.querySelector('#date').innerHTML = getDate();
    setInterval(() => {
        document.querySelector('#time').innerHTML = getHour();
    });

    let messages = [
        "Respectez les gestes sanitaire ! Gardez 1.50m devant vous.",
        "Please, prepare your ID and test-invitation"
    ];
    document.getElementById('messageModule').innerHTML = messages[0];
    messageModule(messages);

    // SOCKET.IO
    const socket = io(`http://deskinator.nonante.brussels:${port}`);
    let waitingList = [];
    let deskDisplay = document.getElementById('desk').children;
    socket.on('toPublic', (desk) => {
        if (!waitingList.includes(desk)) {
            let p = document.createElement('p');
            p.textContent = `DESK ${desk}`;
            p.setAttribute('data-desk', desk);
            p.classList.add('active');
            document.getElementById('desk').append(p);

            document.getElementById('sound').play()

            waitingList.push(desk);

            if (waitingList.length >= 6) {
                let index = waitingList.indexOf(deskDisplay[0].getAttribute('data-desk'));
                waitingList.splice(index, 1);
                deskDisplay[0].remove();
                console.log(index, waitingList);
            }
        }
    })
    socket.on('removreFromList', (value) => {
        let index = waitingList.indexOf(value);
        waitingList.splice(index, 1);

        let displayDesk = document.getElementById('desk').children;
        for (let o of displayDesk) {
            if (o.getAttribute('data-desk') == value)
                o.classList.remove('active');
        }
    })
}

function resetPage(){
    let limit = '17:33:00';
    if(limit === getHour())
        location.reload()
}


function getHour() {
    function addZero(i) {
        if (i < 10) {
            i = "0" + i
        }
        return i;
    }

    const d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());
    let time = h + ":" + m + ":" + s;
    return time;
}

function getDate() {
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
    let temps = [`${Math.round(data.main.temp_min)}°C`, `${Math.round(data.main.temp_max)}°C`, `${Math.round(data.main.feels_like)}°C`];
    let currentTemp = `${Math.round(data.main.temp)}°C`;

    document.querySelector("html body main div.row.middle-module div.col.half div.module.full.weather.col div.row div.now-weather p")
        .innerHTML = currentTemp;
    for (let weather of data.weather) {
        document.getElementById('weatherImg').setAttribute('src', `http://openweathermap.org/img/wn/${weather.icon}@2x.png`);
    }

    let count = 0;
    let text = ['min', 'max', 'ressenti'];
    for (let temp of temps) {
        let el = document.createElement('li');
        el.textContent = `${text[count]}: ${temp}`;
        document.getElementById('weatherDetail').append(el);
        count++;
    }

}
let messageModule = (messages) => {
    let messageCount = 1;
    setInterval(() => {
        document.getElementById('messageModule').innerHTML = messages[messageCount++]
        if (messageCount >= messages.length)
            messageCount = 0;
    }, 5000)
}
