const express = require('express');
const cors = require('cors');

// 1. Importar rutas
const productRoutes = require('./routes/productRoutes');
const clientRoutes = require('./routes/clientRoutes');
const userRoutes = require('./routes/userRoutes');
const saleRoutes = require('./routes/saleRoutes'); 

const app = express();

app.use(cors());
app.use(express.json());

// 2. Usar rutas
app.use('/api/products', productRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/users', userRoutes);
app.use('/api/sales', saleRoutes); // <--- NUEVO

app.get('/', (req, res) => {
    res.json({ mensaje: "API Online 🚀" });
});

module.exports = app;