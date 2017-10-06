console.log('Antes de chamar configs');

const app = require('./config/app_config');
const db  = require('./config/db_config');

console.log('antes de chamar os models');

const pecas           = require('./models/pecas');
const pecaController  = require('./controllers/pecaController');
const RotaPecas       = require('./routes/pecasRouter');
const RotaMissoes     = require('./routes/missoesRouter');
const RotaCadastro    = require('./routes/pecasCadastrarRouter');
const RotaUsuarios    = require('./routes/usuariosRouter');

console.log('Antes de chamar o roteamento');

app.get('/',function(req,res){
  res.end('Bem vindo a API de manutenção de peças e missões');
});

//Rotas de Peças
app.use('/pecas/',RotaPecas);

//Rotas de Missões
app.use('/missoes/',RotaMissoes)

app.use('/cadastrar',RotaCadastro)

//Rotas de UsuáRotaUsuarios
app.use('/usuarios/',RotaUsuarios)
