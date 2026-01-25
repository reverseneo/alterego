const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    stock: { 
        type: Number, 
        default: 0 
    },
    image: { 
        type: String, 
        default: 'https://via.placeholder.com/300' // Imagen por defecto si no suben una
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema);