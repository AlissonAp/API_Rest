const app = require('./config/app_config');
const db  = require('./config/db_config');

const pecas           = require('./models/pecas');
const pecaController  = require('./controllers/pecaController');
const RotaPecas       = require('./routes/pecasRouter');
const RotaMissoes     = require('./routes/missoesRouter');

app.get('/',function(req,res){
  res.end('Bem vindo a API de manutenção de peças e missões');
});

//Rotas de Peças
app.use('/pecas',RotaPecas);

//Rotas de Missões
app.use('/missoes',RotaMissoes)
