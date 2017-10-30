const express = require('express');
const router = express.Router();
console.log('Chegou aqui antes');
const pecasController = require('../controllers/pecaController');
let Peca = require('../models/pecas');
let Propriedades = require('../models/propriedadesPeca');
let retorno = require('../utils/retorno');


router.get('/', function (req, res) {

  pecasController.list().then((pecas) => {
    res.json(pecas);
  }).catch((error) => {
    res.status(500).json(retorno(500, false, "Houve uma falha no processo de listagem de peças!"));
  });

});

router.get('/:id', function(req, res){

  let id = req.params.id;

  pecasController.findById(id).then((peca) => {
    if(peca != null){
      res.status(200).json(peca);
    }else{
      res.status(404).json(retorno(404,true,"A peca com id "+id+ " não foi encontrada na base de dados!"));
    }
  }).catch((error) => {
    res.status(500).json(retorno(500,false,"Ocorreu um erro interno ao buscar a peça solicitada!"));
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

  pecasController.save(peca).then((peca) => {
    res.json(peca);
  }).catch((error) => {
    res.status(500).json(retorno(500, false, "Houve uma falha no processo de cadastro da peça."));
  });

});

router.delete('/deletar/:id', function (req, res) {
  let id = req.params.id;

  pecasController.delete(id).then((peca) => {
    res.json(peca);
  }).catch((error) => {
    res.status(500).json(retorno(500,false,"Houve uma falha ao realizar a exclusão da peça, detalhes: "+error))
  });

});

module.exports = router;