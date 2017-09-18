const mongoose = require('mongoose');
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
  JsonRegras
});

module.exports = mongoose.model('Missoes', MissoesSchema);
