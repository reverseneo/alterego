const express = require('express');
const cors = require('cors');

// 1. IMPORTAR RUTAS (Aquí estaba el error, faltaba la última línea)
const productRoutes = require('./routes/productRoutes');
const clientRoutes = require('./routes/clientRoutes');
const userRoutes = require('./routes/userRoutes'); 

const app = express();

app.use(cors());
app.use(express.json());

// 2. USAR RUTAS
app.use('/api/products', productRoutes); // Productos
app.use('/api/clients', clientRoutes);   // Clientes
app.use('/api/users', userRoutes);       // Usuarios

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ mensaje: "API Online 🚀" });
});

module.exports = app;