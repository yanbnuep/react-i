const db = require('./db_Setting')
const squel = require('squel')



const getList = function(options,cb){
	const tableName = db.newsTable ? db.newsTable : 'news'
	const defaults = {
		limit : 10,
		offset: 0,
	}
	const actual = Object.assign({},defaults,options)
	sql = squel.select
				.from(tableName)
				.field("news_id")
				.field("image")
				.field("Title")
				.field("CreateTime")
				.field("description")
				.order("id",false)
				.limit(actual.limit)
				.offset(actual.offset)
				.toString()
	db.query(sql,(err,rows)=>{
		if(typeof cb === 'function'){
			return cb(err,rows)
		}
		if(err)
			throw err
		else
			return rows
	})			
}

module.exports = getList