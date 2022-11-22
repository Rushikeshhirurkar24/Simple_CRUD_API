const express = require('express');
const Sequelize = require('sequelize');
const dbconfig = require('../config/dbconfig');

// const path = "mysql://root:MySQLRushi@localhost:3306/sequii";

const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.password, {
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        operatorsAliases: false
    }
)


sequelize.authenticate()
    .then(() => {
        sequelize.sync({ force: false })
        console.log('connected')
    })
    .catch(err => console.log(err))

const db = {}


db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./productModel')(sequelize)
db.reviews = require('./reviweModel')(sequelize)


db.sequelize.sync({ force: false })
    .then(() => console.log('yes re-sync done!!'))


module.exports = db