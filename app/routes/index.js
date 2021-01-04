import express from 'express';
import mesas from './mesas';
import pedidos from './pedidos';

let router = express.Router();

router
// ####### COMPANIES ####### //
.get("/mesas", mesas.getMesas)
.get("/mesas/:id", mesas.getOneMesa)
.get("/mesas/open/:id", mesas.openMesa)
.get("/mesas/close/:id", mesas.closeMesa)
// ####### PEDIDOS ######### //
.get("/pedidos/:mesaId/:itemId", pedidos.pedir)

export default router;