const mongoose = require('mongoose');
let db = require('../config/db_config');
mongoose.Promise = global.Promise; // Resolve deprecateWarning Mongoose : mpromise is deprecated
let Schema = mongoose.Schema;
let propriedadesPeca = require('../models/propriedadesPeca');

const descricao        = require('../fields/TipoString');
const categoria        = require('../fields/TipoNumber');
const informacoes      = require('../fields/TipoString');
const preco            = require('../fields/TipoNumber');
const nivel            = require('../fields/TipoNumber');
const imagem           = require('../fields/TipoString');
const dataCadastro     = require('../fields/DataAtual');

let PecasSchema = new Schema({

  descricao,
  categoria,
  informacoes,
  preco,
  propriedades: propriedadesPeca,
  nivel,
  imagem,      //Imagem será gravada em base64
  dataCadastro, //Seta a data atual por padrão  
});

module.exports = db.model('Pecas', PecasSchema);
