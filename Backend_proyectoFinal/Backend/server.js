const express = require('express');

const app = espress();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Servidor en ejecucion en el puerto ${PORT}');
});

const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'usuario',
  password: 'contraseña',
  database: 'AA_database.sql'

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexión establecida con la base de datos');
});


module.exports = db;
