const { createServer } = require('node:http');
const fs= require("fs")
// import http from "http"
// import {a} from "./mymodules.js"
// import {b} from "./mymodules.js"
// import miya from "./mymodules.js";
const mod=require('./mymodules.js')

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<h1>apun ko kehte miya bhai</h1><h1>${a}</h1><h1>${b}</h1><h1>${mod.name}</h1>`); 

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
