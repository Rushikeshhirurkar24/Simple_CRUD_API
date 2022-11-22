const { Sequelize } = require('sequelize')
module.exports = (sequelize) => {

    const product = sequelize.define("product", {
        title: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.DataTypes.INTEGER
        },
        description: {
            type: Sequelize.DataTypes.TEXT
        },
        published: {
            type: Sequelize.DataTypes.BOOLEAN
        }
    })
    return product
}