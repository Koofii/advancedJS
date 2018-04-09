const WebSocket = require('ws');

const server = new WebSocket.Server({port: 8889});

server.on('connection', client => {

    const timer = setInterval(
        () => {
            client.send(new Date().toLocaleTimeString())
        },
        1000
    )
    client.on('message', message => {
        console.log(message)
    }); 
});