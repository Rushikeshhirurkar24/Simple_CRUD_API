const reviewController = require("../controller/reviewController")


const router = require('express').Router()

router.post('/create', reviewController.addRview)

router.get('/all', reviewController.getReviews)

router.get('/:id', reviewController.getOneReview)

router.put('/:id', reviewController.updateReview)

router.delete('/:id', reviewController.deleteReviewt)





module.exports = router