const mongoose = require('mongoose');

const PlatoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  sitio: { type: mongoose.Schema.Types.ObjectId, ref: 'Sitio', required: true },
  ciudad: { type: mongoose.Schema.Types.ObjectId, ref: 'Ciudad', required: true }, // 👈 nuevo campo
  imagen: { type: String }
});

module.exports = mongoose.model('Plato', PlatoSchema);
