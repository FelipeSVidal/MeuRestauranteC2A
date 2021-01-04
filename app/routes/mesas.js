import mesasModel from '../models/mesas'
import mongoose from 'mongoose'


const getMesas = async (req, res, next) => {
  try {
    let mesas = await mesasModel.find({});

    res.status(200).json(mesas);
  } catch (error) {
    console.error('error getMesas', error);
  }
}

const getOneMesa = async (req, res, next) => {
  try {
    let {id} = req.params;
    console.log(id);
    let mesa = await mesasModel.findOne({_id: id}).populate('pedidos');
    // await mesa.populate('pedidos.itens');
    await mesa.formatarPedidos();

    res.status(200).json(mesa);
  } catch (error) {
    console.error('error getOneMesa', error)
  }
}

const closeMesa = async (req, res, next) => {
  try {
    let {id} = req.params;
    let mesa = await mesasModel.findOne({_id: id});
    mesa.status = "Livre";
    mesa.pedidos = null;
    await mesa.save();

    res.status(200).json({type: 'success', message: `Mesa ${mesa.numero} fechada!`})
  } catch (error) {
    console.error('error closeMesa', error)
  }
}

const openMesa = async (req, res, next) => {
  try {
    let {id} = req.param;
    let mesa = await mesasModel.findOne({_id: id});
    mesa.status = "Ocupada";
    mesa.pedidos = [];
    await mesa.save();

    res.status(200).json({type: 'success', message: `Mesa ${mesa.numero} aberta!`})
  } catch (error) {
    console.error('error openMesa', error)
  }
}

export default {
  getMesas,
  getOneMesa,
  closeMesa,
  openMesa
}
