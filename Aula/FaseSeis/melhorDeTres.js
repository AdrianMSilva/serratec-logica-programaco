
const ler = require("prompt-sync")();


const respostaCerta = "digitacao";

for (var i = 0; i < 3; i++) {
    console.log("Alo ouvinte " + (i + 1));
    var resposta = ler("Qual a sua resposta a pergunta ao vivo?");

    for (var j = 0; j < 2; j++) {
        var acertou = resposta == respostaCerta;

        if (acertou) {
            console.log("Ouvinte " + (i + 1) + " ganhou caneca!");
        } else {
            console.log("Você errou!");  
            var resposta = ler("Qual a sua resposta a pergunta ao vivo?");     
            }
        }
    }