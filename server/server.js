const express = require('express');
const app = express();
const http = require('http');
const {Server} = require('socket.io')
const cors = require('cors');
require('dotenv').config()

app.use(cors());

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "https://poly-u.netlify.app",
        methods: ["GET", "POST"],
    }
})

io.on('connection', (socket) => {
    console.log(`User Connected: ${socket.id}`)
    socket.on("send_message", (data) => {
        socket.broadcast.emit("receive_message", data)
    })
})

server.listen(process.env.PORT, () => {
    console.log('Server running')
})