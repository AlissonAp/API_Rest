const mongoose = require('mongoose');
let Peca = require('../models/pecas');
let Propriedades = require('../models/propriedadesPeca');
let ObjectId = require('mongoose').Types.ObjectId;
let retorno = require('../utils/retorno');

module.exports = {

  salvaPropriedade(propriedade) {

    return new Promise((resolve, reject) => {

      Propriedades.save(JSON.parse(propriedade)).then((propriedade) => {
        resolve(retorno(200, true, "Propriedades da peça salvas com sucesso!"));
      }).catch((error) => {
        reject(retorno(500, false, "Houve uma falha ao tentar salvar a propriedade, detalhes: " + error));
      });

    });
  },

  save(req) {

    return new Promise((resolve, reject) => {

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


      peca.save().then((peca) => {
        resolve(retorno(200, true, "Peça salva com sucesso!"));
      }).catch((error) => {
        reject(retorno(500, false, "Houve uma falha ao tentar salvar a peça, detalhes: " + error));
      });
    });

  },

  list() {
    //Retorna a promise do próprio mongoDB
    return Peca.find({});
  },

  findById(id) {
    //Retorna a promise do próprio mongoDB
    return Peca.findById(id);
  },

  listCategoria(categoria) {
    //Retorna a promise do próprio mongoDB
    return Peca.find({
      categoria
    });
  },

  delete(id) {

    return new Promise((resolve, reject) => {

      Peca.findById(id).then((peca) => {

        peca.remove().then((peca) => {
          resolve(retorno(200, true, "A peça id " + id + " foi excluída com sucesso!"));
        }).catch((error) => {
          reject(retorno(500, false, "Houve uma falha ao excluir a peça, detalhes: " + error));
        });

      }).catch((error) => {
        reject(retorno(404, false, "A peça não foi encontrada, detalhes"));
      });

    });
  },

  update(req) {

    return new Promise((resolve, reject) => {

      let peca = new Peca({
        _id: req.body._id,
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

      Peca.findByIdAndUpdate({_id : peca._id}, peca).then((peca) => {
        resolve(retorno(200, true, "Peça atualizada com sucesso!"));
      }).catch((erro) => {

        peca.save().then((peca) => {
          resolve(retorno(200, true, "Peça salva com sucesso!"));
        }).catch((error) => {
          reject(retorno(500, false, "Houve uma falha ao tentar salvar a peça, detalhes: " + error));
        });

      });

    });
  }

}