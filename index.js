'use strict'

const mongoose = require('mongoose') // capa de abstraccion para la conexion con MongoDB
const app = require('./app')
const config = require('./config')
// conexion con mongoose
mongoose.connect(config.db, (err, res) => {
    if(err) {
        console.log(`Error al conectar a la base de datos: ${err}`)
        return
    }
    console.log('Conexión exitosa a la base de datos...')

    app.listen(config.port, () => {
        console.log(`API REST corriendo en http://localhost:${config.port}`)
    })
})
