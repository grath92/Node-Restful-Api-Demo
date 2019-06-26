const express = require('express');
const router = express.Router();

const dbConn = require('../db');


router.get('/', (req, res, next) => {
  dbConn.query('select * from customer', function (error, results, fields) {
    if (error) {
      res.status(500).send({error: 'Something failed'});
    }
	  res.json(results);
	});
});


router.post('/', (req, res, next) => {

  const product = req.body;
  console.log(product);

  const sql = "INSERT INTO customer SET ?";

  dbConn.query(sql, product, function(err, result, fields){
    if (err) {
      res.status(500).send({error: 'Something failed'});
    }
    //res.json(result);
    res.status(200).json({
      status: "SUCCESS",
      message: "Customer Added Successfully."
    });
  });
});


router.get('/:customerId', (req, res, next) => {
  dbConn.query('select * from customer where id=?', [req.params.customerId], function (error, results, fields) {
    if (error) {
      res.status(500).send({error: 'Something failed'});
    }
	  res.json(results);
	});
});


router.delete('/:customerId', (req, res, next) => {
  dbConn.query('delete from customer where id=?', [req.params.customerId], function (error, results, fields) {
    if (error) {
      res.status(500).send({error: 'Something failed'});
    }
	  res.json(results);
	});
});


module.exports = router;
