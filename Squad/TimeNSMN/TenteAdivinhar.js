/* "UM DESAFIO" : Tente adivinhar qual o numero que eu to pensando? Você tem três chance para acertar,
 (de 0 - 20). Se a pessoa acertar "Parabéns! Você é esperto. Se a pessoa errar " Pode tentar outra vez, 
 você tem mais n chance!  Se não acertar, o programa fala o numero que ele tava pensando e diz, "Haha o numero é tal, Você Perdeu!
*/
const ler = require("prompt-sync")();

var numeroQuePensei = 2; //Math.round(Math.random()*20);
console.log("Tente adivinhar o numero que eu estou pensando, você tem 3 Tentativas");
var chute = ler("");
var ganhou = false;
var chances = 3;
do{
  if(numeroQuePensei == chute){
    console.log("Parabéns! Você é esperto.");
    ganhou = true; 
  }
  else{
   console.log("Pode tentar outra vez, você tem mais "+ chances +" chance!");
   chances--;
   chute = ler("");
   ganhou = false;
  }

}
while(chances >= 0 && ganhou == false);

if(ganhou == false){
 console.log("Eu estava pensando no numero "+ numeroQuePensei + " Haha, Você Perdeu!");
}

 
 

 

