(function() {


    /**
    * Before connection (just for faye)
    * @param {client} client connection
    */
    exports.beforeConnect = function(client) {
        // Your logic
        // By example
        // client.setHeader('Authorization', 'OAuth abcd-1234');
        // client.disable('websocket');
    };


    /**
    * on client connect
    * @param {client} client connection
    * @param {done}   callback function(err) {}
    */
    exports.onConnect = function(client, done) {
        // Your logic

        // Faye client
        //client.subscribe('/channel', function(message) { });

        //Socket.io client
        //client.emit('stream', {room: room, type: 'read'});

        done();
    };

    /**
    * send a message
    * @param {client} client connection
    * @param {done}   callback function(err) {}
    */
    exports.sendMessage = function(client, done) {
        // Your logic
        //client.emit('test', { hello: 'world' });
        //client.publish('/test', { hello: 'world' });
        done();
    };

})();
