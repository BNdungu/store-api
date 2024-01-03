require('dotenv').config()

const mongoose = require('mongoose')
const productSchema = require('./models/product')
const connectDB = require('./db/connect')
const productJson = require('./products.json')

const start = async () => {
    await connectDB(process.env.MONGO_URI)
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