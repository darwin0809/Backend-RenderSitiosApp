const PersonaFamosa = require('../models/PersonaFamosa');
const Visita = require('../models/Visita');
const Sitio = require('../models/sitio');
const Ciudad = require('../models/ciudad');
const Usuario = require('../models/Usuario');

const consultaFamosos = async (req, res) => {
  const datos = await PersonaFamosa.find().populate({
    path: 'ciudadNacimiento',
    populate: { path: 'pais' }
  });
  res.json(datos.map(p => ({
    nombre: p.nombre,
    tipoFama: p.tipoFama,
    ciudad: p.ciudadNacimiento?.nombre,
    pais: p.ciudadNacimiento?.pais?.nombre
  })));
};

const topSitiosVisitados = async (req, res) => {
  const visitas = await Visita.aggregate([
    { $group: { _id: '$sitio', total: { $sum: 1 } } },
    { $sort: { total: -1 } },
    { $limit: 10 }
  ]);

  const sitiosConDetalle = await Sitio.find({ _id: { $in: visitas.map(v => v._id) } })
    .populate('ciudad');

  const resultado = visitas.map(v => {
    const sitio = sitiosConDetalle.find(s => s._id.toString() === v._id.toString());
    return {
      sitio: sitio?.nombre,
      ciudad: sitio?.ciudad?.nombre,
      totalVisitas: v.total
    };
  });

  res.json(resultado);
};

// Adicional: sitios por ciudad
const sitiosPorCiudad = async (req, res) => {
  const datos = await Sitio.aggregate([
    { $group: { _id: '$ciudad', totalSitios: { $sum: 1 } } }
  ]);

  const ciudades = await Ciudad.find({ _id: { $in: datos.map(d => d._id) } }).populate('pais');

  const resultado = datos.map(d => {
    const ciudad = ciudades.find(c => c._id.toString() === d._id.toString());
    return {
      ciudad: ciudad?.nombre,
      pais: ciudad?.pais?.nombre,
      totalSitios: d.totalSitios
    };
  });

  res.json(resultado);
};

// Adicional: usuarios más activos (más visitas)
const usuariosActivos = async (req, res) => {
  const datos = await Visita.aggregate([
    { $group: { _id: '$usuario', totalVisitas: { $sum: 1 } } },
    { $sort: { totalVisitas: -1 } },
    { $limit: 5 }
  ]);

  const usuarios = await Usuario.find({ _id: { $in: datos.map(d => d._id) } });

  const resultado = datos.map(d => {
    const usuario = usuarios.find(u => u._id.toString() === d._id.toString());
    return {
      nombre: usuario?.nombre,
      email: usuario?.email,
      totalVisitas: d.totalVisitas
    };
  });

  res.json(resultado);
};

module.exports = { consultaFamosos, topSitiosVisitados, sitiosPorCiudad, usuariosActivos };
