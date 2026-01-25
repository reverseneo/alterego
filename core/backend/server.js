require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/database'); // <--- 1. Importamos la conexión

const PORT = process.env.PORT || 3000;

// 2. Ejecutamos la conexión ANTES de levantar el servidor
connectDB(); 

app.listen(PORT, () => {
    console.log(`\n=============================================`);
    console.log(`🚀 SERVIDOR CORRIENDO EN: http://localhost:${PORT}`);
    console.log(`=============================================\n`);
});