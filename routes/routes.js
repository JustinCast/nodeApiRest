'use strict'

const express = require('express')
const ProductCtrl = require('../controllers/product')
const api = express.Router()

api.get('/getAllProducts', ProductCtrl.getProducts) // METODO GET
api.get('/getProduct/:productId', ProductCtrl.getProduct) // GET DE UN UNICO RECURSO
api.post('/create', ProductCtrl.saveProduct) // METODO POST
api.put('/update/:productId', ProductCtrl.updateProduct) // METODO PUT
api.delete('/delete/:productId', ProductCtrl.deleteProduct) // METODO DELETE

module.exports = api