const ler = require("prompt-sync")();
console.log(" == Eleições 2020 == ");
var idade = ler("Digite sua idade: ");

var verificar = idade >= 16;

if (verificar) {
    console.log("Você já pode votar? " + verificar);
}
else {
    verificar = false;
    console.log("Você já pode votar? " + verificar);
    
}