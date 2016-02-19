/*
 * Servidor HTTP bàsic amb Node JS. Utilitza una funció refactorizada. 
 * 2 peticions perque navegador demana el favicon
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 14/2/2014
 * format del document UTF-8
 *
 * CHANGELOG
 * 08.10.2015
 * - Servidor HTTP bàsic amb Node JS
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */
var http = require("http");

function onRequest(request, response) {
  console.log("Petició Rebuda.");
  response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
  response.write("Hola Món 2");
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Servidor iniciat.");