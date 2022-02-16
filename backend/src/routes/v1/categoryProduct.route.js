const express = require('express');
const validate = require('../../middlewares/validate');
const productCategoryValidation = require('../../validations/categoryProduct.validation');
const productCategoryController = require('../../controllers/categoryProduct.controller');

const router = express.Router();

// router
//   .route('/')
//   .post(validate(productCategoryValidation.createCategoryProduct), productCategoryController.createCategoryProduct);

router.route('/').get(productCategoryController.getAllCategoryProduct);
router.route('/:categoryId').get(productCategoryController.getOneCategoryProduct);
// router.route('/').patch(validate(productCategoryValidation.updateUser), productCategoryController.updateProduct);
// router.route('/').delete(validate(productCategoryValidation.deleteProduct), productCategoryController.deleteProduct);

module.exports = router;
