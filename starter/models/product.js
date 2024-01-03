const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'product name should be provided']
    },

    price: {
        type: Number,
        required: [true, 'Product price should be privided']
    },

    featured: {
        type: Boolean,
    },

    rating: {
        type: Number,
        default: 4.5
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },

    company: {
        type: String,
        enum : {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported'
        }
    }
})

module.exports = mongoose.model('Product', productSchema)