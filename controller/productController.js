const db = require("../models/index")

//create main model

const Product = db.products;

const addProduct = async(req, res) => {

    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    let product = await Product.create(info)
    res.status(200).send(product)
}

//get all product

const getAllProduct = async(req, res) => {

    let products = await Product.findAll({})
    res.status(200).send(products)

}


//get one product

const getOneProduct = async(req, res) => {
    let id = req.params.id

    let products = await Product.findOne({ where: { id: id } })
    res.status(200).send(products)


}

//update

const updateProduct = async(req, res) => {
    let id = req.params.id

    let product = await Product.update(req.body, { where: { id: id } })

    res.status(200).send(product)

}


//delete product


const deleteProduct = async(req, res) => {
    let id = req.params.id
    await Product.destroy({ where: { id: id } })

    res.status(200).send("product is deleted")

}


const getPublishedProduct = async(req, res) => {

    let product = await Product.findAll({ where: { published: true } })

    res.status(200).send(product)

}



module.exports = {
    addProduct,
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct
}