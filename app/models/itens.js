import mongoose from "mongoose";

const model = mongoose.Schema({
  Nome: {type: String},
  status: {type: String, default: "Disponível", enum: ['Disponível', 'Esgotado']},
  preco: {type: Number},
  foto: {type: String}
});

export default mongoose.model('itens', model);