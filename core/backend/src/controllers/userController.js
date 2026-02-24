const User = require('../models/User');

// 1. CREAR USUARIO
const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 2. OBTENER USUARIOS
const getUsers = async (req, res) => {
    try {
        // Devolvemos todos los usuarios ordenados por fecha
        const users = await User.find().sort({ createdAt: -1 });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 3. ELIMINAR USUARIO
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 4. LOGIN DE USUARIO (NUEVO)
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Buscamos si existe un usuario con ese email
        const user = await User.findOne({ email });

        // Validamos si el usuario existe y si la contraseña coincide
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Credenciales incorrectas ❌' });
        }

        // Si todo está bien, enviamos los datos del usuario (sin la contraseña)
        res.status(200).json({
            message: 'Login exitoso',
            user: {
                id: user._id,
                name: user.name,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Exportamos TODAS las funciones
module.exports = {
    createUser,
    getUsers,
    deleteUser,
    loginUser // <--- Añadido aquí
};