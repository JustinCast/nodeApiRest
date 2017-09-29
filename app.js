// aca se va tener la funcionalidad de expressjs
'use strict' // esto es para utilizar las nuevas caracteristicas de ES6
const express = require('express')
const bodyParser = require('body-parser') // esta libreria funciona como middleware para parsear el cuerpo de la solicitud
const app = express() // la variable app va tener las funciones de express
const api = require('./routes/routes')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()) // para poder admitir peticiones con el cuerpo del mensaje en formato json
app.use('/api', api)
/*####### NOTAS SOBRE TIPOS DE PETICIONES######
// primer parametro: url a la que se accedera
// segundo parametro: un callback con 'req' y 'res' como parametros
// para poner parametros en la URL se utiliza la notacion '/:' en el codigo, en el navegador simplemente se utiliza '/param'
##########################
*/


module.exports = app