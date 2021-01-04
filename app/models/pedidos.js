import mongoose from "mongoose";

const model = mongoose.Schema({
  numero: {type: Number},
  status: {type: String, default: "Na fila", enum: ["Na fila", "Preparando", "Pronto"]},
  itens: [{type: mongoose.Types.ObjectId, ref: 'itens'}],
});


export default mongoose.model('pedidos', model);