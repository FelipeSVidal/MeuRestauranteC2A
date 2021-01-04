import Pedido from '../models/pedidos';
import Mesa from '../models/mesas';
import Item from '../models/itens';

const pedir = async (req, res, next) => {
  try {
    const {mesaId, itemId} = req.params;
    const mesa = await Mesa.findOne({_id: mesaId});
    // const item = await Mesa.findOne({_id: itemId}); Modo correto
    const item = (await Item.find({}))[itemId];

    const pedido = await Pedido.create({
      numero: Math.random() * 1000,
      itens: [item._id],
    });

    mesa.pedidos.push(pedido._id);
    await mesa.save();

  } catch (error) {
    console.log('error in pedir', error);
  }
}

export default {
  pedir
}