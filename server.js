const http = require('http');

const port = process.env.PORT || 8099;

const app = require('./app');

const server = http.createServer(app);

server.listen(port,()=>{
  console.log('server listen at port '+ port)
});
