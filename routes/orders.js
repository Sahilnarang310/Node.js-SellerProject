const express = require('express');

const router = express.Router();

const productController = require('../controllers/product-controller');

router.get('/products', productController.getProducts);

router.get('/', productController.getProducts);

router.get('/products/:productId', productController.getSingleProduct);

router.post('/products', productController.postProduct);

router.put('/products/:productId', productController.putUpdateProduct);

router.delete('/products/:productId', productController.deleteProduct);

module.exports = router;