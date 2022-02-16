const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const categoryProductModel = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
    },
    typeId: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
categoryProductModel.plugin(toJSON);

const CategoryProduct = mongoose.model('ProductCategory', categoryProductModel);

module.exports = CategoryProduct;
