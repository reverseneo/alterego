const Client = require('../models/Client');

// 1. CREAR CLIENTE
const createClient = async (req, res) => {
    try {
        const newClient = new Client(req.body);
        await newClient.save();
        res.status(201).json(newClient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 2. OBTENER CLIENTES (Con Buscador)
const getClients = async (req, res) => {
    try {
        const { search } = req.query;
        let query = {};

        if (search) {
            // Busca por nombre O por email
            query = { 
                $or: [
                    { name: { $regex: search, $options: 'i' } },
                    { email: { $regex: search, $options: 'i' } }
                ]
            };
        }

        const clients = await Client.find(query).sort({ createdAt: -1 }); // Los más nuevos primero
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 3. ELIMINAR CLIENTE
const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;
        await Client.findByIdAndDelete(id);
        res.json({ message: 'Cliente eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createClient,
    getClients,
    deleteClient
};