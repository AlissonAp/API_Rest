const mongoose = require('mongoose');
const urlString = 'mongodb://localhost/API_NotebookLine';

mongoose.connect(urlString, function(err, res){
  if(err){
    console.log('Não foi possível conectar com a base de dados '+urlString);
  }else{
    console.log('Conexão com o banco de dados realizada com sucesso!');
  }
});
