/*
 * Servidor HTTP bàsic amb Node JS
 * @author sergi grau, sergi.grau@fje.edu
 * @version 2.0
 * date 14.2.2014
 * format del document UTF-8
 *
 * CHANGELOG
 * 08.10.2015
 * - Servidor HTTP bàsic amb Node JS
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
  response.write("Hola Món");
  response.end();
}).listen(8888);