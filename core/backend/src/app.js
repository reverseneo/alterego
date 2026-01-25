const express = require('express');
const cors = require('cors');

// 1. Importar las rutas
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// 2. Usar las rutas
app.use('/api/products', productRoutes); // Prefijo para todas las rutas de productos

// Ruta de prueba (la que ya tenías)
app.get('/', (req, res) => {
    res.json({ mensaje: "API Online 🚀" });
});

module.exports = app;