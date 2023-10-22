var http = require('http');
var url = require('url');
var fs = require('fs');
var uc = require('upper-case');
var dt = require('./myModule.js');

console.log(uc.upperCase("Using CommonJS Modules."));
console.log(dt.getDateTime());

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  
  if(req.url === "/")
    filename += "index.html";

  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    
    if(req.url.match("\.js$"))
      res.writeHead(200, {'Content-Type': 'application/javascript'});
    else if(req.url.match("\.css$"))
      res.writeHead(200, {'Content-Type': 'text/css'});
    else //if(req.url.match("\.html$"))
      res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    
    return res.end();
  });
}).listen(8081);

console.log('Node server running on http://localhost:8081');
