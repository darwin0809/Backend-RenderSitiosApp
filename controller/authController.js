const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

const generarToken = (usuario) => {
  return jwt.sign({ id: usuario._id, rol: usuario.rol }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });
};

const registrar = async (req, res) => {
  const { nombre, email, password, rol } = req.body;
  try {
    const existe = await Usuario.findOne({ email });
    if (existe) return res.status(400).json({ mensaje: 'Usuario ya existe' });

    const nuevoUsuario = new Usuario({ nombre, email, password, rol });
    await nuevoUsuario.save();

    const token = generarToken(nuevoUsuario);
    res.status(201).json({ usuario: nuevoUsuario, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(400).json({ mensaje: 'Credenciales inválidas' });

    const match = await usuario.compararPassword(password);
    if (!match) return res.status(400).json({ mensaje: 'Credenciales inválidas' });

    const token = generarToken(usuario);
    res.json({ usuario, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { registrar, login };
