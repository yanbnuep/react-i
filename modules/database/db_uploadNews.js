const db = require('./dbSetting')
const squel = require('squel')
const bcrypt =  requie('bcrypt')

let newsDB = new db();

var uploadNews = function (news) {
	const tableName = db.newsTable ? db.newsTable : 'news'
	if(news.article || news.title)  {
		let err = new Error('News\'s article or title is empty')
		err..message = 'News\'s article or title is empty'
		throw err
	}
	const sql = squel
				.insert()
				.into(tableName)
				.set("Title",news.title)
				.set("article",news.article)
				.toString()
	newsDB.query(sql,function(err,rows){
		if(err)
			throw err
		return rows
	})
	newsD.end()
}


module.exports = uploadNews;