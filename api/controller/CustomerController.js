const customerModal = require('../model/CustomerModel');


class CustomerController {
  constructor() {}

  async saveCustomer(req, res, next){
      try{
        console.log(req.body);
          const customer = await customerModal.saveCustomer(req.body);
          console.log(customer);

          return res.status(200).json({
              status: "SUCCESS",
              customer: customer
          });
      }catch(error){

          return res.status(500).json({
              status: "FAILED",
              message: 'Something went wrong.'
          });
      }
  }

  async getCustomers(req, res, next){
      try{

          const customers = await customerModal.getAllCustomer();
          console.log(customers);

          return res.status(200).json({
              status: "SUCCESS",
              customers: customers
          });
      }catch(error){

          return res.status(500).json({
              status: "FAILED",
              message: 'Something went wrong.'
          });
      }
  }

  async getCustomerDetail(req, res, next){
      try{

          let customerDetail = await customerModal.getCustomerDetails(req.params);
          console.log(customerDetail);

          return res.status(200).json({
              status: "SUCCESS",
              customer_details: customerDetail
          });
      }catch(error){

          return res.status(500).json({
              status: "FAILED",
              message: 'Something went wrong.'
          });
      }
  }

  // async getTaskDetail(req, res, next){
  //     try{
  //
  //         let taskDetail = await customerModal.getTaskDetails(req.params);
  //         console.log(taskDetail);
  //
  //         return res.status(200).json({
  //             status: "SUCCESS",
  //             task_details: taskDetail
  //         });
  //     }catch(error){
  //
  //         return res.status(500).json({
  //             status: "FAILED",
  //             message: 'Something went wrong.'
  //         });
  //     }
  // }

}


module.exports = new CustomerController();
