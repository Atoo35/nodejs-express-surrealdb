const userService = require('../services/userService');

const createUser = async (req, res) => {
    const user = req.body;
    await userService.createUser(user);
    res.sendStatus(201);
}

const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
}

const getUserById = async (req, res) => {
    const id = req.params.id;
    const user = await userService.getUserById(id);
    res.status(200).json(user);
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const user = req.body;
    const updated = await userService.updateUser(id, user);
    res.status(200).json(updated);
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    await userService.deleteUser(id);
    res.sendStatus(200)
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
}