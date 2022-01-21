const express = require('express');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const productRoute = require('./mainProduct.route');
const typeProductRoute = require('./typeProduct.route');
const categoryProductRoute = require('./categoryProduct.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/type',
    route: typeProductRoute,
  },
  {
    path: '/category',
    route: categoryProductRoute,
  },
  {
    path: '/product',
    route: productRoute,
  },
  {
    path: '/user',
    route: userRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
