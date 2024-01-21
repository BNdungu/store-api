const model = require('../models/product')

const getAllProductsStatic = async (req,res) => {
    const search = 'ab'
    const products = await model.find({}).sort('-name price')
    res.status(200).json({products,nbHits: products.length})
}

const getAllProducts = async (req,res) => {
    const {featured,company,name} = req.query
    console.log(featured)
    const queryObj = {}

    if (featured){
        queryObj.featured = featured === 'true' ? true : false
    }

    if (company){
        queryObj.company = company
    }

    if (name){
        queryObj.name = { $regex: name, $options: 'i'}
    }

    console.log(queryObj)
    const products = await model.find(queryObj)
    res.status(200).json({
        status: 'success',
        result: products.length,
        data: {
            products
        }
    })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}