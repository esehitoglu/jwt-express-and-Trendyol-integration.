// Require express

const express = require('express');
let router = express.Router();  // importing routes

// Brand router
let brandController = require('../../controller/brand')

// .get router
router.get('/',brandController.fetchBrand)
router.get('/categories',brandController.fetchCategories)
router.get('/category/:id',brandController.singleFetchCategory)

module.exports = router;