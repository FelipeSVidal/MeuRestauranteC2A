import mongoose from "mongoose";

const model = mongoose.Schema({
  numero: {type: Number},
  status: {type: String, default: "Na fila", enum: ["Na fila", "Preparando", "Pronto"]},
  items: [{type: mongoose.Types.ObjectId, ref: 'items'}],
});


export default mongoose.model('pedidos', model);