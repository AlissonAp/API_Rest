const express = require('express');
const router = express.Router();

const usuarioController =  require('../controllers/usuarioController');

router.get('/',function(req,res){
  usuarioController.list(function(resp){
    res.json(resp);
  });
});

router.post('/cadastrar',function(req,res){

  console.log(req);

  let usuario      = req.body.usuario;

  usuarioController.novoUsuario(usuario,function(resp){
      res.json(resp);
  });

});

router.get('/:id',function(req, res){
  var id = req.params.id;

  usuarioController.find(id,function(resp){
    res.json(resp);
  });
})

router.delete('/deletar/:id',function(req, res){
  var id = req.params.id;

  usuarioController.delete(id,function(resp){
    res.json(resp);
  });
})

module.exports = router;
