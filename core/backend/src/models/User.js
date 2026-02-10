const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // En el futuro encriptaremos esto
    role: { 
        type: String, 
        enum: ['admin', 'vendedor'], // Solo permitimos estos dos roles
        default: 'vendedor' 
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);