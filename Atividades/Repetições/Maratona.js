
const ler = require("prompt-sync")();

var equipeUm = 0;
var equipeDois = 0;
var pontoUm = 0;
var pontoDois = 0;

do {
var nome = ler("Nome da equipe: ");
var ponto = ler("Pontuação do time: ");

if (ponto > pontoUm) {
    pontoUm = ponto;
    equipeUm = nome;
}
else if (ponto > pontoDois) {
    pontoDois = ponto;
    equipeDois = nome;
}
} while (nome != "");


console.log(" == podia ==");
console.log("Primeiro lugar! " + equipeUm);
console.log("Segundo lugar! " + equipeDois);

