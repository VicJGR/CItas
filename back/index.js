import express from 'express';
import cors from 'cors';
import CITAS from './citas.js';



// definim port on e'executarà el servidor
const PORT = 5000;

// creem express app
const app = express();

// activem cors per no tenir problemes des del front
app.use(cors());

// definim public com a ruta per axius estàtics(EN ESTE PROYECTO NO HAY)
app.use(express.static('public'))

// ruta /citas retorna tota la llista
app.get('/citas', function (req, res) {
    res.json(CITAS)
})

// ruta /citas/random retorna una cita aleatoria assignada pel seu index(random)
app.get('/citas/random', function (req, res) {
    let random = Math.floor ( Math.random() * 3 )
        res.json(CITAS[random])
})

// iniciem el servidor al port indicat
app.listen(PORT, function () {
    console.log('Escoltant port ' + PORT)
})
