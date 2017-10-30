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

router.post('/cadastrar', function (req, res) {

  console.log(req.body);

  let peca = new Peca({
    descricao: req.body.descricao,
    categoria: req.body.categoria,
    informacoes: req.body.informacoes,
    preco: req.body.preco,
    propriedades: {
      GbMemoriaRam: req.body.propriedades.GbMemoriaRam,
      GbPlacaVideo: req.body.propriedades.GbPlacaVideo,
      GbArmazenamento: req.body.propriedades.GbArmazenamento,
      MhzMemoriaRam: req.body.propriedades.MhzMemoriaRam,
      GhzProcessador: req.body.propriedades.GhzProcessador,
      GhzPlacaVideo: req.body.propriedades.GhzPlacaVideo,
      RpmLeituraEscrita: req.body.propriedades.RpmLeituraEscrita,
      NucleosProcessador: req.body.propriedades.NucleosProcessador,
      ModeloProcessador: req.body.propriedades.ModeloProcessador,
      BitsPlacaVideo: req.body.propriedades.BitsPlacaVideo,
      cacheProcessador: req.body.propriedades.cacheProcessador,
      cacheArmazenamento: req.body.propriedades.cacheArmazenamento,
      MahBateria: req.body.propriedades.MahBateria,
      CelulasBateria: req.body.propriedades.CelulasBateria,
      TipoTela: req.body.propriedades.TipoTela,
      TamanhoTela: req.body.propriedades.TamanhoTela,
      ConexoesUSB: req.body.propriedades.ConexoesUSB,
      PossuiBluetooth: req.body.propriedades.PossuiBluetooth,
      PossuiWebCam: req.body.propriedades.PossuiWebCam,
      PossuiLeitorCd_Dvd: req.body.propriedades.PossuiLeitorCd_Dvd,
      ResistenciaCarcaca: req.body.propriedades.ResistenciaCarcaca,
      PesoCarcaca: req.body.propriedades.PesoCarcaca,
      PossuiEntradaHDMI: req.body.propriedades.PossuiEntradaHDMI,
      SistemaOperacional: req.body.propriedades.SistemaOperacional 
    },     
    nivel: req.body.nivel,
    imagem: req.body.imagem,
  });

  pecasController.save(peca).then((peca) => {
    res.json(peca);
  }).catch((error) => {
    console.log(error);
    res.status(500).json(retorno(500, false, "Houve uma falha no processo de cadastro da peça."));
  });

});

router.delete('/deletar/:id', function (req, res) {
  var id = req.params.id;

  pecasController.delete(id).then((peca) => {
    res.json(peca);
  }).catch((error) => {
    res.status(500).json(retorno(500,false,"Houve uma falha ao realizar a exclusão da peça, detalhes: "+error))
  });

});

module.exports = router;