const express = require('express');
const router = express.Router();
console.log('Chegou aqui antes');
const pecasController = require('../controllers/pecaController');
let Peca = require('../models/pecas');
let Propriedades = require('../models/propriedadesPeca');

console.log('Chegou aqui');

router.get('/', function (req, res) {

  pecasController.list(function (retorno) {
    console.log(retorno);
    res.json(retorno);
  });

});

router.post('/cadastrar', function (req, res) {

  let propriedade = new Propriedades(req.body.propriedades);

  let peca = new Peca({
    descricao: req.body.descricao,
    categoria: req.body.categoria,
    informacoes: req.body.informacoes,
    preco: req.body.preco,
    propriedades: propriedade, //Neste aqui salva o ID do JSON de propriedade
    nivel: req.body.nivel,
    imagem: req.body.imagem,
    JsonPropriedades: propriedade
  });

  console.log(peca);

  pecasController.save(peca, function (resp) {
    res.json(resp);
  });

});

router.delete('/deletar/:id', function (req, res) {
  var id = req.params.id;

  pecasController.delete(id, function (mensagem) {
    res.json(mensagem);
  });

});

module.exports = router;
