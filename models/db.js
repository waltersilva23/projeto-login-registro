const mysql = require('mysql2');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '123456',
	database : 'banco'
});

connection.connect(function(error){
	if(error) { 
		throw error
	} else {
		console.log('Conectado!');
	}
});

module.exports = connection;