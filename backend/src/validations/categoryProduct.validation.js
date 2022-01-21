const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCategoryProduct = {
  body: Joi.object().keys({
    label: Joi.string().required(),
    typeId: Joi.string().required().custom(objectId),
  }),
};

const getAllCategoryProduct = {
  query: Joi.object().keys({
    label: Joi.string().required(),
    typeId: Joi.string().required().custom(objectId),
  }),
};

const getDetailCategoryById = {
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
  createCategoryProduct,
  getAllCategoryProduct,
  getDetailCategoryById,
  //   updateDetail,
  //   deleteDetail,
};
