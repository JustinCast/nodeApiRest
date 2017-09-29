'use strict'

const express = require('express')
const ProductCtrl = require('../controllers/product')
const api = express.Router()

api.get('/product', ProductCtrl.getProducts) // METODO GET
api.get('/product/:productId', ProductCtrl.getProduct) // GET DE UN UNICO RECURSO
api.post('/product', ProductCtrl.saveProduct) // METODO POST
api.put('/product/:productId', ProductCtrl.updateProduct) // METODO PUT
api.delete('/product/:productId', ProductCtrl.deleteProduct) // METODO DELETE

module.exports = api