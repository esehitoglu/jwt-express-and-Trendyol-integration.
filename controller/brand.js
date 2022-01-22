// Require packages
const brandService = require('../services/brand')

//Fetch Brand

exports.fetchBrand = async (req,res)=>{
    const response = await brandService.fetch()
    res.send({
        status:true,
        data: response.brands
    })
}


//Fetch Categories
exports.fetchCategories = async(req,res) =>{
    const response = await brandService.fetchCategories()
    res.send({
        status:true,
        data: response.categories
    })
}


// Single Fetch
exports.singleFetchCategory = async(req,res)=>{
    try{
        const response = await brandService.singleFetchCategory(req.params.id)

        res.send({
            status:true,
            data:response
        })
    }catch{
        res.send({
            status:false,
            data:'böyle bir data mevcut değil'
        })
    }        
}