/*
 * Encaminador de peticions 
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 14/2/2014
 * format del document UTF-8
 *
 * CHANGELOG
 * 14/2/2014
 * - Servidor HTTP bàsic amb Node JS
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Multiplataforma. CETEI
 */

function encaminar(manegadorPOST, pathname, response, postData) {
  console.log('preparat per encaminar una petició a ...' + pathname);
  if (typeof manegadorPOST[pathname] === 'function') {
    return manegadorPOST[pathname](response, postData);
  } else {
    console.log("No s'ha trobat manegador per a " + pathname);
    return "404 Not found";
  }
}

exports.encaminar = encaminar;