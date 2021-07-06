const express = require('express');
const server = express();
const Users = require('../users/usersModel');
const knex = require('../data/dbConfig');

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
    knex
    .insert(user, 'id')
    .into('users')
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ err: "failed to post user"})
    })
});


server.delete('/:id', (req, res) => {
    knex('users')
    .where({ id: req.params.id })
    .del()
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({ err: "failed to delete user"})
    })
})


module.exports = server;