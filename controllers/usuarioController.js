const mongoose = require('mongoose');
let Usuario = require('../models/usuarios');
let retorno = require('../utils/retorno');

// Outra forma de realizar isso
module.exports = {

  updateCreateUser(req) {
    return new Promise((resolve, reject) => {

      let usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        nivel: req.body.nivel,
        pontuacao: req.body.pontuacao,
        dinheiro: req.body.dinheiro,
        ultimaMissao: req.body.ultimaMissao,
        ultimoAcesso: req.body.ultimoAcesso

      });

      Usuario.findOne({
        email: usuario.email
      }).then((user) => {

        let msg = ""

        if (user != null && usuario.pontuacao > 0) {
          usuario._id = user.id; //Isso aqui faz toda a diferenca pra encontrar e atualizar o id corretamente

          msg = "Usuario atualizado com sucesso!"

          console.log(user);

          Usuario.update({ _id: usuario._id }, usuario).then((usuarioAux) => {

            resolve(retorno(200, true, msg));

          }).catch((error) => {
            console.log(error);
            reject(500, false, "Houve uma falha ao atualizar o novo usuário!");

          });

        } else { //Cadastro para um e-mail já existente

          if (user != null && usuario.pontuacao == 0) {

            msg = "Este e-mail já está sendo utilizado por outro usuário"
            resolve(retorno(400, true, msg));

          } else {//Criacao de usuário

            msg = "Usuário criado com sucesso!"
            new Usuario(usuario).save().then((usuario) => {
              resolve(retorno(200, true, msg));
            }).catch((error) => {
              reject(500, false, "Houve uma falha ao criar o novo usuário!");
            });

          }
        }

      }).catch((error) => {
        console.log(error);
        reject(retorno(500, false, error));
      });
    });

  },

  listUser() {
    return Usuario.find({});
  },

  findUser(id) {
    return Usuario.findById(id);
  },

  deleteUser(id) {

    return new Promise((resolve, reject) => {

      Usuario.findById(id).then((usuario) => {

        if (usuario) {
          usuario.remove().then((usuario) => {
            resolve(retorno(200, true, "Usuário removido com sucesso!"));
          }).catch((error) => {
            reject(retorno(500, false, "Falha ao remover o usuário!"));
          });
        } else {
          resolve(retorno(404, true, "Usuário não encontrado!"));
        }
      }).catch((error) => {
        reject(retorno(500, true, "Falha ao buscar o usuário antes de remover!"));
      });
    });
  },

  validateUser(usuario) {

    let parmemail = usuario.params.email;
    let parmsenha = usuario.params.senha;

    return new Promise((resolve, reject) => {

      Usuario.find({
        email: parmemail,
        senha: parmsenha
      }).then((usuario) => {
        if (usuario.length > 0) {
          resolve(retorno(200, true, usuario));
        } else {
          resolve(retorno(404, false, "Usuário não encontrado ou senha incorreta!"));
        }
      }).catch((error) => {
        reject(retorno(500, false, "Falha ao validar o usuário solicitado!"));
      });

    });

  }

}
