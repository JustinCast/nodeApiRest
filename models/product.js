'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema 

// se crea el esquema del producto
const ProductSchema = Schema({
    name: String,
    description: String,
    price: String,
})

// de esta manera se exporta el modelo
module.exports  = mongoose.model('Product', ProductSchema)