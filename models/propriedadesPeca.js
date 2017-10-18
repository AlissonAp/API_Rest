const mongoose = require('mongoose');
let db = require('../config/db_config');
let Schema = mongoose.Schema;

//Variáveis
const GbMemoriaRam        = require('../fields/TipoNumber');
const GbPlacaVideo        = require('../fields/TipoNumber');
const GbArmazenamento     = require('../fields/TipoNumber');
const MhzMemoriaRam       = require('../fields/TipoNumber');
const GhzProcessador      = require('../fields/TipoNumber');
const GhzPlacaVideo       = require('../fields/TipoNumber');
const RpmLeituraEscrita   = require('../fields/TipoNumber');
const NucleosProcessador  = require('../fields/TipoNumber');
const ModeloProcessador   = require('../fields/TipoString');
const BitsPlacaVideo      = require('../fields/TipoNumber');
const cacheProcessador    = require('../fields/TipoNumber');
const cacheArmazenamento  = require('../fields/TipoNumber');
const MahBateria          = require('../fields/TipoNumber');
const CelulasBateria      = require('../fields/TipoNumber');
const TipoTela            = require('../fields/TipoString');
const TamanhoTela         = require('../fields/TipoNumber');
const ConexoesUSB         = require('../fields/TipoNumber');
const PossuiBluetooth     = require('../fields/TipoString');
const PossuiWebCam        = require('../fields/TipoString');
const PossuiLeitorCd_Dvd  = require('../fields/TipoString');
const ResistenciaCarcaca  = require('../fields/TipoString');
const PesoCarcaca         = require('../fields/TipoNumber');
const PossuiEntradaHDMI   = require('../fields/TipoString');
const SistemaOperacional  = require('../fields/TipoString');

let PropriedadeSchema = new Schema({
    GbMemoriaRam,				        // Medida em GB
    GbPlacaVideo,               // Medida em GB
    GbArmazenamento,            // Medida em GB
    MhzMemoriaRam,              // Medida em Mhz
    GhzProcessador,             // Medida em Ghz
    GhzPlacaVideo,              // Medida em Ghz
	  RpmLeituraEscrita,	        // Medida em RPM
    NucleosProcessador,
    ModeloProcessador,          // Pentiun, i3, i5, i7, amdfx
    BitsPlacaVideo,             // Medida em Bits , ex: 128 bits, 254 bits
    cacheProcessador,           // Medida em MB
    cacheArmazenamento,         // Medida em MB
    MahBateria,
    CelulasBateria,                 // Medida em miliAmperes, Ex 2800mah
    TipoTela,                   // LCD, LED, TOUCH
    TamanhoTela,                // 10, 14, 15, 15.6, 17 em polegadas
    ConexoesUSB,
    PossuiBluetooth,            //S ou N
    PossuiWebCam,               //S ou N
    PossuiLeitorCd_Dvd,         //S ou N
    ResistenciaCarcaca,			    // Fraca, Média, Forte
	  PesoCarcaca,					      // Medida em gramas
    PossuiEntradaHDMI,          // S ou N
    SistemaOperacional,         // Windows, Linux

});

module.exports = db.model('Propriedades', PropriedadeSchema);
