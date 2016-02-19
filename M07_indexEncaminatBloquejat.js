/*
 * arxiu principal que arrenca el servidor HTTP.
 * Utilitza un encaminador
 * 
 * Provar simultaniament
 * http://localhost:8888/iniciar
 * http://localhost:8888/pujar
 * 
 * @author sergi.grau@fje.edu
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
var server = require("./M06_servidorEncaminat");
var encaminador = require("./M06_encaminador");
var manegadorPeticions = require("./M07_manegadorsPeticionsBloquejat");

var manegadors = {};
manegadors["/"] = manegadorPeticions.iniciar;
manegadors["/iniciar"] = manegadorPeticions.iniciar;
manegadors["/pujar"] = manegadorPeticions.pujar;

server.iniciar(encaminador.encaminar, manegadors);