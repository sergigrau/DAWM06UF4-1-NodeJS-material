/*
 * Servidor HTTP millorat amb Node JS. 
 * Connecta amb MongoDB i realitza diverses operacions CRUD
 * @author sergi grau, sergi.grau@fje.edu
 * @version 2.0
 * date 06.04.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 08.04.2016
 * - Connecta amb MongoDB i realitza diverses operacions CRUD
 * 06.04.2017
 * - millora la sortida de les operacions realitzades amb mongodb
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */
var http = require("http");
var url = require("url");
var fs = require('fs');

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert'); //utilitzem assercions

var ObjectId = require('mongodb').ObjectID;

var crud = {
    afegirDocument: function (alumne, db, err, callback) {

    }
};

function iniciar() {
    function onRequest(request, response) {
        var sortida;
        var ruta = url.parse(request.url).pathname;
        var consulta = url.parse(request.url, true).query;
        console.log("Petició per a  " + ruta + " rebuda.");

        if (ruta == '/inici') {
            fs.readFile('./M11_mongoDB.html', function (err, sortida) {
                response.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8"
                });
                response.write(sortida);
                response.end();
            });
        }
        else if (ruta == '/desa') {
            var ruta = 'mongodb://localhost:27017/daw2';


            MongoClient.connect(ruta, function (err, db) {
                assert.equal(null, err);
                console.log("Connexió correcta");
                db.collection('usuaris').insertOne({
                    "nom": consulta.nom
                });
                assert.equal(err, null);
                console.log("Afegit document a col·lecció usuaris");

            });
        }
        else if (ruta == '/consulta') {
            var ruta = 'mongodb://localhost:27017/daw2';


            MongoClient.connect(ruta, function (err, db) {
                assert.equal(null, err);
                console.log("Connexió correcta");

                response.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8"
                });
                console.log("consulta document a col·lecció usuaris");

                var cursor = db.collection('usuaris').find({});
                cursor.each(function (err, doc) {
                    assert.equal(err, null);
                    if (doc != null) {
                        response.write(doc.nom + '<br>');
                    }
                    else {
                        response.end();
                    }
                });
            });

        }

        else {
            response.writeHead(404, {
                "Content-Type": "text/html; charset=utf-8"
            });
            sortida = "404 NOT FOUND";
            response.write(sortida);
            response.end();
        }

    }

    http.createServer(onRequest).listen(8888);
    console.log("Servidor iniciat.");
}

exports.iniciar = iniciar;