const express = require('express');
const validate = require('../../middlewares/validate');
const productValidation = require('../../validations/product.validation');
const productController = require('../../controllers/product.controller');
const uploadImage = require('../../middlewares/uploadImg');

const router = express.Router();

router
  .route('/')
  .post(
    uploadImage.upload.single('mainImage'),
    validate(productValidation.createProduct),
    productController.createProduct
  );

router
  .route('/')
  .get(
    validate(productValidation.getAllProduct),
    productController.getAllProduct
  );
router
  .route('/:detailId')
  .get(validate(productValidation.getDetailById), productController.getProduct);
router
  .route('/:detailId')
  .patch(
    uploadImage.upload.fields([
      { name: 'mainImage' },
      { name: 'image1' },
      { name: 'image2' },
      { name: 'image3' },
      { name: 'image4' },
    ]),
    validate(productValidation.updateDetail),
    productController.updateProduct
  );
router
  .route('/:detailId')
  .delete(
    validate(productValidation.deleteDetail),
    productController.deleteProduct
  );

module.exports = router;
