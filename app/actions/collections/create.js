import itens from '../../models/itens'
import itensModel from '../../models/itens'
import mesasModel from '../../models/mesas'
import pedidosModel from '../../models/pedidos'

const action = async () => {
  await itensModel.createCollection();
  await mesasModel.createCollection();
  await pedidosModel.createCollection();
}

export default action;