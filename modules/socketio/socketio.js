const uploadNews = require('../database/db_uploadNews')

module.exports = function(io) {
    io.on('connection', function(socket) {
        socket.on('disconnect', function() {

        });
        socket.on('newsUpdate', function(news) {
            console.log(news);
            socket.emit('update finished',function(){
            	
            	
            })
        })
    })
}