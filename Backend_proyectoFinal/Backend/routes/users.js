const express = require('express');
const router = express.Router();
const db = require('../server');

// Ruta para obtener todos los usuarios
router.get('/users', (req, res) => {
        const sql = 'SELECT * FROM users';
        db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Ruta para agregar un nuevo usuario
router.post('/users', (req, res) => {
    const { username, email } = req.body;
    const sql = 'INSERT INTO users (username, email) VALUES (?, ?)';
    db.query(sql, [username, email], (err, result) => {
        if (err) throw err;
        res.send('Usuario agregado correctamente');
    });
});

module.exports = router;
