const express = require('express');
const { createServer } = require('http');
const { createConnection } = require('net');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

let waitList = [];

io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('deskCall', (value) => {
        console.log('\n---------- NEW CALL ----------');
        console.log(`Desk ${value} is calling a new patient`);
        // TODO: Check if value already in waitList
        waitList.unshift(value);
        console.log(`Actual waiting list ${waitList}`);

    });
    socket.on('arrivedDesk', (value) => {
        console.log('\n---------- ARRIVED ----------');
        console.log(`Patient at Desk ${value} is arrived`);
        let index = waitList.indexOf(value);
        waitList.splice(index)
        console.log(`Actual waiting list ${waitList}`);
    })
})

// PUBLIC
app.get('/', (req, res) => {
    res.send('Hello World 2');
})


httpServer.listen(3000);