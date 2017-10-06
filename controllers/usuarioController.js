const mongoose = require('mongoose');
let Usuario = require('../models/usuarios');

exports.novoUsuario = function(data,callback){

  let usuario = new Usuario(JSON.parse(data));

  Usuario.find({email:usuario.email},function(error, usuario){
    if(usuario.length){
      callback({error: 'Este e-mail já está cadastrado'});
    }else{
      new Usuario(JSON.parse(data)).save(function(error, data){
        if(error){
          callback({error: 'Não foi possível salvar o usuário'+error});
        }else{
          console.log(data);
          callback(data);
        }
      });
    }
  });

}

exports.list = function(callback){

  Usuario.find({}, function(error, usuario){
    if(error){
      callback({error: 'Não foi possível encontrar os usuários'});
    }else{
      callback(usuario);
    }

  });
}

exports.find = function(id,callback){
  Usuario.findById(id, function(error, usuario){
    if(error){
      callback({error: 'Não foi possível encontrar o usuário'});
    }else{
      callback(usuario);
    }

  });
}

exports.delete = function(id,callback){
  Usuario.findById(id, function(error,usuario){
    if(error){
      callback({error:'Não foi possível excluir o usuário'});
    }else{
      usuario.remove(function(error){
        if(!error){
          callback({resposta:"Usuário excluído com sucesso!"});
        }
      })
    }

  });
}
