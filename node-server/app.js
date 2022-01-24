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
    res.send('Hello World 2');
})


httpServer.listen(3000);