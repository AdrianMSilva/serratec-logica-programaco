/* "E então um milagre aconteceu e em uma linda sexta-feira, o nosso bebê nasceu.
Uau! Que incrível, nossa família cresceu! Somos papais de primeira viagem!
Mas espera um pouco aí, o que eu faço agora? Que choro é esse?
O que ela está fazendo?
Será que é: fome, sono, desconforto ou dor?
Você consegue me ajudar? Socorro!!"

Crie um programa que ajude esses papais de primeira viagem a identificar o que o bebê precisa através do seu choro. Caso o bebê tenha um choro diferente dos especificados, diga que o choro não foi reconhecido e que os papais precisam levar o bebê ao médico. 

Dica:
Choro de desconforto = "Éh" -> Verificar a fralda, frio ou calor.
Choro de fome = "Néh" ou "Nhé" -> Mamadeira ou Amamentar
Choro de sono = "Own" ou "Au ou "Ai" -> Colocar para dormir 
Choro de dor = "Unhé" + careta -> Pediatra e medicação
*/

const ler = require("prompt-sync")();

var tipoDeChoro = ler("Vamos ter ajudar a indentificar o problema do seu bebê! Qual som ele faz ao chorar ? 'Eh','Neh','Own' ou 'Unhe' ");

switch (tipoDeChoro) {
    case "Eh":
    console.log("Verificar a fralda, frio ou calor.");
    break;
    case "Neh":
    console.log("Mamadeira ou Amamentar.");
    break;
    case "Own":
    console.log("Colocar para dormir.")
    break;
    case "Unhe":
    console.log("Pediatra e medicação.");
    break;
    default:
    console.log("Não consegui indentificar o problema do seu bebê, Por favor leve seu bebê ao medico! :c");
}    