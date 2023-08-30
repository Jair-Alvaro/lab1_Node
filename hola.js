/* var http = require('http');

var manejador = function(solicitud, respuesta){
    console.log('Hola Mundo!');
};
var servidor = http.createServer(manejador);
servidor.listen(8080); */

/* var http = require('http');

var manejador = function(solicitud, respuesta){
    console.log('Conexion entrante');
    respuesta.end('Hola Mundo!');
};
var servidor = http.createServer(manejador);
servidor.listen(8080); */

var http = require('http');

var manejador = function(solicitud, respuesta){
    var i = 0;
    while(true){
        respuesta.write(i+ '-->');
        i++;
        
        if (i == 20){
            break;
        }
    }
    respuesta.end();
};

var servidor = http.createServer(manejador);
servidor.listen(8080);