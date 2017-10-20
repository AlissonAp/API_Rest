const express = require('express');
const router = express.Router();

const usuarioController =  require('../controllers/usuarioController');
let Usuario = require('../models/usuarios');

router.get('/',function(req,res){
  usuarioController.listUser(function(resp){
    res.json(resp);
  });
});

router.post('/cadastrar',function(req,res){

  usuarioController.newUser(req,function(resp){
      res.json(resp);
  });

});

router.get('/validar/:email/:senha',function(req,res){


    usuarioController.validateUser(req,function(resp){
        res.json(resp);
    });
  
  });

router.get('/:id',function(req, res){
  let id = req.params.id;

  usuarioController.findUser(id,function(resp){
    res.json(resp);
  });
})

router.delete('/deletar/:id',function(req, res){
  let id = req.params.id;

  usuarioController.deleteUser(id,function(resp){
    res.json(resp);
  });
})

module.exports = router;
