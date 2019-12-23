const mongoose = require('mongoose');
const colors = require('colors/safe');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

mongoose.connect('mongodb://mongodb:27017/mydb', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use('/api', require('./api/api'));

    const server = app.listen(8081, () => {
        colors.enable();
        console.log(`Server is listening on http://localhost:${server.address().port}`);
        console.log(colors.brightGreen.bold('Va sur: http://localhost:8081/api/write'));
        console.log(colors.brightGreen.bold('Puis sur: http://localhost:8081/api/read'));
    });
}).catch((err) => {
    throw err;
});

export = {};
