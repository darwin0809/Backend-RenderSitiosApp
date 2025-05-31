const mongoose = require('mongoose');

const VisitaSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  sitio: { type: mongoose.Schema.Types.ObjectId, ref: 'Sitio', required: true },
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Visita', VisitaSchema);
