'use strict';

const stops = ['0722', '0726', '2671'];
const albert = '0722';

let stopsDetail = [];
let stopPassingTime = [];

window.onload = async () => {
    for(let id of stops){
        //await stopDetail(key, id);
        await passingTime(key, id);
    }
}

let stopDetail = async (key, id) => {
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

            let obj = {
                'stopId': id,
                'name': name,
                'gps': gps
            }
            stopsDetail.push(obj);
        })
}

let passingTime = async (key, stopId) => {
    fetch(`https://opendata-api.stib-mivb.be/OperationMonitoring/4.0/PassingTimeByPoint/0722`, {
            headers: {
                'Accept': "aplpication/json",
                "Authorization": `Bearer ${key}`
            }
        })
        .then(response => response.json())
        .then(data => {
            data.points.forEach(point => {
                point.passingTimes.forEach(passingTime => {
                    stopPassingTime.push(passingTime);
                })
            });
        })
}