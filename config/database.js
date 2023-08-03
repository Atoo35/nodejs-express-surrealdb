const { Surreal } = require('surrealdb.js');

var _db;
module.exports = {
    connectToServer: async function (
        connString = 'http://localhost:8000/rpc',
        username = 'root',
        password = 'root',
        namespace = 'test',
        db = 'test',) {
        try {
            _db = new Surreal(connString);
            await _db.signin({
                user: username,
                pass: password,
            });

            await _db.use({ ns: namespace, db: db });
        } catch (error) {
            console.log(error);
        }
    },

    getDb: function () {
        return _db;
    }
}