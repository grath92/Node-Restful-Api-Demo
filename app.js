const express = require('express');

const router = express.Router();
require('express-group-routes');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRoutes = require('./api/rotues/products');
const orderRoutes = require('./api/rotues/orders');
const customerRoutes = require('./api/rotues/customer');

const taskController = require('./api/controller/TaskController');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Headers', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/customers', customerRoutes);

app.group("/api/v1/task", (router) => {
  router.get("/all", taskController.getTasks)
        .post("/save", taskController.saveTask)
        .get("/:task_id", taskController.getTaskDetail)
        .use('*',(req, res, next)=>{
          return res.status(404).json({
              status: 0,
              message: 'url not found under /api/v1/'
          })
        })
});

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
