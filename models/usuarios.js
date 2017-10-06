const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const nome             = require('../fields/TipoString');
const email            = require('../fields/TipoString');
const senha            = require('../fields/TipoNumber');
const nivel            = require('../fields/TipoNumber');
const pontuacao        = require('../fields/TipoNumber');
const dinheiro         = require('../fields/TipoNumber');
const ultimaMissao     = require('../fields/TipoNumber');
const ultimoAcesso     = require('../fields/Data');

let UsuariosSchema = new Schema({

  nome,
  email,
  senha,
  nivel,
  pontuacao,
  dinheiro,
  ultimaMissao,
  ultimoAcesso

});

module.exports = mongoose.model('Usuarios', UsuariosSchema);
