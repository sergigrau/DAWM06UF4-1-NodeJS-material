/*
 * Servidor HTTP millorat amb Node JS. Utilitza una funció refactorizada.
 * 2 peticions perque navegador demana el favicon, fa un d'URL per a preparar
 * l'encaminament
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
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
var querystring = require("querystring");

function iniciar() {
	function onRequest(request, response) {
		var partsURL = url.parse(request.url);
		console.log("Petició per a  " + partsURL.pathname + " rebuda.");
		response.writeHead(200, {
			"Content-Type" : "text/plain; charset=utf-8"
		});

		response.write('camí: ' + partsURL.pathname + '\n');
		var consulta = url.parse(request.url, true).query;
		console.log(consulta);

		for (var clau in consulta) {
			if (consulta.hasOwnProperty(clau)) {
				response.write('parametre: ' + clau + '\n');
				response.write('valor: ' + consulta[clau] + '\n');
			}
		}

		response.end();
	}


	http.createServer(onRequest).listen(8888);
	console.log("Servidor iniciat.");
}

exports.iniciar = iniciar;
