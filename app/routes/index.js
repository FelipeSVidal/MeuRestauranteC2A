import express from 'express';
import mesas from './mesas';

let router = express.Router();

router
// ####### COMPANIES ####### //
.get("/mesas", mesas.get)
.get("/mesas/:id", mesas.getOne)
.post("/mesas", mesas.create)
.post("/mesas/update", mesas.update)
.delete("/mesas/", mesas.remove)
.get("/mesas", mesas.getPoints)

export default router;