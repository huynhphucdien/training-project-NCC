const Joi = require('joi');
const { objectId } = require('./custom.validation');

const getAllCategoryProduct = {
  query: Joi.object().keys({
    label: Joi.string().required(),
    typeId: Joi.string().required().custom(objectId),
  }),
};

module.exports = {
  getAllCategoryProduct,
};
