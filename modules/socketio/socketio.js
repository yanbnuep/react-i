function finshMessage(){
	return 'finish'
}
module.exports = function(io) {
    io.on('connection', function(socket) {
        socket.on('disconnect', function() {

        });
        socket.on('newsUpdate', function(news) {
            console.log(news);
            finshMessage()
        })
    })
}