const userRepository = require('../repositories/userRepository');

const createUser = async (user) => {
    let created = await userRepository.createUser(user);
    return created;
}

const getAllUsers = async () => {
    let users = await userRepository.getAllUsers();
    return users;
}

const getUserById = async (id) => {
    let user = await userRepository.getUserById(id);
    return user;
}

const updateUser = async (id, user) => {
    let updated = await userRepository.updateUser(id, user);
    return updated;
}

const deleteUser = async (id) => {
    let deleted = await userRepository.deleteUser(id);
    return deleted;
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
}