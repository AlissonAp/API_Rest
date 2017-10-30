const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');
let Usuario = require('../models/usuarios');
let retorno = require('../utils/retorno');


router.get('/', function (req, res) {
  usuarioController.listUser(function (resp) {
    res.json(resp);
  });
});

router.post('/cadastrar', function (req, res) {

  usuarioController.updateCreateUser(req).then((usuario) => {
    res.status(200).json(usuario);
  }).catch((error) => {
    res.status(500).json(retorno(500, false, "Houve uma falha ao cadastrar o usuário"));
  });
});

router.put('/atualizar', function (req, res) {

  usuarioController.updateCreateUser(req).then((usuario) => {
    res.status(200).json(usuario);
  }).catch((error) => {
    res.status(500).json(retorno(500, false, "Houve uma exceção ao atualizar o usuário!"));
  });

})

router.get('/validar/:email/:senha', function (req, res) {

  usuarioController.validateUser(req).then((usuario) => {
    res.status(200).json(usuario);
  }).catch((error) => {
    res.status(500).json(retorno(500, false, "Falha interna na validação do usuário!"));
  });

});

router.get('/:id', function (req, res) {
  let id = req.params.id;

  usuarioController.findUser(id).then((usuario) => {
    res.status(200).json(usuario);
  }).catch((error) => {
    res.status(500).json(retorno(500,false,"Erro interno ao buscar o usuário"));
  });
});

router.delete('/deletar/:id', function (req, res) {
  let id = req.params.id;

  usuarioController.deleteUser(id).then((usuario) => {
    res.status(200).json(usuario);
  }).catch((error) => {
    res.status(500).json(retorno(500,false,"Erro interno ao deletar o usuário!"));
  });
});

module.exports = router;