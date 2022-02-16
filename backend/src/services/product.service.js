const httpStatus = require('http-status');
const { ProductModel } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} productBody
 * @returns {Promise<Product>}
 */
const createProduct = async (productBody) => {
  const product = await ProductModel.create(productBody);
  return product;
};
/**
 * Get All product
 * @param {*} id
 * @returns
 */
const getAllProductService = async (query) => {
  const page = query.page || 1;
  const limit = query.limit || 12;
  const total = await ProductModel.countDocuments({});

  const product = await ProductModel.find()
    .sort({ createdAt: 'descending' })
    .skip(limit * (page - 1)) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
    .limit(limit);
  const products = { page, limit, total, product };
  console.log('product', product);
  console.log('total', total);
  console.log('page', page);
  console.log('limit', limit);
  console.log('query', query);
  return products;
};

/**
 * Get product by id
 * @param {ObjectId} id
 * @returns {Promise<Product>}
 */
const getProductById = async (id) => {
  return ProductModel.findById(id);
};

/**
 * Update product by id
 * @param {ObjectId} detailId
 * @param {Object} updateBody
 * @returns {Promise<Product>}
 */
const updateProductById = async (detailId, updateBody) => {
  const product = await getProductById(detailId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'product not found');
  }
  Object.assign(product, updateBody);
  await product.save();
  return product;
};

/**
 * Delete product by id
 * @param {ObjectId} detailId
 * @returns {Promise<Product>}
 */
const deleteProductById = async (detailId) => {
  const product = await getProductById(detailId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'product not found');
  }
  await product.remove();
  return product;
};

module.exports = {
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
  getAllProductService,
};
