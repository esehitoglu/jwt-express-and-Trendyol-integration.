// Axios, node.js ve tarayıcı için promise tabanlı HTTP İstemcisidir , axios modülünü yükledik
const axios = require('axios')

// trendyol markalarını axios ile çektik ve response ile geri gönderdik
exports.fetch = async() => {
    const response = await axios.get('https://api.trendyol.com/sapigw/brands')
    return response.data
}

// trendyol kategorileri axios ile çektik ve response ile geri gönderdik
exports.fetchCategories = async() => {
    const response = await axios.get('https://api.trendyol.com/sapigw/product-categories')
    return response.data
}

/* trendyol belirlediğimiz kategoriyi axios ile çekmek için trendyol servisinin linkine categoryID 
değişkeni belirledik bu değişkene gelen değer var ise tekli kategori çekilecek yok ise
boş dönecek
*/
exports.singleFetchCategory = async(categoryId) => {
    const response = await axios.get(`https://api.trendyol.com/sapigw/product-categories/${categoryId}/attributes`)
    return response.data
}