/*
 * Manegador  de peticions, que inclou processament NO bloquejat
 * @author sergi grau
 * @version 1.0
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
var exec = require('child_process').exec, child;

function iniciar(response) {
  console.log("manegador de la petició 'iniciar' s'ha cridat.");

	child = exec('ls -l', function(error, stdout, stderr) {
		console.log('stdout: ' + stdout);

		console.log('stderr: ' + stderr);
		if (error !== null) {
			console.log('exec error: ' + error);
		}
	});

	return 'proces acabat';

}

function pujar(response) {
	return "pujar";
}

exports.iniciar = iniciar;
exports.pujar = pujar;
