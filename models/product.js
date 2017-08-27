'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema 

// se crea el esquema del producto
const ProductSchema = Schema({
    name: String,
    picture: String,
    price: { type: Number, default: 0 },
    category: {type: String, enum: ['computers', 'phones', 'accesories']},
    description: String
})

// de esta manera se exporta el modelo
module.exports  = mongoose.model('Product', ProductSchema)