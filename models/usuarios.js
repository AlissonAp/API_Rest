const mongoose = require('mongoose');
let db = require('../config/db_config');
mongoose.Promise = global.Promise; // Resolve deprecateWarning Mongoose : mpromise is deprecated
let Schema = mongoose.Schema;

const nome             = require('../fields/TipoString');
const email            = require('../fields/TipoStringLowercase');
const senha            = require('../fields/TipoString');
const nivel            = require('../fields/TipoNumber');
const pontuacao        = require('../fields/TipoNumber');
const dinheiro         = require('../fields/TipoNumber');
const ultimaMissao     = require('../fields/TipoNumber');
const ultimoAcesso     = require('../fields/Data');
const imagem           = require('../fields/TipoString');

let UsuariosSchema = new Schema({

  nome,
  email,
  senha,
  nivel,
  pontuacao,
  dinheiro,
  ultimaMissao,
  ultimoAcesso,
  imagem

});

module.exports = db.model('Usuarios', UsuariosSchema);
