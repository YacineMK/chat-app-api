const http = require('http');
const socketio = require('socket.io');

const wsServer = http.createServer();
const io = socketio(wsServer);
const wsPort = 3000 ;

io.on('connection',Socket =>{
    console.log('ws');
    Socket.emit('message', "welcome in chatsocket");
})

wsServer.listen(wsPort,()=>{
    console.log(`ws sever are runnig in ${wsPort}`)
})