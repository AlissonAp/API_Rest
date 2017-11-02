const mongoose = require('mongoose');
let Missao = require('../models/missoes');
let Regras = require('../models/regrasMissao');
let retorno = require('../utils/retorno');

module.exports = {


  save(req) {

    return new Promise((resolve, reject) => {

      let missao = new Missao({
        nome: req.body.nome,
        objetivo: req.body.objetivo,
        XP: req.body.XP,
        regras: {
          regraGbMemoriaRam: req.body.regras.regraGbMemoriaRam,				
          regraGbPlacaVideo: req.body.regras.regraGbPlacaVideo,              
          regraGbArmazenamento: req.body.regras.regraGbArmazenamento,           
          regraMhzMemoriaRam: req.body.regras.regraMhzMemoriaRam,             
          regraGhzProcessador: req.body.regras.regraGhzProcessador,            
          regraGhzPlacaVideo: req.body.regras.regraGhzPlacaVideo,             
          regraRpmLeituraEscrita: req.body.regras.regraRpmLeituraEscrita,	        
          regraNucleosProcessador: req.body.regras.regraNucleosProcessador,
          regraModeloProcessador: req.body.regras.regraModeloProcessador,         
          regraBitsPlacaVideo: req.body.regras.regraBitsPlacaVideo,            
          regracacheProcessador: req.body.regras.regracacheProcessador,          
          regracacheArmazenamento: req.body.regras.regracacheArmazenamento,        
          regraMahBateria: req.body.regras.regraMahBateria,                
          regraTipoTela: req.body.regras.regraTipoTela,                  
          regraTamanhoTela: req.body.regras.regraTamanhoTela,
          regraCelulasBateria: req.body.regras.regraCelulasBateria,
          regraConexoesUSB: req.body.regras.regraConexoesUSB,
          regraPossuiBluetooth: req.body.regras.regraPossuiBluetooth,           
          regraPossuiWebCam: req.body.regras.regraPossuiWebCam,              
          regraPossuiLeitorCd_Dvd: req.body.regras.regraPossuiLeitorCd_Dvd,
          regraResistenciaCarcaca: req.body.regras.regraResistenciaCarcaca,
          regraPesoCarcaca: req.body.regras.regraPesoCarcaca,
          regraPossuiEntradaHDMI: req.body.regras.regraPossuiEntradaHDMI,
          regraSistemaOperacional: req.body.regras.regraSistemaOperacional


        }
      });

      missao.save().then((missao) => {
        resolve(retorno(200, true, "A missão foi salva com sucesso"))
      }).catch((error) => {
        reject(retorno(500, false, "Houve um erro ao salva a missão, detalhes: " + error))
      });
    });

  },

  list(){

    return Missao.find({});  

  }, 

  delete(id){

    return new Promise((revolve, reject) => {
      //Verifica se a missão existe
      Missao.findById(id).then((missao) => {
        //Se existir remove a missão
        missao.remove().then((missao) => {
          resolve(retorno(200, true, "Missão excluída com sucesso!"))
        }).catch((error) => {
          reject(retorno(500, false, "Não foi possível excluir a missão, detalhes: " + error))
        });
  
      }).catch((error) => {
        reject(retorno(404, true, "A missão " + id + " não foi encontrada na base de dados"))
      });
    });

  }
}

