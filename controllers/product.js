'use strict'

const Product = require('../models/product') // importacion del modelo

function getProduct(req, res) {
    let productId  = req.params.productId
    
    Product.findById(productId, (err, product) => {
        if(err) 
            return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        else if(!product) 
            return res.status(404).send({message: `El producto no existe: ${err}`})
        else{
            
            res.status(200).send({product})
        }
    })
}

function getProducts(req, res) {
    Product.find({}, (err, products) => {
        if(err)
            return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        else if(!products)
            return res.status(404).send({message: `No existen productos: ${err}`})
        else{
            res.status(200).send(products)
        }
    })
}

function saveProduct(req, res) {
    console.log('POST /api/product')
    console.log(req.body)
    // almacenar en la base de datos
    let product = new Product({
        name: req.body.name,
        price: req.body.price,
    })
    // para guardar un producto que cuenta con las funciones de mongoose
    product.save((err, productStored) => {
        if(err) res.status(500).send({message: `Error al guardar el producto: ${err}`})
        
        else
            res.status(200).send({product: productStored})
    })
}

function updateProduct(req, res) {
    let name  = req.params.name
    let update = req.body

    Product.findByIdAndUpdate(name, update, (err, productUpdated) => {
        if(err)
            res.status(500).send({message: `Error al actualizar el producto: ${err}`})
        else
            res.status(200).send({product: productUpdated})
    })
}

function deleteProduct(req, res) {
    let name  = req.params.name
    Product.findById(productId, (err, product) => {
        if(err)
            res.status(500).send({message: `Error al encontrar el producto: ${err}`})
        else
            product.remove( err => {
                if(err)
                    res.status(500).send({message: `Error al borrar el producto: ${err}`})
                else
                    res.status(200).send({message: 'El producto ha sido eliminado'})
            })
    })
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}