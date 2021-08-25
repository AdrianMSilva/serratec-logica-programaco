const ler = require("prompt-sync")();

console.log(" == Maioral == ");

var isValor1;
var isValor2;
var isValor3;
var p1 = ler("Player1 Escolha seu numero: ");
var p2 = ler("Player2 Escolha seu numero: ");

console.log(": Resultados :");
isValor1= p1 > p2;
isValor2= p1 < p2;
isValor3= p1 == p2;

if (isValor1) {
    console.log("Player 1 venceu? " + isValor1);
    console.log("Player 1 venceu? " + isValor2);
    console.log("Houve empate? " + isValor3);
}
else if (isValor2) {
    console.log("Player 1 venceu? " + isValor1);
    console.log("Player 1 venceu? " + isValor2);
    console.log("Houve empate? " + isValor3);
}
else if (isValor3) {
    console.log("Player 1 venceu? " + isValor1);
    console.log("Player 1 venceu? " + isValor2);
    console.log("Houve empate? " + isValor3);
}


