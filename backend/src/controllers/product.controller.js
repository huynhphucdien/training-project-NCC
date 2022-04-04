const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { productService } = require('../services');
const uniqid = require('uniqid');

const createProduct = catchAsync(async (req, res) => {
  const productType = req.body.productType.label;
  const productCategory = req.body.productCategory.label;
  // Create productCode
  let uniqCode = uniqid
    .process(
      `${productType.slice(0, 1)}${productCategory.substr(
        productType.length + 1,
        1
      )}`
    )
    .toUpperCase();

  uniqCode = uniqCode.normalize('NFD');
  // xóa các ký tự dấu tổ hợp
  uniqCode = uniqCode.replace(/[\u0300-\u036f]/g, '');

  const imageName = req.file.filename;
  const productBody = {
    ...req.body,
    mainImage: imageName,
    productCode: uniqCode,
  };
  const product = await productService.createProduct(productBody);
  res.status(httpStatus.CREATED).send(product);
});

const getAllProduct = catchAsync(async (req, res) => {
  const product = await productService.getAllProductService(req.query);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  res.send(product);
});

const getProduct = catchAsync(async (req, res) => {
  const product = await productService.getProductById(req.params.detailId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  res.send(product);
});

const updateProduct = catchAsync(async (req, res) => {
  const mainImage =
    req.files && req.files['mainImage']
      ? req.files['mainImage'][0].filename
      : req.body.mainImage;

  const image1 =
    req.files && req.files['image1']
      ? req.files['image1'][0].filename
      : req.body.image1;

  const image2 =
    req.files && req.files['image2']
      ? req.files['image2'][0].filename
      : req.body.image2;

  const image3 =
    req.files && req.files['image3']
      ? req.files['image3'][0].filename
      : req.body.image3;

  const image4 =
    req.files && req.files['image4']
      ? req.files['image4'][0].filename
      : req.body.image4;

  const updateBody = {
    ...req.body,
    ...req.files,
    mainImage,
    image1,
    image2,
    image3,
    image4,
  };

  const product = await productService.updateProductById(
    req.params.detailId,
    updateBody
  );
  res.send(product);
});

const deleteProduct = catchAsync(async (req, res) => {
  await productService.deleteProductById(req.params.detailId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
};
