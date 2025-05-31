const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const paisRoutes = require('./routes/paisroutes');
const ciudadRoutes = require('./routes/ciudadroutes');
const personaRoutes = require('./routes/personaroutes');
const sitioRoutes = require('./routes/sitioroutes');
const platoRoutes = require('./routes/platoroutes');
const authRoutes = require('./routes/authRoutes');
const visitaRoutes = require('./routes/visitaRoutes');
const tagRoutes = require('./routes/tagRoutes');
const consultasRoutes = require('./routes/consultaRoutes');

dotenv.config();
const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/paises', paisRoutes);
app.use('/api/ciudades', ciudadRoutes);
app.use('/api/personas', personaRoutes);
app.use('/api/sitios', sitioRoutes);
app.use('/api/platos', platoRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/visitas', visitaRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/consultas', consultasRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
    });
  })
  .catch(err => console.error('Error conectando a MongoDB:', err));
