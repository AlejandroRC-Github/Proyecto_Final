const express = require('express');

const app = espress();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Servidor en ejecucion en el puerto ${PORT}');
});

const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost', // Dirección del servidor MySQL
  user: 'usuario', // Usuario de la base de datos
  password: 'contraseña', // Contraseña de la base de datos
  database: 'AA_database.sql' // Nombre de la base de datos
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexión establecida con la base de datos');
});


module.exports = db;
