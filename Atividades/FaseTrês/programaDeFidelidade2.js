const ler = require("prompt-sync")();

var cupons = ler("Digite seus cupons: ");

cupons = cupons * 2;

console.log("De acordo com seus cupons, você tem " + cupons + " pontos no programa de fidelidade!")