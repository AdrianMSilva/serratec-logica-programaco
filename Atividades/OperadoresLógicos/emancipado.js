const ler = require("prompt-sync")();

var idade = ler("Qual a sua idade? ");
var sexo = ler("Qual seu sexo? ");

if (idade >= 21 || (idade >=18 && sexo == "Masculino")) {
    console.log("Emancipado");
}
    else 
    console.log("Não Emancipado");