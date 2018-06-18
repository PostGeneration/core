var fs = require('fs');
var net = require('net');

var server = net.createServer({
    // allowHalfOpen: true
}, socket => {
    console.log('connected');
    socket.on('data', data=>{
        console.log(data.toString());
    });
    
    socket.on('error', err=>{
        console.log(err.code==='ECONNRESET');
    })
}).on('error', err => {
    throw err;
}).listen({
    host: 'localhost',
    port: 1407
});

server.on('listening', () => {
    console.log('server on', server.address());
});