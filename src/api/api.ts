const mongoose = require('mongoose');
const express = require('express');
const User = require('./models/user');
const router = express.Router();

router.get('/read', (req, res) => {
    User.find({}).then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).send(err.message);
    });
});

router.get('/write', (req, res) => {
    User.create({
        email: 'hello@world.com',
        password: 'password',
        firstName: 'hello',
        lastName: 'world'
    }).then((result) => {
        res.status(200).send("User saved !");
    }).catch((err) => {
        res.status(400).send(err.message);
    });
});


export = router;
