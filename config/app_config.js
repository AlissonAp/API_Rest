const express = require('express');
const bodyParser = require('body-parser');
const port = '3000';

const app = module.exports = express();

app.listen(port);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin','*'); //Permitindo que qualquer aplicação acesse a API, caso eu queira que somente uma aplicação em específico acesse, terei que configurar o ip da mesma no lugar do asterisco
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE'); //Configura quais métodos serão possíveis acessar através da API
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Authorization'); // Permite que seja feita uma autorização via token
  next();
})

