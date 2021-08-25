
//declaração da função == uma unica vez
function ecoMontanha (escuta) {
    return escuta + " " + escuta;
}

//chamada dde função == quantas vezes eu precisar
var texto = ecoMontanha("cantor");
console.log(texto);
ecoMontanha("montanha");
console.log(texto);
ecoMontanha("ciclista");
console.log(texto);

//A função ecoMontanha trá dois parametros: O primeiro é o texto a ser reptido.
//o segundo é a quantidade de vezes que o texto será repetido.
const ler = require("prompt-sync")();
var palavra = ler("Qual palavra ?")



function ecoMontanha (palavra, quantidade) {
    var respota = "";
    for (var i = 0; i < quantidade; i++) {

        resposta += palavra + " ";
    }

    return resposta;
}

var txt = ecoMontanha("A gente já chegou? ", 10);
console.log(txt);