'use strict' // esto es para utilizar las nuevas caracteristicas de ES6
const express = require('express')
const bodyParser = require('body-parser') // esta libreria funciona como middleware
const mongoose = require('mongoose')
// para usar el modelo
const Product = require('./models/product')
const app = express()
const port = process.env.PORT || 3000 // selecciona el puerto del entorno y si no lo encuentra utiliza el 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()) // para poder admitir peticiones con el cuerpo del mensaje en formato json

/*####### NOTAS SOBRE TIPOS DE PETICIONES######
// primer parametro: url a la que se accedera
// segundo parametro: un callback con 'req' y 'res' como parametros
// para poner parametros en la URL se utiliza la notacion '/:' en el codigo, en el navegador simplemente se utiliza '/param'
##########################
*/

// METODO GET
app.get('/api/product', (req, res) => {
    res.send(200, {products: []})
})
// GET DE UN UNICO RECURSO
app.get('/api/product/:productId', (req, res) => {

})
// METODO POST
app.post('/api/product', (req, res) => {
    console.log('POST /api/product')
    console.log(req.body)
    // almacenar en la base de datos
    let product = new Product({
        name: req.body.name,
        picture: req.body.picture,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description
    })
    // para guardar un producto que cuenta con las funciones de mongoose
    product.save((err, productStored) => {
        if(err) res.status(500).send({message: `Error al guardar el producto: ${err}`})
        
        else
            res.status(200).send({product: productStored})
    })
})
// METODO PUT
app.put('/api/product/:productId', (req, res) => {

})
// METODO DELETE
app.delete('/api/product/:productId', (req, res) => {

})

// conexion con mongoose
mongoose.connect('mongodb://localhost:27017/tallerWeb', (err, res) => {
    if(err) {
        console.log(`Error al conectar a la base de datos: ${err}`)
    }
    console.log('Conexión exitosa a la base de datos...')

    app.listen(port, () => {
        console.log(`API REST corriendo en http://localhost:${port}`)
    })
})
