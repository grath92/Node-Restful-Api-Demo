const dbConn = require('../db').db_slave;
const customer = require('../schemas/Customer');


class CustomerModel {
  constructor() {

  }

  /**
  *
  * Get All Customers
  */
  async getAllCustomer(){
    try {

      const qury = 'SELECT * FROM customer';
      const result = await dbConn.query(qury,{type: dbConn.QueryTypes.SELECT});
      console.log("getCustomer: ", result);

      return result;

    } catch (e) {
      console.log("getAllCustomers: ", e);
      throw new Error(e);
    }
  }

  /**
  *
  * Get Single Customer Details
  */

  async getCustomerDetails(data){
    try {

      const qury = 'SELECT * FROM customer WHERE id = :customer_id';
      const result = await dbConn.query(qury,
        {
          type: dbConn.QueryTypes.SELECT,
          replacements: {
            customer_id: data.customer_id
          }
        });

      return result;

    } catch (e) {
      console.log("getTaskDetails: ", e);
      throw new Error(e);
    }
  }


  /**
  *
  * Save A New Customer Details.
  */
  async saveCustomer(data){
    try {

      const qury = 'INSERT INTO customer (name, address, zip_code, city, state, country, email, mobile)' +
                    'VALUES (:name, :address, :zip_code, :city, :state, :country, :email, :mobile)';
      const result = await dbConn.query(qury,
        {
          type: dbConn.QueryTypes.INSERT,
          replacements: {
            name: data.name,
            address: data.address,
            zip_code: data.zip_code,
            city: data.city,
            state: data.state,
            country: data.country,
            email: data.email,
            mobile: data.mobile
          }
        });

      return result;

    } catch (e) {
      console.log("saveTask: ", e);
      throw new Error(e);
    }
  }

  /**
  *
  * Delete A Customer.
  */
  async deleteCustomer(data){
    try {

      const qury = "DELETE FROM customer WHERE id = :customer_id";
      const result = await dbConn.query(qury,
        {
          type: dbConn.QueryTypes.DELETE,
          replacements: {
            customer_id: data.customer_id
          }
        });

      return result;

    } catch (e) {
      console.log("deleteTask: ", e);
      throw new Error(e);
    }
  }

}

module.exports = new CustomerModel();
