"use strict";
// SOCKET.IO

window.onload = async () => {
    await getCurrentWeather('brussels');
    document.querySelector('#date').innerHTML = getDate();
    setInterval(() => {
        document.querySelector('#time').innerHTML = getHour();
    });

    let messages = ["Hello", "World", "Forest", "Covid"];
    document.getElementById('messageModule').innerHTML = messages[0];
    messageModule(messages);

    //STIB
    const key = '60102c60c7590c237c2b654e2a29bbb1';
    await stopDetail(key, '0722');

    // SOCKET.IO
    const socket = io('http://localhost:3000');
    let waitingList = [];
    let deskDisplay = document.getElementById('desk').children;
    socket.on('toPublic', (desk) => {
        if (!waitingList.includes(desk)) {
            let p = document.createElement('p');
            p.textContent = desk;
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


async function stopDetail(key, id) {
    let obj = {};
    fetch(`https://opendata-api.stib-mivb.be/NetworkDescription/1.0/PointDetail/${id}`, {
            headers: {
                'Accept': "aplpication/json",
                "Authorization": `Bearer ${key}`
            }
        })
        .then(response => response.json())
        .then(data => {
            let gps = data.points[0].gpsCoordinates;
            let name = data.points[0].name;

            obj = {
                'stopId': id,
                'name': name,
                'gps': gps
            }
        })
        console.log(obj);
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
