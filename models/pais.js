const mongoose = require('mongoose');

const PaisSchema = new mongoose.Schema({
  nombre: { type: String, required: true }
});

module.exports = mongoose.model('Pais', PaisSchema);

