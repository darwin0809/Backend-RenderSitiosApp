const mongoose = require('mongoose');

const PlatoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  sitio: { type: mongoose.Schema.Types.ObjectId, ref: 'Sitio', required: true }
});

module.exports = mongoose.model('Plato', PlatoSchema);
