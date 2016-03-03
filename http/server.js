'use strict';

const server = require("http");
const fs = require("fs");
const path = require("path");
const nodeStatic = require('node-static');
const morgan = require('morgan');
const finalhandler = require('finalhandler');

const contentType = 'text/html';

// create "middleware"
const logger = morgan('dev');

const file = new nodeStatic.Server('./../public');

server.createServer(function(request, response) {
  var done = finalhandler(request, response)
  logger(request,response,(err)=>{
     if (err) return done(err);
     request.addListener('end', function () {
       file.serve(request, response);
     }).resume();
  });
}).listen(8081);
console.log("Server running on http://localhost:8081/index.html");
