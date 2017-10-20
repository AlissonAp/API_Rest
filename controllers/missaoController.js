const mongoose = require('mongoose');
let Missao = require('../models/missoes');
let Regras = require('../models/regrasMissao');


module.exports = {

  save(missao, retorno) {

    missao.save(function (error, missao) {
      if (error) {
        retorno({ 'erro': 'Não foi possível salvar a missão!' });
      } else {
        retorno({ 'resposta': 'Missão salva com sucesso!' });
      }
    });

  },

  list(retorno) {

    Missao.find({}, function (error, missao) {

      if (error) {

        retorno({ 'error': 'Não foi possível encontrar as missões' });

      } else {

        retorno(missao);

      }

    });

  },

  findById(id, retorno) {

    Missao.findById(id, function (erro, resultado) {
      retorno(erro, resultado);
    })

  },

  delete(id, retorno) {

    this.findById(id, function (erro, missao) {

      if (erro || missao == null) {

        retorno({ 'erro': 'Missão não encontrada para exclusão!' });

      } else {

        missao.remove(function (erroDel) {

          if (erroDel) {

            retorno({ 'erro': 'Não foi possível excluir esta missão!' });

          } else {

            retorno({ 'resposta': "Missão excluída com sucesso!" });

          }

        });

      }

    });

  }

}

