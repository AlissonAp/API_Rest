const mongoose = require('mongoose');
let db = require('../config/db_config');
mongoose.Promise = global.Promise; // Resolve deprecateWarning Mongoose : mpromise is deprecated
let Schema = mongoose.Schema;
let regras = require('../models/regrasMissao');

const nome          = require('../fields/TipoString');
const objetivo      = require('../fields/TipoString');
const dataCadastro  = require('../fields/DataAtual');

let MissoesSchema = new Schema({

  nome,
  objetivo,
  regras : regras,
  dataCadastro, //Seta a data atual por padrão  
});

module.exports = db.model('Missoes', MissoesSchema);
