const mysql = require('mysql');

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

module.exports = conn;
