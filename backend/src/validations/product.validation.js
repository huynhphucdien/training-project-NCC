const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProduct = {
  body: Joi.object().keys({
    productName: Joi.string().max(50).required(),
    productType: Joi.string().required(),
    productCategory: Joi.string().required(),
    productCost: Joi.number().min(1000).max(1000000000).required(),
    productDescription: Joi.string().max(400).allow(null, ''),
  }),
  file: Joi.object().keys({
    mainImage: Joi.string().required(),
  }),
};

const getAllProduct = {
  query: Joi.object().keys({
    page: Joi.number(),
    limit: Joi.number(),
    productType: Joi.string().custom(objectId),
    productCategory: Joi.string().custom(objectId),
  }),
};

const getDetailById = {
  params: Joi.object().keys({
    detailId: Joi.string().custom(objectId),
  }),
};

const updateDetail = {
  params: Joi.object().keys({
    detailId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    productName: Joi.string().max(50).required(),
    productType: Joi.string().required(),
    productCategory: Joi.string().required(),
    productCost: Joi.number().min(1000).required(),
    productDescription: Joi.string().max(400).allow(null, ''),

    mainImage: Joi.string().allow(null, ''),
    image1: Joi.string().allow(null, ''),
    image2: Joi.string().allow(null, ''),
    image3: Joi.string().allow(null, ''),
    image4: Joi.string().allow(null, ''),
  }),
};

const deleteDetail = {
  params: Joi.object().keys({
    detailId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createProduct,
  getAllProduct,
  getDetailById,
  updateDetail,
  deleteDetail,
};
