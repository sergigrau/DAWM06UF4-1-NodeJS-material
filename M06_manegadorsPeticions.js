/*
 * Manegador  de peticions 
 * @author sergi grau
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

function iniciar() {
  console.log("manegador de la petició 'iniciar' s'ha cridat.");
   return "Hola iniciar";
}

function pujar() {
  console.log("manegador de la petició 'pujar' s'ha cridat.");
  return "Hola pujar";
}

exports.iniciar = iniciar;
exports.pujar = pujar;
