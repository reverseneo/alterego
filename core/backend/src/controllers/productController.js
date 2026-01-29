const Product = require('../models/Product');

// 1. Obtener todos los productos
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find(); // Busca todo en la DB
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener productos' });
    }
};

// 2. Crear un nuevo producto
exports.createProduct = async (req, res) => {
    try {
        // Recibimos los datos del cuerpo de la petición (Frontend)
        const newProduct = new Product(req.body);
        await newProduct.save(); // Guardamos en MongoDB
        
        res.status(201).json({ message: '¡Producto creado!', product: newProduct });
    } catch (error) {
        res.status(400).json({ error: 'Error al crear producto' });
    }
};

// 3. Eliminar un producto (NUEVO)
exports.deleteProduct = async (req, res) => {
    try {
        // Buscamos por ID y lo borramos
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
};

exports.getStats = async (req, res) => {
    try {
        // Cuenta cuántos documentos hay en la colección 'Product'
        const totalProducts = await Product.countDocuments();
        
        // Aquí podríamos agregar más lógica (ej: precio promedio, stock total, etc.)
        
        res.json({ total: totalProducts });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};