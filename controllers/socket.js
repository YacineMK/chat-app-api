const http = require('http');
const socketio = require('socket.io');

const wsPort = 3000;
const wsServer = http.createServer();
const io = socketio(wsServer);

export const ws = () => {

    //front part to get message    
    const form = document.getElementsByTagName('form')[0]; 
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const msgInput = e.target.elements.input.value; 
        io.emit('message', msgInput); 
        e.target.elements.input.value = ''; 
    });

    io.on('connection', socket => {
        console.log('A user connected');

        // Emitting to all clients except the one that initiated the connection
        socket.broadcast.emit('message', "A user joined the chat");

        socket.on('disconnect', () => {
            io.emit('message', "A user left the chat");
        });
    });

    wsServer.listen(wsPort, () => {
        console.log(`WebSocket server is running on port ${wsPort}`);
    });
};
