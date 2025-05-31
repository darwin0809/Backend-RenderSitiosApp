const mongoose = require('mongoose');

const SitioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  tipo: {
    type: String,
    enum: ['Iglesia', 'Estadio', 'Museo', 'Restaurante', 'Hotel', 'Otro'],
    required: true
  },
  ciudad: { type: mongoose.Schema.Types.ObjectId, ref: 'Ciudad', required: true },
  imagen: { type: String }
});

module.exports = mongoose.model('Sitio', SitioSchema);
