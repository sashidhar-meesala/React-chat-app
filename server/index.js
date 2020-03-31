const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const router = require('./router');
const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

io.on('conection',(socket)=>{
    console.log('we have a new connection');
    socket.on('join',()=>{
        console.log(name,room);
    })
    socket.on('disconnect',()=>{
        console.log('user has disconnected')
    })
});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));