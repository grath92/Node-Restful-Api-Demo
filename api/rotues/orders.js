const express = require('express');
const router = express.Router();

const dbConn = require('../db');

router.get('/', (req, res, next) => {
  res.status(200).json({
    status: "SUCCESS",
    message: "Your Orders"
  });
});


router.post('/', (req, res, next) => {
  const order = {
    product_id: req.body.product_id,
    quantity: req.body.quantity
  };

  res.status(200).json({
    status: "SUCCESS",
    order: order
  });
});


router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    status: "SUCCESS",
    message: "You Order Detail.",
    id: req.params.orderId
  });
});


router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    status: "SUCCESS",
    message: "Your Order Deleted Successfully.",
    id: req.params.orderId
  });
});


module.exports = router;
