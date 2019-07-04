const mysql = require('mysql');

const Sequelize = require('sequelize');

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'',
  database: 'nodeapitest'
});

conn.connect((err) => {
  if(!err){
    console.log('DB Connected Successfully...');
  }else {
    console.log('DB Connected Failed \n Error : ' + JSON.stringify(err, undefined, 2));
  }
});

let db_slave = new Sequelize('nodeapitest', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
      max: 30,
      min: 0,
      idle: 10000
    },
    define: {
          timestamps: false
      }

  });

  db_slave
  .authenticate()
  .then(() => {
    console.log('Connection Slave has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


global.Sequelize = Sequelize

module.exports = {
  conn: conn,
  db_slave: db_slave
};
