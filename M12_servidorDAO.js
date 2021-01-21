var http = require("http");
var url = require("url");

	//mètode factoria
	function crearEmpleatDAO(){
		return new EmpleatDAOImpl();
	}
	function crearEmpleatDAOMySQL(){
		return new EmpleatDAOImplMySQL();
	}

function iniciar() {
    function onRequest(request, response) {
        var ruta = url.parse(request.url).pathname;
        console.log("Petició per a  " + ruta + " rebuda.");
        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });
		empleatDAO = crearEmpleatDAOMySQL();
		let empleat = empleatDAO.crearEmpleat();
		console.log(empleat);
		empleatDAO.llegirTotsEmpleats();

		
        response.end('ok');
    }

    http.createServer(onRequest).listen(8888);
    console.log("Servidor iniciat.");
}

exports.iniciar = iniciar;


//interface EmpleatDAO
class EmpleatDAO {
	esborrarEmpleat(codi){};
	crearEmpleat(empleat){};
	llegirEmpleat(codi){};
	llegirTotsEmpleats(){};

}

class EmpleatDAOImpl extends EmpleatDAO {

	esborrarEmpleat(codi){

	}
	crearEmpleat(empleat){
		console.log('crear empleat');
		return {nom:'sergi'};


	}
	llegirEmpleat(codi){

	}
	llegirTotsEmpleats(){
		console.log('llegir tots empleats');
	}

}

class EmpleatDAOImplMySQL extends EmpleatDAO {

	esborrarEmpleat(codi){

	}
	crearEmpleat(empleat){
		console.log('MYSQL crear empleat');
		return {nom:'sergi'};


	}
	llegirEmpleat(codi){

	}
	llegirTotsEmpleats(){
		console.log('MYSQLllegir tots empleats');
	}

}


