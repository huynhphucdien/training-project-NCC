const express = require('express');
const validate = require('../../middlewares/validate');
const typeProductValidation = require('../../validations/typeProduct.validation');
const typeProductController = require('../../controllers/typeProduct.controller');

const router = express.Router();

router
  .route('/')
  .get(
    validate(typeProductValidation.getAllTypeProduct),
    typeProductController.getAllTypeProduct
  );

module.exports = router;
