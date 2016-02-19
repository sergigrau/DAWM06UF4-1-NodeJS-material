/*
 * Servidor HTTP millorat amb Node JS. Utilitza una funció refactorizada. 
 * utilitza encaminament
 * @author sergi grau, sergi.grau@fje.edu
 * @version 2.0
 * date 14/2/2014
 * format del document UTF-8
 *
 * CHANGELOG
 * 08.10.2015
 * - arxiu principal que arrenca el servidor HTTP
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */
var http = require("http");
var url = require("url");

function iniciar(encaminar, manegadorPeticions) {
 function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Petició per a  " + pathname + " rebuda.");
    var contingut =  encaminar(manegadorPeticions, pathname);
    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
    response.write(contingut);     
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor iniciat.");
}

exports.iniciar = iniciar;