// require('dotenv').config()
const {MONGO_URI} = require('./config/config')

const mongoose = require('mongoose')
const productSchema = require('./models/product')
const connectDB = require('./db/connect')
const productJson = require('./products.json')

const start = async () => {
    await connectDB(MONGO_URI)
    const post = await productSchema.create(productJson)
    console.log({
        status: 'Success',
        result: post.length,
        data: {
            post
        }
    })
}

start()