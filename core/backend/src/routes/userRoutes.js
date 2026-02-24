const express = require('express');
const router = express.Router();
// Asegúrate de importar loginUser aquí:
const { createUser, getUsers, deleteUser, loginUser } = require('../controllers/userController');

router.post('/', createUser);
router.get('/', getUsers);
router.delete('/:id', deleteUser);
// NUEVO ENDPOINT PARA LOGIN
router.post('/login', loginUser);

module.exports = router;