const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const categoryProductModel = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      // trim: true,
    },
    typeId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'CategoryProduct',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
categoryProductModel.plugin(toJSON);

const CategoryProduct = mongoose.model('ProductChoosen', categoryProductModel);

module.exports = CategoryProduct;
