const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const connection = require('./models/db');

//teste**************************************************

const encoder = bodyParser.urlencoded();


app.post('/',encoder, (req, res) => {
	var email = req.body.email;
	var password = req.body.password;

	connection.query('SELECT * FROM USUARIOS WHERE email = ? AND password = ?', [email,password], function(error,results){
		if (results) {
			res.redirect('/welcome');
		} else {
			console.log(error);
			res.redirect('/');
		}
		res.end();
	});
});
		


app.get('/welcome', (req, res) => {  
	res.render('welcome');  
 });
//***********************************************************************

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//ejs/static
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public'))); //pasta public
app.set('views', path.join(__dirname, '/views')); //pasta views

app.get('/', (req, res) => {  
	res.render('index');  
 });

app.get('/cadastro', (req , res) => {
    res.render('cadastro');
});

app.post('/cadastro', (req , res) => {

	const { password, email, nome } = req.body;

    if( password != req.body.confirmsenha){

        res.send('Erro: Senhas diferentes!')

    } 
	connection.query('INSERT INTO USUARIOS(NOME, EMAIL, PASSWORD) VALUES(?, ?, ?)', [nome, email, password], function (err) {
		if(err)
			console.error(err);

		res.redirect('/')
	});
});


app.listen(3000, (req,res) => {
    console.log('Servidor on')
});