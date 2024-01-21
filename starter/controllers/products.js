const model = require('../models/product')

const getAllProductsStatic = async (req,res) => {
    const search = 'ab'
    const products = await model.find({}).select('price name')
    res.status(200).json({products,nbHits: products.length})
}

const getAllProducts = async (req,res) => {
    const {featured, company, name, sort, fields} = req.query
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

    let result = model.find(queryObj)

    if(sort){
        const sortList = sort.split(',').join(' ')
        result  = result.sort(sortList)
    }

    else {
        result = result.sort('createdAt')
    }

    if(fields){
        const fieldsList = fields.split(',').join(' ')
        result  = result.select(fieldsList)
    }

    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const skip = (page - 1) * limit

    result = result.skip(skip).limit(limit)

    const products = await result

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