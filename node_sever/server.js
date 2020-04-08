/* const http = require('http');

const hostname = '127.0.0.1';
const port = 1804;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

*/

const express = require('express');
const  app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'public')))

const port = 1804;

app.get("/",function(req,res){
  console.log("Started getting request from the servr");
  //res.send("Hello World");
  res.sendFile(__dirname + '/index.html')
})

app.listen(port,function(req,res){
  console.log("Server Started");
})