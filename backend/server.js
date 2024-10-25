const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
console.log("ingreso al server");


//Inicializacion de la aplicacion express
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Conexion a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/BoyacaEsVida')
    .then(() => console.log('Conectado correctamente a MongoDB'))
    .catch(error => {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1); //Salir si no se puede conectar a la base de datos
    });

//Definir el esquema
const recomendadosSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    descripción: { type: String, required: true },
    urlPueblo: { type: String, required: true },
}, { timestamps: true }); //añadir timestramps para createdAt y updateAt

const recomendados = mongoose.model('recomendadoTuristico', recomendadosSchema,);

//rutas
//ruta GET para obtener todos los productos//

app.get('/api/recomendadosTuristicos', async (req, res) => {
    try {
        const nombre = await recomendados.find(); //buscar todos los nombres
        //const nombre =await recomendados.find({name:"paipa"});// buscar por especificogit statu
        res.status(200).json(nombre);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }

});

//iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});