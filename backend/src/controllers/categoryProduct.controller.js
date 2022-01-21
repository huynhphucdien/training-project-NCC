const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { productCategoryService } = require('../services');

const createCategoryProduct = catchAsync(async (req, res) => {
  const type = await productCategoryService.createProduct(req.body);
  res.status(httpStatus.CREATED).send(type);
});

const getAllCategoryProduct = catchAsync(async (req, res) => {
  const type = await productCategoryService.getAllCategory(req.query);
  if (!type) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  res.send(type);
});

const getOneCategoryProduct = catchAsync(async (req, res) => {
  const type = await productCategoryService.getProductById(req.params.typeId);
  if (!type) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  res.send(type);
});

const updateCategoryProduct = catchAsync(async (req, res) => {
  const type = await productCategoryService.updateProductById(req.params.typeId, req.body);
  res.send(type);
});

const deleteCategoryProduct = catchAsync(async (req, res) => {
  await productCategoryService.deleteProductById(req.params.productId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCategoryProduct,
  getOneCategoryProduct,
  updateCategoryProduct,
  deleteCategoryProduct,
  getAllCategoryProduct,
};
