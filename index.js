var express = require('express');
const database = require('./config/database');
var app = express();
const routes = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
routes(app);
database.connectToServer().then(() => {
    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });
});