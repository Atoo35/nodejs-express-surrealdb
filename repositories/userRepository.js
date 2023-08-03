const database = require('../config/database');

const getAllUsers = async () => {
    const db = database.getDb();
    let users = await db.select("user");
    return users;
}

const createUser = async (user) => {
    const db = database.getDb();
    let created = await db.create("user", user);
    return created;
}

const getUserById = async (id) => {
    const db = database.getDb();
    let user = await db.select(id);
    return user;
}

const updateUser = async (id, user) => {
    const db = database.getDb();
    let updated = await db.update(id, user);
    return updated;
}

const deleteUser = async (id) => {
    const db = database.getDb();
    let deleted = await db.delete(id);
    return deleted;
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}
