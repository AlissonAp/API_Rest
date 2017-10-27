const express = require('express');
const router = express.Router();
const missoesController = require('../controllers/missaoController');

let retorno = require('../utils/retorno');

router.get('/', function (req, res) {

  missoesController.list().then((retorno) => {
    if (retorno != null) {
      res.status(200).json(retorno);
    } else {
      res.status(404).json(retorno(404, true, "Ainda não existe nenhuma missão na base de dados"));
    }
  }).catch((error) => {
    res.status(500).json(retorno(500, false, "Erro na busca de informações"));
  });

});

router.post('/cadastrar', function (req, res) {
  let nome = req.body.nome;
  let objetivo = req.body.objetivo;
  let regras = req.body.regras;

  missoesController.save(nome, objetivo, regras).then((retorno) => {
    res.json(retorno);
  }).catch((error) => {
    res.status(500).json(error);
  });


});

router.delete('/deletar/:id', function (req, res) {
  var id = req.params.id;

  missoesController.delete(id).then((retorno) => {
    res.json(retorno);
  }).catch((error) => {
    res.status(500).json(retorno(500, false, "Falha no processo de exclusão da missão"));
  });
})

module.exports = router;