const { Sequelize } = require("sequelize")

module.exports = (sequelize) => {

    const Review = sequelize.define("review", {

        rating: {
            type: Sequelize.DataTypes.INTEGER
        },
        description: {
            type: Sequelize.DataTypes.TEXT
        }
    })
    return Review
}