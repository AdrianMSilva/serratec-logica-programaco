const ler = require("prompt-sync")();

var sapato1 = "";
var sapato2 = "";
var sapato3 = "";
var sapato4 = "";
var sapato5 = "";



const numero = ler("Qual o numero da gaveta? ");
const calcado = ler("Qual sapato você quer guardar? ");

if (numero == "1") {
    sapato1 = calcado;
}
else if (numero == "2") {
    sapato2 = calcado;
}
else if (numero == "3") {
    sapato3 = calcado;
}
else if (numero == "4") {
    sapato4 = calcado;
}
else if (numero == "5") {
    sapato5 = calcado;
}

numero = ler("Qual o numero da gaveta para ver? ");

if (numero == "1") {
    sapato1 = calcado;
}
else if (numero == "2") {
    sapato2 = calcado;
}
else if (numero == "3") {
    sapato3 = calcado;
}
else if (numero == "4") {
    sapato4 = calcado;
}
else if (numero == "5") {
    sapato5 = calcado;
}

console.log("Na gaveta " + numero + " está guardado o calçado " + calcado);


var sapato = [];

sapato1 = "sandalia";
sapato1 = "bota";
sapato3 = "rasterinha";
sapato4 = "tenis azul";
sapato5 = "scarpin";

sapato[1] = "sandalia";
sapato[2] = "bota";
sapato[3] = "rasterinha";
sapato[4] = "tenis azul";
sapato[5] = "scarpin";