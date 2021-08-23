const prompt = require("prompt-sync")();

console.log("=== Shopping - Sanítarios ===")

//Entradas
var cor = prompt("Qual a cor do indicar? ");

var texto = "";

if (cor == "vermelho")
 texto = "completamente ocupado";
else
 if (cor == "amarelo")
 texto  = "atencao a capacidade";
 else
    if (cor == "laranja")
     texto = "apenas 1 livre";
    else
      texto = "ta lili voa mlk";
console.log(texto);
  
//Para casa: extensão

var peido = "fedido";
var perfume = 1;

console.log(peido, perfume);


