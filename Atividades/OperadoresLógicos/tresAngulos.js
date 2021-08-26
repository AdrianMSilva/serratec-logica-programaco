/*
O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido.
*/

const ler = require("prompt-sync")();

var angulo1 = 60;
var angulo2 = 60;
var angulo3 = 60;

var validar = angulo1 + angulo2 + angulo3 == 180;

if (validar) {
    console.log("É valido? " + validar);
}
else
    console.log("É valido? " + validar);