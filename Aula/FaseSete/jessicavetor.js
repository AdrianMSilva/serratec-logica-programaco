const ler = require("prompt-sync")();

var sapato = [];
sapato[1] = "sandalia";
sapato[2] = "bota";
sapato[3] = "rasterinha";
sapato[4] = "tenis azul";
sapato[5] = "scarpin";



const numero = ler("Qual o numero da gaveta? ");
const calcado = ler("Qual sapato você quer guardar? ");

sapato[numero] = calcado;

numero = ler("Qual o numero da gaveta para ver? ");

calcado = sapato[numero];

console.log("Na gaveta " + numero + " está guardado o calçado " + calcado);