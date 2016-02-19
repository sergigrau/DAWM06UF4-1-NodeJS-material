/*
 * Manegador  de peticions, que inclou processament bloquejat
 * @author sergi grau
 * @version 2.0
 * date 02.02.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 02.02.2016
 * - Manegador  de peticions, que inclou processament bloquejat
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */


function iniciar() {
  console.log("manegador de la petició 'iniciar' s'ha cridat.");
  
  function sleep(ms) {  
    // obté la hora actual
    var startTime = new Date().getTime();
    // atasca la cpu
    while (new Date().getTime() < startTime +  ms); 
  }

  sleep(10000);
  
   return "Hola iniciar";
}

function pujar() {
  console.log("manegador de la petició 'pujar' s'ha cridat.");
  return "Hola pujar";
}

exports.iniciar = iniciar;
exports.pujar = pujar;
