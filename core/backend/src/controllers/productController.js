const Product = require('../models/Product');

// --- 1. CREAR PRODUCTO (Create) ---
const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// --- 2. OBTENER PRODUCTOS + BUSCADOR (Read) ---
const getProducts = async (req, res) => {
    try {
        const { search } = req.query; 
        let query = {};
        
        // Si hay texto en la búsqueda, filtramos por nombre
        if (search) {
            query = { name: { $regex: search, $options: 'i' } }; 
        }

        const products = await Product.find(query);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// --- 3. ELIMINAR PRODUCTO (Delete) ---
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// --- 4. ESTADÍSTICAS DASHBOARD (Metrics) ---
const getStats = async (req, res) => {
    try {
        const totalProducts = await Product.countDocuments();
        // Aquí agregaremos más métricas a futuro (Ventas totales, Clientes, etc.)
        res.json({ total: totalProducts });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// --- EXPORTACIÓN FINAL ---
module.exports = {
    createProduct,
    getProducts,
    deleteProduct,
    getStats
};