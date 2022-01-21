const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const typeProductModel = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      // trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
typeProductModel.plugin(toJSON);

const TypeProduct = mongoose.model('Producttype', typeProductModel);

module.exports = TypeProduct;
