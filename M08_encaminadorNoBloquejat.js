/*
 * Encaminador de peticions 
 * @author sergi grau
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

function encaminar(manegadorsNoBloquejat, pathname, response) {
  console.log('preparat per encaminar una petició a ...' + pathname);
  if (typeof manegadorsNoBloquejat[pathname] === 'function') {
    return manegadorsNoBloquejat[pathname](response);
  } else {
    console.log("No s'ha trobat manegador per a " + pathname);
    return "404 Not found";
  }
}

exports.encaminar = encaminar;