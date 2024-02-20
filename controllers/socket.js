const http = require('http');
const socketio = require('socket.io');

const wsServer = http.createServer();
const io = socketio(wsServer);
const wsPort = 3000 ;

io.on('connection', socket =>{
    console.log('ws');
    //Socket.emit('message', "welcome in chatsocket"); one client
    //io.emit() broadcast all clients
    socket.broadcast.emit('message',"a user join chat")
    socket.on('disconnect',()=>{
       io.emit() 
    })
})

wsServer.listen(wsPort,()=>{
    console.log(`ws sever are runnig in ${wsPort}`)
})