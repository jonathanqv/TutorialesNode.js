var http = require("http");

var gida = function(solicitud, respuesta){
  console.log("Tutoriales Node.js");
  respuesta.end("Hola mundo, bienvenidos a los tutoriales de Gidahatari en Node.js");
};

var servidor = http.createServer(gida);
servidor.listen(8080);
