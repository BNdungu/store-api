//require('dotenv').config()
require('express-async-errors')

const {MONGO_URI} = require('./config/config')
const express = require('express')
const app = express()

const connectDB =require ('./db/connect')
const productsRoutes = require('./routes/products')

const errorHandler = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')

app.use(express.json())
app.use('/api/v1/products',productsRoutes)
const port = process.env.PORT || 3000

app.get('/', (req,res) => {
    res.send('<h1> Hello Store API </h1> <a href="api/v1/products">products route</a>')
})

app.use(errorHandler)
app.use(notFound)

const start = async () => {
    try {
        await connectDB(MONGO_URI)
        app.listen(port, () => console.log(`Server is Listening at Port ${port}`))
    } catch (error) {
        console.error(error)
    }
}

start()