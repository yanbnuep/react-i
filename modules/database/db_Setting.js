const mariadb = require('mariasql');

const host = {
	host: '47.91.247.12',
	port: '3306',
	user:'ian',
	password: 'ian6691',
	db: 'intranet'
};

const newsTable = 'news';

const usersTable = 'users';

const saltRounds = 10;

module.exports = function(){
	let mydb = mariadb(host);
	mydb.newTable = newsTable;
	mydb.usersTable = usersTable;
	mydb.saltRounds = saltRounds;
	return mydb;
}