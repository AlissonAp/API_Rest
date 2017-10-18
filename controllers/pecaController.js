const mongoose = require('mongoose');
let Peca = require('../models/pecas');
let Propriedades = require('../models/propriedadesPeca');
let ObjectId = require('mongoose').Types.ObjectId;

// Outra forma de realizar isso
module.exports = {

  salvaPropriedade(propriedade, resultado) {

    Propriedades.save(JSON.parse(propriedade), function (erro, retorno) {

      if (erro) {
        console.log("Erro: " + erro);
      } else {
        console.log("Erro: " + erro);
      }

      resultado(erro, retorno);

    });

  },

  save(peca, retorno) {

    peca.save(function (error) {
      if (error) {
        retorno({ 'erro': 'Não foi possível salvar a peça!' })
      } else {
        retorno({ 'resposta': 'Peça salva com sucesso!' })
      }

    });

  },

  list(retorno) {

    Peca.find({}, function (error, peca) {

      if (error){
        retorno({ 'erro': 'Não foi possível encontrar as peças' });
      }else {

        retorno(peca);

      }

    });

  },

  findById(id, retorno) {

    Peca.findById(id, function (erro, resultado) {
      retorno(erro, resultado);
    })

  },

  listCategoria(categoria, retorno) {

    Peca.find({ categoria }, function (error, peca) {

      retorno(error, peca);

    });

  },

  delete(id, retorno) {

    this.findById(id, function (erro, peca) {

      if (erro || peca == null) {

        retorno({ 'erro': 'Peça não encontrada para exclusão!' });

      } else {

        peca.remove(function (erroDel) {

          if (erroDel) {

            retorno({ 'erro': 'Não foi possível excluir esta peça!' });

          } else {

            retorno({ 'resposta': "Peça excluída com sucesso!" });

          }

        });

      }

    });

  }
}
// exports.save = function (pardescricao, parcategoria, parinformacoes, parpreco, parpropriedades, parnivel, parimagem, callback) {

//   //Salva as propriedades da peça
//   let propriedade = new Propriedades(parpropriedades)



//   let peca = new Peca({
//     descricao: pardescricao,
//     categoria: parcategoria, 
//     informacoes: parinformacoes,
//     preco: parpreco,
//     propriedades: propriedade, //Neste aqui salva o ID do JSON de propriedade
//     nivel: parnivel,
//     imagem: parimagem,
//     JsonPropriedades: propriedade
//   });

//   /*
//     Peca.findOne(peca)
//         .populate('propriedades')
//         .exec(function(error, propriedade) {
//             console.log(JSON.stringify(propriedade, null, "\t"))
//         })
//     */
//   peca.save(function (error, peca) {
//     if (!error) {
//       callback(peca);
//       console.log('SAlvou');
//     } else {
//       callback({ error: 'Não foi possível cadastrar a peça' });
//       console.log('Deu pau', error)
//     }
//   });
// }

// exports.list = function (callback) {

//   Peca.find({}, function (error, peca) {
//     if (error) {
//       callback({ error: 'Não foi possível encontrar as peças' });
//     } else {
//       callback(peca);
//     }

//   });
// }

// exports.listCategoria = function (categoria, callback) {
//   Peca.find({ categoria }, function (error, peca) {
//     if (error) {
//       callback({ error: 'Não foi possível encontrar as peças' });
//     } else {
//       callback(peca);
//     }

//   });
// }

// exports.delete = function (id, callback) {
//   Peca.findById(id, function (error, peca) {
//     if (error) {
//       callback({ error: 'Não foi possível excluir' });
//     } else {
//       peca.remove(function (error) {
//         if (!error) {
//           callback({ resposta: "Peça excluída com sucesso!" });
//         }
//       })
//     }

//   });
// }
