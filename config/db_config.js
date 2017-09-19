const mongoose = require('mongoose');
const urlString = 'mongodb://admin:root@ds139844.mlab.com:39844/thenotebookline';

mongoose.connect(urlString, function(err, res){
  if(err){
    console.log('Não foi possível conectar com a base de dados '+urlString);
      console.log(err);
  }else{
    console.log('Conexão com o banco de dados realizada com sucesso!');

  }
});
