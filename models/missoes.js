const mongoose = require('mongoose');
let db = require('../config/db_config');
mongoose.Promise = global.Promise; // Resolve deprecateWarning Mongoose : mpromise is deprecated
let Schema = mongoose.Schema;
let regras = require('../models/regrasMissao');

const nome          = require('../fields/TipoString');
const objetivo      = require('../fields/TipoString');
const dataCadastro  = require('../fields/DataAtual');
const XP            = require("../fields/TipoNumber");

let MissoesSchema = new Schema({

  nome,
  objetivo,
<<<<<<< HEAD
  regras : { type: Schema.Types.ObjectId, ref: 'Regras'},
  dataCadastro, //Seta a data atual por padrão
  JsonRegras,
  xp,
  dinheiro
=======
  regras : regras,
  dataCadastro, //Seta a data atual por padrão  
  XP,
>>>>>>> 1e81c1d0259bf830cbfd4dc1a6b24a04c3986b31
});

module.exports = db.model('Missoes', MissoesSchema);
