const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/api/products', apiController.getAllProducts);
router.get('/api/brands', apiController.getAllBrands);

module.exports = router;
