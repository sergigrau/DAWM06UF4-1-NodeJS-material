/*
 * Encaminador de peticions 
 * @author sergi grau
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

function encaminar(manegadorPeticions, pathname) {
  console.log('preparat per encaminar una petició a ...' + pathname);
  if (typeof manegadorPeticions[pathname] === 'function') {
    return manegadorPeticions[pathname]();
  } else {
    console.log("No s'ha trobat manegador per a " + pathname);
    return "404 Not found";
  }
}

exports.encaminar = encaminar;