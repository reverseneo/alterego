const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Definimos las rutas
router.get('/', productController.getProducts);   // GET /api/products
router.post('/', productController.createProduct); // POST /api/products

// NUEVA RUTA: Recibe el ID del producto a borrar
router.delete('/:id', productController.deleteProduct);

module.exports = router;