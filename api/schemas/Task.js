const dbConn = require('../db').db_slave;
const Sequelize = require("sequelize");

task = dbConn.define('task',{
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    status: Sequelize.STRING,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE
  });

// task = null;


module.exports = task;
