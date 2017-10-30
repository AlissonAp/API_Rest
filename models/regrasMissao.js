const mongoose = require('mongoose');
let db = require('../config/db_config');
mongoose.Promise = global.Promise; // Resolve deprecateWarning Mongoose : mpromise is deprecated
let Schema = mongoose.Schema;

//Variáveis
const regraGbMemoriaRam        = require('../fields/TipoNumber');
const regraGbPlacaVideo        = require('../fields/TipoNumber');
const regraGbArmazenamento     = require('../fields/TipoNumber');
const regraMhzMemoriaRam       = require('../fields/TipoNumber');
const regraGhzProcessador      = require('../fields/TipoNumber');
const regraGhzPlacaVideo       = require('../fields/TipoNumber');
const regraRpmLeituraEscrita   = require('../fields/TipoNumber');
const regraNucleosProcessador  = require('../fields/TipoNumber');
const regraModeloProcessador   = require('../fields/TipoString');
const regraBitsPlacaVideo      = require('../fields/TipoNumber');
const regracacheProcessador    = require('../fields/TipoNumber');
const regracacheArmazenamento  = require('../fields/TipoNumber');
const regraMahBateria          = require('../fields/TipoNumber');
const regraCelulasBateria      = require('../fields/TipoNumber');
const regraTipoTela            = require('../fields/TipoString');
const regraTamanhoTela         = require('../fields/TipoNumber');
const regraConexoesUSB         = require('../fields/TipoNumber');
const regraPossuiBluetooth     = require('../fields/TipoString');
const regraPossuiWebCam        = require('../fields/TipoString');
const regraPossuiLeitorCd_Dvd  = require('../fields/TipoString');
const regraResistenciaCarcaca  = require('../fields/TipoString');
const regraPesoCarcaca         = require('../fields/TipoNumber');
const regraPossuiEntradaHDMI   = require('../fields/TipoString');
const regraSistemaOperacional  = require('../fields/TipoString');

let RegrasSchema = new Schema({
    regraGbMemoriaRam,				       // Medida em GB
    regraGbPlacaVideo,               // Medida em GB
    regraGbArmazenamento,            // Medida em GB
    regraMhzMemoriaRam,              // Medida em Mhz
    regraGhzProcessador,             // Medida em Ghz
    regraGhzPlacaVideo,              // Medida em Ghz
	regraRpmLeituraEscrita,	         // Medida em RPM
    regraNucleosProcessador,
    regraModeloProcessador,          // Pentiun, i3, i5, i7, amdfx
    regraBitsPlacaVideo,             // Medida em Bits , ex: 128 bits, 254 bits
    regracacheProcessador,           // Medida em MB
    regracacheArmazenamento,         // Medida em MB
    regraMahBateria,                 // Medida em miliAmperes, Ex 2800mah
    regraTipoTela,                   // LCD, LED, TOUCH
    regraTamanhoTela,                // 10, 14, 15, 15.6, 17 em polegadas
    regraCelulasBateria,
    regraConexoesUSB,
    regraPossuiBluetooth,            //S ou N
    regraPossuiWebCam,               //S ou N
    regraPossuiLeitorCd_Dvd,         //S ou N
    regraResistenciaCarcaca,			    // Fraca, Média, Forte
	regraPesoCarcaca,					      // Medida em gramas
    regraPossuiEntradaHDMI,          // S ou N
    regraSistemaOperacional,         // Windows, Linux

});

module.exports = RegrasSchema; //db.model('Regras', RegrasSchema);
