'use strict'

const mongoose = require('mongoose') // capa de abstraccion para la conexion con MongoDB
const app = require('./app')
const config = require('./config')
// conexion con mongoose
mongoose.connect('mongodb://justin1524:gears1524@ds115436.mlab.com:15436/base_crud_backend', (err, res) => {
    if(err) {
        console.log(`Error al conectar a la base de datos: ${err}`)
    }
    console.log('Conexión exitosa a la base de datos...')

    app.listen(8080, () => {
        console.log(`API REST corriendo en http://localhost:${config.port}`)
    })
})
