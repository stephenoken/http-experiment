'use strict';

const server = require("http2");
const fs = require("fs");
const path = require("path");
const nodeStatic = require('node-static');
const contentType = 'text/html';

const options = {
  key: fs.readFileSync(path.join(__dirname, '/certs/localhost.key')),
  cert: fs.readFileSync(path.join(__dirname, '/certs/localhost.crt'))
};
const file = new nodeStatic.Server('./../public');

server.createServer(options, function(request, response) {
  request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(8080);
