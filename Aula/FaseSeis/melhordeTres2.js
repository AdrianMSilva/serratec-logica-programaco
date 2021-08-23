
const ler = require("prompt-sync")();


const respostaCerta = "digitacao";

for (var i = 0; i < 3; i++) {
    console.log("Alo ouvinte " + (i + 1));
    var chances = 2;

    
    do {
        var resposta = ler("Qual a sua resposta a pergunta ao vivo?");     
        var acertou = resposta == respostaCerta;

        if (acertou) {
            console.log("Ouvinte " + (i + 1) + " ganhou caneca!");
        } else {
            chances--;
            console.log("Você errou! ", chances);  
            }
    } while (!acertou && (chances > 0));
}

console.log("90FM é show!");

