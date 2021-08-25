const ler = require("prompt-sync")();

var tabuada = ler("Escolha um numero ? ");

for (var num = 1; num <= 10; num++) {

    var multiplicar = num * tabuada;
    var conta = tabuada + " X " + num + " =";
    console.log(conta, multiplicar);
}
