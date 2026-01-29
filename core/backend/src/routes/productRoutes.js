const express = require('express');
const router = express.Router();
// REVISA ESTA LÍNEA:
const { createProduct, getProducts, deleteProduct, getStats } = require('../controllers/productController');

// Rutas
router.post('/', createProduct);   // Para guardar
router.get('/', getProducts);      // Para buscar y listar
router.get('/stats', getStats);    // Para el dashboard
router.delete('/:id', deleteProduct); // Para borrar

module.exports = router;