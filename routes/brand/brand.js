const express = require('express');
let router = express.Router();

let brandController = require('../../controllers/brand')

router.get('/',brandController.fetchBrand)
router.get('/categories',brandController.fetchCategories)
router.get('/category/:id',brandController.singleFetchCategory)

module.exports = router;