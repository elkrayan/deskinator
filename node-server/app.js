const express = require('express');
const { createServer } = require('http');
const { createConnection } = require('net');
const { Server } = require('socket.io');

const mysql = require('mysql2')

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'rayan',
    password: '11Eklate',
    database: 'deskinator'
})


let waitList = [];


io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('deskCall', (value) => {
        console.log('\n---------- NEW CALL ----------');
        console.log(`Desk ${value} is calling a new patient`);

        // Send to public
        io.emit('toPublic', value);

    });
    socket.on('arrivedDesk', (value) => {
        console.log('\n---------- ARRIVED ----------');
        console.log(`Patient at Desk ${value} is arrived`);

        // Send to public
        io.emit('removreFromList', value);
    })
})

// PUBLIC
app.get('/', (req, res) => {
    res.send('Hello World');
})
app.get('/sql', (req, res) => {
    connection.query(
        `SELECT * FROM statistics`,
        (err, result) => {
            console.log(result);
            res.send(result);
        }
    )
})


httpServer.listen(3000);
