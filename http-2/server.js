'use strict';

const server = require("http2");
const fs = require("fs");
const path = require("path");
const contentType = 'text/html';
const options = {
  key: fs.readFileSync(path.join(__dirname, '/certs/localhost.key')),
  cert: fs.readFileSync(path.join(__dirname, '/certs/localhost.crt'))
};

server.createServer(options, function(request, response) {
  if(request.url.indexOf('.html') != -1){
    response.setHeader('Content-Type', 'text/html');
    response.end(fs.readFileSync(path.join(__dirname,'/../public/index.html')));
  }

  if(request.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.csss'
      console.log(fs.readdirSync(__dirname + '/../public/styles/'));
      const files = fs.readdirSync(__dirname + '/../public/styles/');
      fs.readFile(__dirname + '/../public/styles/styles.css', function (err, data) {
        if (err) console.log(err);
        response.setHeader('Content-Type', 'text/css');
        response.end(data);
      });
  }
  if(request.url.indexOf('.js') != -1){ //req.url has the pathname, check if it conatins '.js'

      fs.readFile(__dirname + '/../public/scripts/script.js', function (err, data) {
        if (err) console.log(err);
        response.setHeader('Content-Type', 'text/javascript');
        response.end(data);
      });
  }
}).listen(8080);
