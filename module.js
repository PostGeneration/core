var fs = require('fs');
var net = require('net');

for(i = 0; i < 10000; i++) {
    var socket = net.createConnection(1407);

    socket.on('connect', () => {
        socket.write("auth", () => {
            socket.write("login:password", () => {
                socket.write(JSON.stringify({
                    config: "lalala"
                }), () => {
                    console.log('auth end');
                })
            });
        });
    });
}
