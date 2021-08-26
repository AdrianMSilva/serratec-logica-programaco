/* Um dia Adrian foi jogar D&D (Dungeons & Dragons) na casa de um amigo, mas adrian esqueceu seus dados,
 que são essenciais para o desenrolar do jogo. Adrian agora precisa criar um programa(DiceRoll) para rolar 
 os dados do jogo, sendo eles "d4"(dado de quatro lados),"d6"(dado de seis lados),"d8"(dado de oito lados),
 "d10"(dado de dez lados),"d12"(dado de doze lados,"d20"(dado de vinte lados).logo  após o programa dar a resposta,
 o programa deve perguntar se ele quer rodar outro dado ou não.*/

const ler = require("prompt-sync")();

var repete;
do {
  var qualDado = ler("Qual dado você deseja rolar? ");

  var dado4 = Math.trunc(Math.random() * (3 + 1) +1);
  var dado6 = Math.trunc(Math.random() * (5 + 1) +1);
  var dado8 = Math.trunc(Math.random() * (7 + 1) +1);
  var dado10 = Math.trunc(Math.random() * (9 + 1) +1);
  var dado12 = Math.trunc(Math.random() * (11 + 1) +1);
  var dado20 = Math.trunc(Math.random() * (19 + 1) +1);

  switch (qualDado) {
      case "d4":
      console.log("Resultado: ",dado4);
      break;
      case "d6":
      console.log("Resultado: ",dado6);
      break;
      case "d8":
      console.log("Resultado: ",dado8);
      break;
      case "d10":
      console.log("Resultado: ",dado10);
      break;
      case "d12":
      console.log("Resultado: ",dado12);
      break;
      case "d20":
          console.log("Resultado: ",dado20);
          break;
          default:
          console.log("No D&D não utilizamos esse dado :( ");
  }

  var novamente = ler("Gostaria de jogar novamente? Escreva : 'S' ou 'N' ")
  switch (novamente) {
      case "S":
      repete = true;
      break;  
      case "N":
      repete = false;
    }
    
}

while (repete);
console.log("Muito obrigado por utilizar o DiceRoll :)")



