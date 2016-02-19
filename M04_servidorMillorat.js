/*
 * Servidor HTTP millorat amb Node JS. Utilitza una funció refactorizada.
 * 2 peticions perque navegador demana el favicon, fa un d'URL per a preparar
 * l'encaminament
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 14.02.2014
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
var url = require("url");

function iniciar() {
    function onRequest(request, response) {
        var ruta = url.parse(request.url).pathname;
        console.log("Petició per a  " + ruta + " rebuda.");
        response.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });
        response.write('camí: ' + ruta + '\n');

        var consulta = url.parse(request.url, true).query;
        response.write('consulta: ' + url.parse(request.url).query + '\n');
        response.write('parametre: ' + consulta.parametre + '\n');
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Servidor iniciat.");
}

exports.iniciar = iniciar;