const mongoose = require('mongoose');
let Missao = require('../models/missoes');
let Regras = require('../models/regrasMissao');
let retorno = require('../utils/retorno');
exports.save = (parnome, parobjetivo, parregras) => {

  return new Promise((resolve, reject) => {

    //Salva as propriedades da peça
    let regras = new Regras(parregras)

    let missao = new Missao({
      nome: parnome,
      objetivo: parobjetivo,
      regras: regras,
      JsonRegras: regras //Salva em JSON normal
    });

    missao.save().then((missao) => {
      resolve(retorno(200, true, "A missão foi salva com sucesso"))
    }).catch((error) => {
      reject(retorno(500, false, "Houve um erro ao salva a missão, detalhes: " + error))
    });
  });

}

exports.list = () => {
  //Retorna uma Promise
  return Missao.find({});
}

exports.delete = (id) => {

  return new Promise((revolve, reject) => {
    //Verifica se a missão existe
    Missao.findById(id).then((missao) => {
      //Se existir remove a missão
      missao.remove().then((missao) => {
        resolve(retorno(200, true, "Missão excluída com sucesso!"))
      }).catch((error) => {
        reject(retorno(500, false, "Não foi possível excluir a missão, detalhes: " + error))
      });

    }).catch((error) => {
      reject(retorno(404, true, "A missão " + id + " não foi encontrada na base de dados"))
    });
  });
}