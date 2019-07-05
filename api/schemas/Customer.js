const dbConn = require('../db').db_slave;

customer = dbConn.define('customer',{
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    zip_code: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    country: Sequelize.STRING,
    email: Sequelize.STRING,
    mobile: Sequelize.STRING,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE
  });


module.exports = customer;
