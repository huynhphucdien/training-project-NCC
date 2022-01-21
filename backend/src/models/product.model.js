const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const productModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    typeId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'TypeProduct',
      required: true,
    },
    selectedId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'CategoryProduct',
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: String,
    },
    // mainImgUrl: {
    //     type: String,
    //     default: 'No Img Url'
    // },
    //     image: {
    //       type: Array,
    //       required: true,
    //     },
    //     slideImages: {
    //       type: Array,
    //       default: [null, null, null, null],
    //     },
    //     productCode: {
    //       type: String,
    //       default: 'No Code'
    //     },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
productModel.plugin(toJSON);

const ProductModel = mongoose.model('ProductModel', productModel);

module.exports = ProductModel;
