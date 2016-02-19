/*
 * Manegador  de peticions, que inclou processament NO bloquejat
 * @author sergi grau, sergi.grau@fje.edu
 * @version 2.0
 * date 02.02.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 02.02.2016
 * - Manegador  de peticions, que inclou processament NO bloquejat
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */
var querystring = require("querystring");

function iniciar(response, dataPosteada) {
  console.log("manegador de la petició 'iniciar' s'ha cridat.");

 var html = '<html>'+
    '<head>'+   
    '</head>'+
    '<body>'+
    '<form action="/pujar" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

	
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();

}

function pujar(response, dataPosteada) {
  console.log("manegador de la petició 'pujar' s'ha cridat.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Text enviat: : " + 
  querystring.parse(dataPosteada)["text"]);
  response.end();
}

exports.iniciar = iniciar;
exports.pujar = pujar;
