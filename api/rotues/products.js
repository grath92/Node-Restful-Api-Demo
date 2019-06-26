const express = require('express');
const router = express.Router();

const dbConn = require('../db');


router.get('/', (req, res, next) => {
  res.status(200).json({
    status: "SUCCESS",
    message: "Handling GET Method"
  });
});


router.post('/', (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price
  };

  const sql = "INSERT INTO products (name, price) VALUES(?,?)";
  const values = [name, price];

  dbConn.query(sql, values, function(err, result, fields){
    if (err) {
      res.status(500).send({error: 'Something failed'});
    }
    res.json(result);
  })

  res.status(200).json({
    status: "SUCCESS",
    created_product: product
  });
  
});


router.get('/:productId', (req, res, next) => {
  res.status(200).json({
    status: "SUCCESS",
    message: "You pass an ID",
    id: req.params.productId
  });
});


router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    status: "SUCCESS",
    message: "Your Product Deleted Successfully.",
    id: req.params.productId
  });
});


module.exports = router;
