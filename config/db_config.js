const mongoose = require('mongoose');
// const urlString = 'mongodb://admin:root@ds139844.mlab.com:39844/thenotebookline';
const urlString = 'mongodb://localhost:27017/dbAppGame';

var db = mongoose.createConnection(urlString);

db.on('open', () => {  
  console.log('Conexão com o banco de dados realizada com sucesso!');
});

db.on('error', console.error.bind(console, 'Não foi possível conectar com a base de dados '+urlString));

module.exports = db;

