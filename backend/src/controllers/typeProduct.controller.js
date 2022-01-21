const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { productTypeService } = require('../services');

const createTypeProduct = catchAsync(async (req, res) => {
  const type = await productTypeService.createProduct(req.body);
  res.status(httpStatus.CREATED).send(type);
});

const getAllTypeProduct = catchAsync(async (req, res) => {
  const type = await productTypeService.getAllType(req.query);
  if (!type) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  res.send(type);
});

const getOneTypeProduct = catchAsync(async (req, res) => {
  const type = await productTypeService.getProductById(req.params.typeId);
  if (!type) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  res.send(type);
});

const updateTypeProduct = catchAsync(async (req, res) => {
  const type = await productTypeService.updateProductById(req.params.typeId, req.body);
  res.send(type);
});

const deleteTypeProduct = catchAsync(async (req, res) => {
  await productTypeService.deleteProductById(req.params.productId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createTypeProduct,
  getOneTypeProduct,
  updateTypeProduct,
  deleteTypeProduct,
  getAllTypeProduct,
};
