/*
 * arxiu principal que arrenca el servidor HTTP.
 * Utilitza un encaminador
 * 
 * Provar simultaniament
 * http://localhost:8888/iniciar
 * http://localhost:8888/pujar
 * 
 * @author sergi grau
 * @version 1.0
 * date 02.02.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 02.02.2016
 * - arxiu principal que arrenca el servidor HTTP
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */
var server = require("./M08_servidorEncaminatNoBloquejat");
var encaminador = require("./M08_encaminadorNoBloquejat");
var manegadorPeticions = require("./M08_manegadorsPeticionsNoBloquejat");

var manegadors = {};
manegadors["/"] = manegadorPeticions.iniciar;
manegadors["/iniciar"] = manegadorPeticions.iniciar;
manegadors["/pujar"] = manegadorPeticions.pujar;

server.iniciar(encaminador.encaminar, manegadors);