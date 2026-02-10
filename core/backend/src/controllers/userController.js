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

module.exports = {
    createUser,
    getUsers,
    deleteUser
};