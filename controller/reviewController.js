const db = require("../models/index")


const Review = db.reviews;

//function
//add review

const addRview = async(req, res) => {
        let data = {
            rating: req.body.rating,
            description: req.body.description
        }

        const review = await Review.create(data)
        res.status(200).send(review)

    }
    //get all review
const getReviews = async(req, res) => {

    const review = await Review.findAll({})
    res.status(200).send(review)

}

//get one review

const getOneReview = async(req, res) => {
    let id = req.params.id

    const review = await Review.findOne({ where: { id: id } })
    res.status(200).send(review)
}

const updateReview = async(req, res) => {
    let id = req.params.id

    let product = await Review.update(req.body, { where: { id: id } })

    res.status(200).send(product)

}


//delete product


const deleteReviewt = async(req, res) => {
    let id = req.params.id
    await Review.destroy({ where: { id: id } })

    res.status(200).send("product is deleted")

}

module.exports = {
    addRview,
    getReviews,
    getOneReview,
    updateReview,
    deleteReviewt
}