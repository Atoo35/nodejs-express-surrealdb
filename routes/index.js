const userController = require('../controllers/userController');

module.exports = (app) => {
    app.get('/user/:id', userController.getUserById);
    app.get('/user', userController.getAllUsers);
    app.post('/user', userController.createUser);
    app.put('/user/:id', userController.updateUser);
    app.delete('/user/:id', userController.deleteUser);
}