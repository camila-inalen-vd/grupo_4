const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/api/products', apiController.getAllProducts);
router.get('/api/brands', apiController.getAllBrands);

router.get('/api/users', apiController.getAllUsers);
router.get('/api/users/:id', apiController.getOneUser);

module.exports = router;
