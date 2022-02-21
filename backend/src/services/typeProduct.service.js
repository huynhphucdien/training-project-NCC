const httpStatus = require('http-status');
const { TypeProduct } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Get All product
 * @param {*} id
 * @returns
 */
const getAllType = async () => {
  const types = await TypeProduct.find();
  return types;
};
module.exports = {
  getAllType,
};
