const db = require('./db_Setting')
const squel = require('squel')
const bcrypt =  require('bcrypt')

var uploadNews = function (news) {
	const tableName = db.newsTable ? db.newsTable : 'news'
	if(!news.article || !news.title)  {
		let err = new Error('News\'s article or title is empty')
		err.message = 'News\'s article or title is empty'
		throw err
	}
	const sql = squel
				.insert()
				.into(tableName)
				.set("Title",news.title)
				.set("article",news.article)
				.toString()
	db.query(sql,function(err,rows){
		if(err)
			throw err
		return rows
	})
	db.end()
}


module.exports = uploadNews