const express = require('express');
const server = express();
const Users = require('../users/usersModel');

server.get('/', (req, res) => {
    Users.getAll()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(error => {
        res.status(500).json(error)
    });
});

server.post('/', (req, res) => {
    const user = req.body;
    Users
    .insert(user, 'id')
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(500).json({ err: "failed to post user"})
    })
});

module.exports = server;