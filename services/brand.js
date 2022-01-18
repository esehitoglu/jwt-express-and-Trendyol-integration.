const axios = require('axios')

exports.fetch = async() => {
    const response = await axios.get('https://api.trendyol.com/sapigw/brands')
    return response.data
}

exports.fetchCategories = async() => {
    const response = await axios.get('https://api.trendyol.com/sapigw/product-categories')
    return response.data
}

exports.singleFetchCategory = async(categoryId) => {
    const response = await axios.get(`https://api.trendyol.com/sapigw/product-categories/${categoryId}/attributes`)
    return response.data
}