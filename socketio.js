var  socketio = {};
var socket_io = require('socket.io');
socketio.getSocketio = function(server){  
    var io = socket_io.listen(server);  
};  
  
module.exports = socketio;  