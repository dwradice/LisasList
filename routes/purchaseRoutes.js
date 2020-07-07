const express = require('express');
const purchaseController = require('./../controllers/purchaseController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.get(
  '/checkout-session/:productID',
  authController.protect,
  purchaseController.getCheckoutSession
);

module.exports = router;
