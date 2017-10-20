const express = require('express');
const router = express.Router();
const missoesController = require('../controllers/missaoController');
let Missao = require('../models/missoes');
let Regras = require('../models/regrasMissao');


router.get('/', function (req, res) {
  missoesController.list(function (retorno) {
    res.json(retorno);
  });
});

router.post('/cadastrar', function (req, res) {
 
  //Salva as propriedades da peça
  let regras = new Regras(req.body.regras)

  let missao = new Missao({
    nome: req.body.nome,
    objetivo: req.body.objetivo,
    regras: regras,
    JsonRegras: regras //Salva em JSON normal
  });

  missoesController.save(missao, function(retorno){
    res.json(retorno);
  });


});

router.delete('/deletar/:id', function (req, res) {
  var id = req.params.id;

  missoesController.delete(id, function (retorno) {
    res.json(retorno);
  });
})

module.exports = router;
