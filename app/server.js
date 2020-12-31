import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import bodyParser from 'body-parser';
import actions from './actions';
import jwt from './middlewares/token';
require('dotenv').config();
const app = express();

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
// mongoose.set('debug', true)
mongoose.connect(process.env.DB)
mongoose.Promise = Promise
mongoose.connection.on('error', (err) => console.error('Erro ao se conectar ao MongoDB: ', process.env.DB, err))
mongoose.connection.on('open', () => console.log('Conectado ao mongoDB:', process.env.DB))

actions.createCollections();
// actions.populateSeeds();

app.use(bodyParser.json({ limit: "50mb" }));
app.use((req, res, next) => {
  console.log(req.originalUrl)
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  res.header("Access-Control-Allow-Methods", "DELETE, GET, POST, PUT, PATCH")
  next()
});

app.use(jwt.jwtDecode);
app.use("/api", routes);
app.use(function(req, res, next) {
  res.status(404).json('O endereço requisitado não existe')
});

app.listen(4000, (err) => {
  if (err)
    console.log('Erro ao tentar iniciar a aplicação sem SSL', err)
  console.log(`Aplicação iniciada sem SSL na porta 4000`)

})
