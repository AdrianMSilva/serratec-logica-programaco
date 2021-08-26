

//Declaraçãp
//seletores
/*
se (condição for atendida) então
  instrução;
*/
var prompt = require("prompt-sync")();
var nome;

nome = prompt("prompt");
var numero = 42;



var resposta = prompt("Você esta vacinado? Responda SIM ou NÃO");

estaVacinado = resposta == "SIM";

var texto = "Que pena, mas já já é sua vez";

if (estaVacinado)
   texto = "Parabéns, não deixe de tomar a segunda dose.";

   console.log(texto);
