const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProduct = {
  body: Joi.object().keys({
    name: Joi.string().min(10).max(100).required(),
    typeId: Joi.string().required().custom(objectId),
    selectedId: Joi.string().required().custom(objectId),
    cost: Joi.number().min(1000).required(),
    description: Joi.string().max(400).allow(null, ''),
  }),
};

const getAllProduct = {
  query: Joi.object().keys({
    // page: Joi.number(),
    // limit: Joi.number(),
    typeId: Joi.string().custom(objectId),
    selectedId: Joi.string().custom(objectId),
    // search: Joi.string().min(3),
  }),
};

const getDetailById = {
  params: Joi.object().keys({
    detailId: Joi.string().custom(objectId),
  }),
};

// const updateDetail = {
//   params: Joi.object().keys({
//     detailId: Joi.required().custom(objectId),
//   }),
//   body: Joi.object()
//     .keys({
//       name: Joi.string().min(10).max(100).required(),
//       categoryId: Joi.string().required().custom(objectId),
//       typeId: Joi.string().required().custom(objectId),
//       price: Joi.number().required(),
//       description: Joi.string().max(400).allow(null, ''),

//       image: Joi.string().allow(null, ''),
//       slideImage0: Joi.string().allow(null, ''),
//       slideImage1: Joi.string().allow(null, ''),
//       slideImage2: Joi.string().allow(null, ''),
//       slideImage3: Joi.string().allow(null, ''),
//     })
//     .min(1),
// };

// const deleteDetail = {
//   params: Joi.object().keys({
//     detailId: Joi.string().custom(objectId),
//   }),
// };

module.exports = {
  createProduct,
  getAllProduct,
  getDetailById,
  //   updateDetail,
  //   deleteDetail,
};
