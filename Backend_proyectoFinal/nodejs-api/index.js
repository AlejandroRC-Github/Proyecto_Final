import bodyParser from "body-parser"; // Para parsear el cuerpo de las peticiones POST en formato JSON
import cors from "cors"; // Para permitir solicitudes de otros dominios
import express from "express"; // Marco de aplicación web para Node.js
import fs from 'fs'; // Para manejar operaciones de archivos

// Creación de la aplicación Express
const app = express();

// Middlewares
app.use(bodyParser.json()); // Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(cors({ origin: "http://localhost:3000" })); // Middleware para permitir solicitudes desde http://localhost:3000

// Funciones para leer y escribir datos en el archivo JSON
const readData = () => {
    try {
        const data = fs.readFileSync("./db.json"); // Lee el archivo JSON
        return JSON.parse(data); // Devuelve los datos parseados
    } catch (error) {
        console.log(error); // Manejo de errores
    }
}

const writeData = (data) => {
    try {
        fs.writeFileSync("./db.json", JSON.stringify(data)); // Escribe los datos en el archivo JSON
    } catch (error) {
        console.log(error); // Manejo de errores
    }
}

// Endpoints para comentarios

// GET - Obtener todos los comentarios
app.get("/comentarios", (req, res) => {
    const data = readData(); // Lee los datos del archivo JSON
    res.json(data.Comentarios); // Devuelve todos los comentarios
})

// GET - Obtener un comentario por su ID
app.get("/comentarios/:id", (req, res) => {
    const data = readData(); // Lee los datos del archivo JSON
    const id = parseInt(req.params.id); // Obtiene el ID del comentario de los parámetros de la solicitud
    const comentario = data.Comentarios.find((comentario) => comentario.id === id); // Busca el comentario por su ID
    res.json(comentario); // Devuelve el comentario encontrado
})

// POST - Crear un nuevo comentario
app.post("/comentarios", (req, res) => {
    const data = readData(); // Lee los datos del archivo JSON
    const body = req.body; // Obtiene el cuerpo de la solicitud
    const nuevoComentario = {
        id: data.Comentarios.length + 1, // Genera un nuevo ID para el comentario
        ...body,
    };
    data.Comentarios.push(nuevoComentario); // Agrega el nuevo comentario al arreglo de comentarios
    writeData(data); // Escribe los datos actualizados en el archivo JSON
    res.json(nuevoComentario); // Devuelve el nuevo comentario creado
})

// PUT - Actualizar un comentario existente
app.put("/comentarios/:id", (req, res) => {
    const data = readData(); // Lee los datos del archivo JSON
    const body = req.body; // Obtiene el cuerpo de la solicitud
    const id = parseInt(req.params.id); // Obtiene el ID del comentario de los parámetros de la solicitud
    const comentarioIndex = data.Comentarios.findIndex((comentario) => comentario.id === id); // Busca el índice del comentario por su ID
    
    if (comentarioIndex !== -1) {
        data.Comentarios[comentarioIndex] = {
            ...data.Comentarios[comentarioIndex],
            ...body,
        };
        writeData(data); // Escribe los datos actualizados en el archivo JSON
        res.json({ message: "Comentario actualizado correctamente" }); // Devuelve un mensaje de éxito
    } else {
        res.status(404).json({ message: "Comentario no encontrado" }); // Devuelve un mensaje de error si el comentario no se encuentra
    }
});

// DELETE - Eliminar un comentario existente
app.delete("/comentarios/:id", (req, res) => {
    const data = readData(); // Lee los datos del archivo JSON
    const id = parseInt(req.params.id); // Obtiene el ID del comentario de los parámetros de la solicitud
    const comentarioIndex = data.Comentarios.findIndex((comentario) => comentario.id === id); // Busca el índice del comentario por su ID

    if (comentarioIndex !== -1) { // Verifica si se encontró el comentario
        data.Comentarios.splice(comentarioIndex, 1); // Elimina el comentario del arreglo de comentarios
        writeData(data); // Escribe los datos actualizados en el archivo JSON
        res.json({ message: "Comentario borrado correctamente" }); // Devuelve un mensaje de éxito
    } else {
        res.status(404).json({ message: "Comentario no encontrado" }); // Devuelve un mensaje de error si el comentario no se encuentra
    }
});

// PRUEBA DE QUE FUNCIONA EN LOCALHOST:3000 Y DECLARACION DE PUERTO

// Ruta de prueba para verificar que el servidor está en funcionamiento
app.get("/", (req, res) => {
    res.send("Esto es una api rest para mi backend");
});

// Inicia el servidor en el puerto 4001
app.listen(4001, () => {
    console.log('server listening on port 4001');
});