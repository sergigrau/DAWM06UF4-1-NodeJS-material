/*
 * arxiu principal que arrenca el servidor HTTP.
 * Utilitza un encaminador
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
var server = require("./M06_servidorEncaminat");
var encaminador = require("./M06_encaminador");
var manegadorPeticions = require("./M06_manegadorsPeticions");

var manegadors = {};
manegadors["/"] = manegadorPeticions.iniciar;
manegadors["/iniciar"] = manegadorPeticions.iniciar;
manegadors["/pujar"] = manegadorPeticions.pujar;

server.iniciar(encaminador.encaminar, manegadors);