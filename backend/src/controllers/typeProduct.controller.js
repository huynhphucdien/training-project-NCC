const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { productTypeService } = require('../services');

const getAllTypeProduct = catchAsync(async (req, res) => {
  const type = await productTypeService.getAllType(req.query);
  if (!type) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  res.send(type);
});

module.exports = {
  getAllTypeProduct,
};
