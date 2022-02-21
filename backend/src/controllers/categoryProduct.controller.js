const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { productCategoryService } = require('../services');

const getAllCategoryProduct = catchAsync(async (req, res) => {
  const type = await productCategoryService.getAllCategory(req.query);
  if (!type) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  res.send(type);
});

module.exports = {
  getAllCategoryProduct,
};
