import mongoose from "mongoose";

const model = mongoose.Schema({
  numero: {type: Number},
  status: {type: String, default: "Livre", enum: ["Livre", "Ocupada"]},
  pedidos: [{type: mongoose.Types.ObjectId, ref: 'pedidos'}]
});

export default mongoose.model('mesas', model);