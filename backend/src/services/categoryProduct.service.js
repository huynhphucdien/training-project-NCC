const httpStatus = require('http-status');
const { CategoryProduct } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} productBody
 * @returns {Promise<Product>}
 */
const createCategory = async (categoryBody) => {
  const category = await CategoryProduct.create(categoryBody);
  return category;
};
/**
 * Get All product
 * @param {*} id
 * @returns
 */
const getAllCategory = async () => {
  const category = await CategoryProduct.find();
  return category;
};

/**
 * Get product by id
 * @param {ObjectId} id
 * @returns {Promise<Product>}
 */
const getCategoryById = async (id) => {
  return CategoryProduct.findById(id);
};

/**
 * Update product by id
 * @param {ObjectId} getCategoryById
 * @param {Object} updateBody
 * @returns {Promise<Product>}
 */
const updateCategoryById = async (productId, updateBody) => {
  const category = await getCategoryById(productId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'product not found');
  }
  Object.assign(category, updateBody);
  await category.save();
  return category;
};

/**
 * Delete product by id
 * @param {ObjectId} productId
 * @returns {Promise<Product>}
 */
const deleteCategoryById = async (categoryId) => {
  const category = await getCategoryById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'product not found');
  }
  await category.remove();
  return category;
};

module.exports = {
  createCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
  getAllCategory,
};
