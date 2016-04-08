/*
 * Servidor HTTP millorat amb Node JS. 
 * Connecta amb MongoDB i realitza diverses operacions CRUD
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 08.04.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 08.04.2016
 * - Connecta amb MongoDB i realitza diverses operacions CRUD
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */
var http = require("http");
var url = require("url");

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert'); //utilitzem assercions

var ObjectId = require('mongodb').ObjectID;


function iniciar() {


    var url = 'mongodb://localhost:27017/daw2';
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log("Connexió correcta");

        afegirDocuments(db, err, function () {});

        consultarDocumentMenor40(db, err, function () {

        });
        consultarDocument(db, err, function () {
            
        });

        esborrarTotsDocuments(db, err, function () {
            db.close();
        });
        //atenció aquestes crides són asíncrones cal tancar la connexió en la darrera
        // Malament        db.close();

    });

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

var afegirDocuments = function (db, err, callback) {
    db.collection('usuaris').insertOne({
        "nom": "sergi",
        "anys": 45,
        "telf": "123-567-890"
    });
    db.collection('usuaris').insertOne({
        "nom": "joan",
        "anys": 30,
        "telf": "123-567-890"
    });
    assert.equal(err, null);
    console.log("Afegit document a col·lecció usuaris");
    callback();

};

var consultarDocument = function (db, err, callback) {
    var cursor = db.collection('usuaris').find({
        "nom": "sergi"
    });
    cursor.each(function (err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc);
        } else {
            callback();
        }
    });
};

var consultarDocumentMenor40 = function (db, err, callback) {
    var cursor = db.collection('usuaris').find({
        "anys": {
            $lt: 40
        }
    });
    cursor.each(function (err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc);
        } else {
            callback();
        }
    });
};

var esborrarTotsDocuments = function(db, err, callback) {
   db.collection('usuaris').deleteMany( {}, function(err, results) {
      console.log(results);
      callback();
   });
}

exports.iniciar = iniciar;