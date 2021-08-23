
const ler = require("prompt-sync")();

var garrafa = ler("Qual o tamanho da sua garrafa? '500ml' ou '1l' ");

switch (garrafa) {
    case "500ml":
    console.log("Deve conter 375ml de alcool!");
    break;
    case "1l":
    console.log("Deve conter 700ml de alcool!");
    break;
    default:
    console.log("Ainda não tenho essa medida!")
}

