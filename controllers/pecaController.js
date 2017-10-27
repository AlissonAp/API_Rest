const mongoose = require('mongoose');
let Peca = require('../models/pecas');
let Propriedades = require('../models/propriedadesPeca');
let ObjectId = require('mongoose').Types.ObjectId;
let retorno = require('../utils/retorno');

module.exports = {

  salvaPropriedade(propriedade) {

    return new Promise((resolve, reject) => {

      Propriedades.save(JSON.parse(propriedade)).then((propriedade) => {
        resolve(retorno(200, true, "Propriedades da peça salvas com sucesso!"));
      }).catch((error) => {
        reject(retorno(500, false, "Houve uma falha ao tentar salvar a propriedade, detalhes: " + error));
      });

    });
  },

  save(peca) {

    return new Promise((resolve, reject) => {

      peca.save().then((peca) => {
        resolve(retorno(200, true, "Peça salva com sucesso!"));
      }).catch((error) => {
        reject(retorno(500, false, "Houve uma falha ao tentar salvar a peça, detalhes: " + error));
      });
    });

  },

  list() {
    //Retorna a promise do próprio mongoDB
    return Peca.find({});
  },

  findById(id) {
    //Retorna a promise do próprio mongoDB
    return Peca.findById(id);
  },

  listCategoria(categoria, retorno) {
    //Retorna a promise do próprio mongoDB
    return Peca.find({
      categoria
    });
  },

  delete(id) {

    return new Promise((resolve, reject) => {

      Peca.findById(id).then((peca) => {

        peca.remove().then((peca) => {
          resolve(retorno(200, true, "A peça id " + id + " foi excluída com sucesso!"));
        }).catch((error) => {
          reject(retorno(500, false, "Houve uma falha ao excluir a peça, detalhes: " + error));
        });

      }).catch((error) => {
        reject(retorno(404, false, "A peça não foi encontrada, detalhes"));
      });

    });
  }
}