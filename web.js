const { readFileSync } = require('fs');
var http = require('http');
fs = require('fs');

var html = readFileSync('./index.html');

http.createServer(function(solicitud,respuesta) {
    respuesta.write(html);
    respuesta.end();
}).listen(8080);

/* var http = require('http');
fs = require('fs');

http.createServer(function(solicitud,respuesta) {
    fs.readFile('./index.html', function(error,html){
        respuesta.write(html);
        respuesta.end();
    });
}).listen(8080); */