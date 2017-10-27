const mongoose = require('mongoose');
let Usuario = require('../models/usuarios');

// Outra forma de realizar isso
module.exports = {

newUser(req,callback){

  let usuario = new Usuario({
    
        nome          : req.body.nome,
        email         : req.body.email, 
        senha         : req.body.senha, 
        nivel         : req.body.nivel,
        pontuacao     : req.body.pontuacao,
        dinheiro      : req.body.dinheiro,
        ultimaMissao  : req.body.ultimaMissao,
        ultimoAcesso  : req.body.ultimoAcesso
    
    });

  Usuario.find({email:usuario.email},function(error, user){
    if(user.length){
      callback({error: 'Este e-mail já está cadastrado'});
    }else{
      new Usuario(usuario).save(function(error, usuario){
        if(error){
          callback({error: 'Não foi possível salvar o usuário'+error});
        }else{
          console.log(usuario);
          callback(usuario);
        }
      });
    }
  });

},

listUser(callback){

  Usuario.find({}, function(error, usuario){
    if(error){
      callback({error: 'Não foi possível encontrar os usuários'});
    }else{
      callback(usuario);
    }

  });
},

findUser(id,callback){
  Usuario.findById(id, function(error, usuario){
    if(error){
      callback({error: 'Não foi possível encontrar o usuário'});
    }else{
      callback(usuario);
    }

  });
},

deleteUser(id,callback){
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
},

validateUser(usuario, callback){

  let parmemail      = usuario.params.email;
  let parmsenha      = usuario.params.senha;

    Usuario.find({email:parmemail,senha:parmsenha},function(error, user){
      if(error) return callback({error: 'Não foi possível validar o usuário solicitado!'});

        if(user.length > 0){
          callback(true);
        }else{
          callback(false);
        }

    })

}

}
