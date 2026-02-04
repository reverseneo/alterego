const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // El email será único
    phone: { type: String }, // Teléfono para contactarlo
    address: { type: String }, // Dirección (útil para envíos)
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Client', clientSchema);