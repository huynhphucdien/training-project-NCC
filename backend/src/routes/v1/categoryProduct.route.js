const express = require('express');
const validate = require('../../middlewares/validate');
const productValidation = require('../../validations/product.validation');
const productController = require('../../controllers/product.controller');

const router = express.Router();

router.route('/').post(validate(productValidation.createProduct), productController.createProduct);

router.route('/').get(validate(productValidation.getAllProduct), productController.getAllProduct);
router.route('/:categoryId').get(productController.getProduct);
// router.route('/').patch(validate(productValidation.updateUser), productController.updateProduct);
// router.route('/').delete(validate(productValidation.deleteProduct), productController.deleteProduct);

module.exports = router;
