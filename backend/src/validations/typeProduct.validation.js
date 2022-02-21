const Joi = require('joi');
const { objectId } = require('./custom.validation');

const getAllTypeProduct = {
  query: Joi.object().keys({
    // label: Joi.string().required(),
  }),
};

module.exports = {
  getAllTypeProduct,
};
