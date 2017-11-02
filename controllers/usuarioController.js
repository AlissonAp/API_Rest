const mongoose = require('mongoose');
let Usuario = require('../models/usuarios');
let retorno = require('../utils/retorno');

// Outra forma de realizar isso
module.exports = {

  updateCreateUser(req) {
    return new Promise((resolve, reject) => {


      console.log(req);

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

   
     
    console.log(usuario);
      Usuario.find({
        email: usuario.email
      }).then((user) => {

        let msg = ""

<<<<<<< HEAD
        if (usuario.length) {
          msg = "Usuario atualizado com sucesso!"

          usuario.findByIdAndUpdate({ _id: usuario._id }, usuario).then((usuario) => {

            resolve(retorno(200, true, msg));

          }).catch((error) => {

            reject(500, false, "Houve uma falha ao atualizar o novo usuário!");

          });

=======
        console.log(user);

        if (user.length) {
          usuario.id = user.id
          Usuario.update(usuario).then((usuario) => {
            msg = "Usuario atualizado com sucesso!"
            resolve(retorno(202,true,"Usuário atualizado com sucesso!"));
          }).catch((error) => {
            reject(retorno(500,false,error));
          });
>>>>>>> c8a5b6055ae887ad1a4dbe4767219feed5adf2c9
        } else {
          
          msg = "Usuário criado com sucesso!"
<<<<<<< HEAD

=======
>>>>>>> c8a5b6055ae887ad1a4dbe4767219feed5adf2c9
          new Usuario(usuario).save().then((usuario) => {
            resolve(retorno(200, true, msg));
          }).catch((error) => {
            reject(500, false, "Houve uma falha ao criar o novo usuário!");
          });
<<<<<<< HEAD

        }


=======
        }
>>>>>>> c8a5b6055ae887ad1a4dbe4767219feed5adf2c9
      }).catch((error) => {
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

  validateUser(usuario, callback) {

    let parmemail = usuario.params.email;
    let parmsenha = usuario.params.senha;

    return new Promise((resolve, reject) => {

      Usuario.find({
        email: parmemail,
        senha: parmsenha
      }).then((usuario) => {
        if (usuario.length > 0) {
          resolve(retorno(200, true, "Usuário validado com sucesso!"));
        } else {
          resolve(retorno(404, true, "Usuário não encontrado ou senha incorreta!"));
        }
      }).catch((error) => {
        reject(retorno(500, false, "Falha ao validar o usuário solicitado!"));
      });

    });

  }

}