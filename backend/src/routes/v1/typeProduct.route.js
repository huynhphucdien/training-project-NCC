const express = require('express');
const validate = require('../../middlewares/validate');
const typeProductValidation = require('../../validations/typeProduct.validation');
const typeProductController = require('../../controllers/typeProduct.controller');

const router = express.Router();

router.route('/').post(validate(typeProductValidation.createTypeProduct), typeProductController.createTypeProduct);

router.route('/').get(typeProductController.getAllTypeProduct);
router.route('/:typeId').get(validate(typeProductValidation.getDetailTypeById), typeProductController.getOneTypeProduct);
// router.route('/').patch(validate(typeProductValidation.updateTypeProduct), typeProductController.updateProduct);
// router.route('/').delete(validate(typeProductValidation.deleteTypeProduct), typeProductController.deleteProduct);

module.exports = router;
