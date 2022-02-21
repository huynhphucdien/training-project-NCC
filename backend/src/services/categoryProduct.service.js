const httpStatus = require('http-status');
const { CategoryProduct } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Get All product
 * @param {*} id
 * @returns
 */
const getAllCategory = async () => {
  const category = await CategoryProduct.find();
  return category;
};

module.exports = {
  getAllCategory,
};
