const Sale = require('../models/Sale');
const Product = require('../models/Product');

// 1. CREAR VENTA Y DESCONTAR STOCK
const createSale = async (req, res) => {
    try {
        const { client, items, total, seller } = req.body;

        // A. Guardar el registro de la venta
        const newSale = new Sale({ client, items, total, seller });
        await newSale.save();

        // B. Bucle mágico: Recorrer lo vendido y descontar stock
        for (let item of items) {
            await Product.findByIdAndUpdate(item.product, {
                $inc: { stock: -item.quantity } // Resta la cantidad comprada
            });
        }

        res.status(201).json(newSale);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. OBTENER HISTORIAL DE VENTAS
const getSales = async (req, res) => {
    try {
        // populate('client', 'name') trae el nombre del cliente en lugar de solo su ID
        const sales = await Sale.find().populate('client', 'name').sort({ date: -1 });
        res.status(200).json(sales);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createSale,
    getSales
};