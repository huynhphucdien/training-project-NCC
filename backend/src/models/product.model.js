const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const productModel = mongoose.Schema(
  {
    productCode: {
      type: String,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    productType: {
      type: String,
      required: true,
    },
    productCategory: {
      type: String,
      required: true,
    },
    productCost: {
      type: Number,
      required: true,
      trim: true,
    },
    productDescription: {
      type: String,
      trim: true,
    },
    mainImage: {
      type: Array,
      required: true,
    },
    image1: {
      type: Array,
    },
    image2: {
      type: Array,
    },
    image3: {
      type: Array,
    },
    image4: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
productModel.plugin(toJSON);

const ProductModel = mongoose.model('ProductModel', productModel);

module.exports = ProductModel;
