/* E então um milagre aconteceu e em uma linda sexta-feira, o nosso bebê nasceu.:baby:
Uau! Que incrível, nossa família cresceu! Somos papais de primeira viagem!:heart_eyes:
Mas espera um pouco aí, o que eu faço agora:question: Que choro é esse:question:
Será que é: fome, sono, desconforto ou dor?
Você consegue me ajudar? Socorro!! :scream:

Dica:
Choro de desconforto = "Éh" -> Verificar a fralda, frio ou calor.
Choro de fome = "Néh" ou "Nhé" -> Mamadeira ou Amamentar
Choro de sono = "Own" ou "Au" ou "Ai" -> Colocar para dormir 
Choro de dor = "Unhé" -> Pediatra e medicação
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
    console.log("Não consegui indentificar o problema do seu bebê :c");
}    