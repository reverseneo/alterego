const express = require('express');
const cors = require('cors');

// 1. Importar las rutas
const productRoutes = require('./routes/productRoutes');
const clientRoutes = require('./routes/clientRoutes'); // <--- NUEVO: Importamos rutas de clientes

const app = express();

app.use(cors());
app.use(express.json());

// 2. Usar las rutas
app.use('/api/products', productRoutes); // Rutas de productos
app.use('/api/clients', clientRoutes);   // <--- NUEVO: Rutas de clientes activadas

// Ruta de prueba (la que ya tenías)
app.get('/', (req, res) => {
    res.json({ mensaje: "API Online 🚀" });
});

module.exports = app;