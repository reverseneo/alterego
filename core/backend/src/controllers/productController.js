const Product = require('../models/Product');

// 1. CREAR PRODUCTO
const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 2. OBTENER PRODUCTOS (Con Buscador)
const getProducts = async (req, res) => {
    try {
        const { search } = req.query; 
        let query = {};
        
        if (search) {
            query = { name: { $regex: search, $options: 'i' } }; 
        }

        const products = await Product.find(query);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 3. ELIMINAR PRODUCTO
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 4. ESTADÍSTICAS
const getStats = async (req, res) => {
    try {
        const totalProducts = await Product.countDocuments();
        res.json({ total: totalProducts });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// --- AHORA SÍ FUNCIONARÁ ---
// Al ser constantes, JS ya las reconoce aquí abajo
module.exports = {
    createProduct,
    getProducts,
    deleteProduct,
    getStats
};