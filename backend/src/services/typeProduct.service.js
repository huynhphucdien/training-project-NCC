const httpStatus = require('http-status');
const { TypeProduct } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} productBody
 * @returns {Promise<Product>}
 */
const createType = async (typeProductBody) => {
  const typeProduct = await TypeProduct.create(typeProductBody);
  return typeProduct;
};
/**
 * Get All product
 * @param {*} id
 * @returns
 */
const getAllType = async () => {
  const type = await TypeProduct.find();
  return type;
};

/**
 * Get product by id
 * @param {ObjectId} id
 * @returns {Promise<Product>}
 */
const getTypeById = async (id) => {
  return TypeProduct.findById(id);
};

/**
 * Update product by id
 * @param {ObjectId} productId
 * @param {Object} updateBody
 * @returns {Promise<Product>}
 */
const updateTypeById = async (typeId, updateBody) => {
  const type = await getTypeById(typeId);
  if (!type) {
    throw new ApiError(httpStatus.NOT_FOUND, 'product not found');
  }
  Object.assign(type, updateBody);
  await type.save();
  return type;
};

/**
 * Delete product by id
 * @param {ObjectId}
 * @returns {Promise<Product>}
 */
const deleteTypeById = async (typeId) => {
  const type = await getTypeById(typeId);
  if (!type) {
    throw new ApiError(httpStatus.NOT_FOUND, 'product not found');
  }
  await type.remove();
  return type;
};

module.exports = {
  createType,
  getTypeById,
  updateTypeById,
  deleteTypeById,
  getAllType,
};
