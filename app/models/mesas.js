import mongoose from "mongoose";

const model = mongoose.Schema({
  numero: {type: Number},
  status: {type: String, default: "Livre", enum: ["Livre", "Ocupada"]},
  pedidos: [{type: mongoose.Types.ObjectId, ref: 'pedidos'}]
});

model.methods.formatarPedidos = function() {
  this.populate('pedidos');
  this.populate('pedidos.itens');
  let todosItens = this.pedidos.map( pedido => (
    pedido.itens
  ));

  let formatadosItens = todosItens.reduce( (prev, curr) => {
    if(prev.some( p => p._id === curr._id)){
      prev = prev.map(c => {
        if(c._id === curr._id){
          c.qtd = c.qtd + 1;
        }
      });
    } else {
      prev.push({...curr, qtd: 1});
    }
  }, []);

  this.formated = formatadosItens;

}

export default mongoose.model('mesas', model);