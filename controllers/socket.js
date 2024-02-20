const http = require('http');
const socketio = require('socket.io');

const wsPort = 3000 ;
const wsServer = http.createServer();
const io = socketio(wsServer);

export const ws = () => {

//front part to get message    
const form = document.getElementsByTagName('form');
form.addEventListener('submit',(e)=>{
    e.preventdefault();
    const msg = e.target.elements.input.value ;
    
})

io.on('connection', socket =>{
    console.log('A user connected');

    // Emitting to all clients except the one that initiated the connection
    socket.broadcast.emit('message',"a user join chat")

    socket.on('disconnect',()=>{
       io.emit('message',"user left chat") 
    })
})

wsServer.listen(wsPort,()=>{
    console.log(`ws sever are runnig in ${wsPort}`)
})
}