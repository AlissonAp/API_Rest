const express = require('express');
const router = express.Router();
const missoesController =  require('../controllers/missaoController');

router.get('/',function(req,res){
  missoesController.list(function(resp){
    res.json(resp);
  });
});

router.post('/cadastrar',function(req,res){
  let nome      = req.body.nome;
  let objetivo  = req.body.objetivo;
  let regras    = req.body.regras;

  missoesController.save(nome,objetivo,regras,function(resp){
      res.json(resp);
  });

});

router.delete('/deletar/:id',function(req, res){
  var id = req.params.id;

  missoesController.delete(id,function(resp){
    res.json(resp);
  });
})

module.exports = router;
