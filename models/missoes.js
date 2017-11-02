const mongoose = require('mongoose');
let db = require('../config/db_config');
mongoose.Promise = global.Promise; // Resolve deprecateWarning Mongoose : mpromise is deprecated
let Schema = mongoose.Schema;

const nome          = require('../fields/TipoString');
const objetivo      = require('../fields/TipoString');
const dataCadastro  = require('../fields/DataAtual');
const JsonRegras    = require('../fields/TipoString');
let MissoesSchema = new Schema({

  nome,
  objetivo,
  regras : { type: Schema.Types.ObjectId, ref: 'Regras'},
  dataCadastro, //Seta a data atual por padrão
  JsonRegras,
  xp,
  dinheiro
});

module.exports = db.model('Missoes', MissoesSchema);
