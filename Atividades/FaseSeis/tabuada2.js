const ler = require("prompt-sync")();

var tabuada = 1;

for (var num = 1; num <= 10; num++) {

    var multiplicar = num * tabuada;
    var conta = num + " X " + num + " = " + tabuada;
    console.log(conta, multiplicar)
}