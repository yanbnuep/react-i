const uploadNews = require('../database/db_uploadNews')

module.exports = function(io) {
    io.on('connection', function(socket) {
        socket.on('disconnect', function() {

        });
        socket.on('newsUpdate', function(news) {

        	console.log(news.article);
           	console.log(news.title);
           	uploadNews(news)

           	//todo upload finish notice to user
            socket.emit('update finished',function(){
            	
            	
            })
        })
    })
}