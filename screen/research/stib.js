class Stib {
    constructor(id) {
        this.id = id;
        this.nameFr = this.getName().fr;
        this.nameNl = this.getName().nl;
        this.key = '4691dcd17940aa998998ec9deac1998e';
    }

    getName(){
        fetch(`https://opendata-api.stib-mivb.be/NetworkDescription/1.0/PointDetail/${this.id}`, {
            headers: {
                'Accept': "aplpication/json",
                "Authorization": `Bearer ${this.key}`
            }
        })
        .then(response => response.json())
        .then(data => {
            return data.points[0].name;
        })
    }

    getInfo(){
        fetch(`https://opendata-api.stib-mivb.be/NetworkDescription/1.0/PointDetail/${this.id}`, {
            headers: {
                'Accept': "aplpication/json",
                "Authorization": `Bearer ${this.key}`
            }
        })
        .then(response => response.json())
        .then(data => {
            this.name = data.points[0].name;
            this.gps = data.points[0].gpsCoordinates;
        })
    }

    getPassingTime(){
        fetch(`https://opendata-api.stib-mivb.be/OperationMonitoring/4.0/PassingTimeByPoint/${id}`, {
            headers: {
                'Accept': "aplpication/json",
                "Authorization": `Bearer ${this.key}`
            }
        })
        .then(response => response.json())
        .then(data => {
            data.points.foreach(point => {
                point.foreach(passingTime => {
                    return passingTime;
                })
            })
        })
    }
}