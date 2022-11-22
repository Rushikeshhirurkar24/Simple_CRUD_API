module.exports = {
    HOST: 'localhost',
    USER: 'root',
    password: 'MySQLRushi',
    DB: 'sequii',
    dialect: 'mysql',

    pool: {
        max: 10,
        min: 0,
        aquire: 30000,
        idle: 10000
    }

}