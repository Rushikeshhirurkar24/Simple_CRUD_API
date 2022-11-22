const express = require("express");
const cors = require('cors');
const db = require("./models");



const app = express();

var corOption = {
    origin: "http://localhost:8081"
}




// middleware   .cors is the middle of client and sever site
app.use(cors(corOption))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


const router = require('./Route/productRoute');
const router1 = require('./Route/reviewRoute')



app.get('/', (req, res) => {
    res.send({ message: "hello from api" })
})

app.use("/api/products", router)

app.use('/api/review', router1)


//port
const PORT = process.env.PORT | 8080

app.listen(PORT, (
    console.log(`port is running on ${PORT}`)
))
console.log("hii..");