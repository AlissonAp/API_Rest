const mongoose = require('mongoose');
let Missao = require('../models/missoes');
let Regras = require('../models/regrasMissao');

exports.save = function(parnome,parobjetivo,parregras,callback){

  console.log(parregras);

  //Salva as propriedades da peça
  let regras = new Regras(parregras)

  let missao  = new Missao({
      nome : parnome,
      objetivo : parobjetivo,
      regras : regras,
      JsonRegras : regras //Salva em JSON normal
  });

  missao.save(function(error, missao){
      if(!error){
        callback(missao);
      }else{
      callback({error: 'Não foi possível cadastrar a missão'});
    }
  });
}

exports.list = function(callback){

  Missao.find({}, function(error, missao){
    if(error){
      callback({error: 'Não foi possível encontrar as missões'});
    }else{
      callback(JSON.stringify(missao));
    }

  });
}

exports.delete = function(id,callback){
  Missao.findById(id, function(error,missao){
    if(error){
      callback({error:'Não foi possível excluir a missão'});
    }else{
      missao.remove(function(error){
        if(!error){
          callback({resposta:"Missão excluída com sucesso!"});
        }
      })
    }

  });
}
