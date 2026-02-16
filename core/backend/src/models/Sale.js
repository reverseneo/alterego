const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    // Referencia al Cliente (opcional, por si es una venta rápida a un desconocido)
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    
    // Lista de productos comprados en esta venta
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        name: String,
        quantity: Number,
        price: Number
    }],
    
    // Total a pagar
    total: { type: Number, required: true },
    
    // Vendedor que hizo la transacción
    seller: { type: String, default: 'Admin' }, 
    
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sale', saleSchema);