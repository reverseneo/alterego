const mongoose = require('mongoose');

// Función para conectar (Asíncrona)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('-------------------------------------------');
        console.log('🌿 BASE DE DATOS CONECTADA (MongoDB Atlas)');
        console.log('-------------------------------------------');
    } catch (error) {
        console.error('❌ ERROR DE CONEXIÓN:', error.message);
        process.exit(1); // Detener la app si falla la DB
    }
};

module.exports = connectDB;