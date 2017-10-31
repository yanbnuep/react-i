//require sockie io as input

module.exports = function(io) {
	io.socket.on('connection',function(socket){
		socket.on('newsUpdate',function(data){
			consoel.log(data);
		})
	})
}

