const express = require('express');
const validate = require('../../middlewares/validate');
const productCategoryValidation = require('../../validations/categoryProduct.validation');
const productCategoryController = require('../../controllers/categoryProduct.controller');

const router = express.Router();
// validate(productCategoryValidation.getAllCategoryProduct),
router.route('/').get(productCategoryController.getAllCategoryProduct);

module.exports = router;
