import express from "express";
import fs from 'fs'; //
import bodyParser from "body-parser"; //para que el post entienda el formato json

const app = express();
app.use(bodyParser.json())

const readData = () => {
    try{
        const data = fs.readFileSync("./db.json");
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
    }

const writeData = (data) => {
    try{
        fs.writeFileSync("./db.json", JSON.stringify(data))
    } catch (error) { 
        console.log (error);
    }
}

app.get("/imagenes", (req, res) => {
    const data = readData();
    res.json(data.Imagenes);
})

app.get("/imagenes/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const imagen = data.Imagenes.find((imagen) => imagen.id === id);
    res.json(imagen);
})


// COMENTARIOS A PARTIR DE AQUI

// GET

app.get("/comentarios", (req, res) => {
    const data = readData();
    res.json(data.Comentarios);
})

app.get("/comentarios/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const comentario = data.Comentarios.find((comentario) => comentario.id === id);
    res.json(comentario);
})


// POST


app.post("/comentarios", (req, res) => {
    const data = readData();
    const body = req.body;
    const nuevoComentario = {
        id: data.Comentarios.length + 1,
        ... body,
    };
    data.Comentarios.push(nuevoComentario);
    writeData(data);
    res.json(nuevoComentario)
})


// PUT


app.put("/comentarios/:id", (req, res) => {
    const data = readData();
    const body = req.body;
    const id = parseInt(req.params.id);
    const comentarioIndex = data.Comentarios.findIndex((comentario) => comentario.id === id);
    
    if (comentarioIndex !== -1) {
        data.Comentarios[comentarioIndex] = {
            ...data.Comentarios[comentarioIndex],
            ...body,
        };
        writeData(data);
        res.json({ message: "Comentario actualizado correctamente" });
    } else {
        res.status(404).json({ message: "Comentario no encontrado" });
    }
});


// DELETE 

app.delete("/comentarios/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const comentarioIndex = data.Comentarios.findIndex((comentario) => comentario.id === id);

    if (comentarioIndex !== -1) {
        data.Comentarios.splice(comentarioIndex, 1);
        writeData(data);
        res.json({ message: "Comentario borrado correctamente" });
    } else {
        res.status(404).json({ message: "Comentario no encontrado" });
    }
});


// PRUEBA DE QUE FUNCIONA EN LOCALHOST:3000
// Y DECLARACION DE PUERTO


app.get("/", (req, res) => {
    res.send("Esto es una api rest para mi backend");
});

app.listen(3000, () => {
    console.log('server listening on port 3000');
});
