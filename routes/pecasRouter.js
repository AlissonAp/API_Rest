const express = require('express');
const router = express.Router();
console.log('Chegou aqui antes');
const pecasController =  require('../controllers/pecaController');

console.log('Chegou aqui');

router.get('/',function(req,res){
  pecasController.list(function(resp){
    res.json(resp);
  });
});

router.post('/cadastrar',function(req,res){

  console.log(req);

  let descricao      = req.body.descricao;
  let categoria      = req.body.categoria;
  let informacoes    = req.body.informacoes;
  let preco          = req.body.preco;
  let propriedades   = req.body.propriedades;
  let nivel          = req.body.nivel;
  let imagem         = req.body.imagem;

  pecasController.save(descricao,categoria,informacoes,preco,propriedades,nivel,imagem,function(resp){
      res.json(resp);
  });

});

router.delete('/deletar/:id',function(req, res){
  var id = req.params.id;

  pecasController.delete(id,function(resp){
    res.json(resp);
  });
})

module.exports = router;
