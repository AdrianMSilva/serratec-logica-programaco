
const ler = require("prompt-sync")();
const poesia = ("Indo forte cueca fraca, indio peida cueca rasga. Indio fraco cueca forte, indio peida cu explode");
console.log("leia essa poesia: ");
do {

console.log(poesia);
var resposta = ler("Gostaria de ler novamento? 'S' ou 'N" );

} while (resposta == "S");

console.log("obrigado pela leitura")



// =======================================================

const ler = require("prompt-sync")();

const poesia = ("Indo forte cueca fraca, indio peida cueca rasga. Indio fraco cueca forte, indio peida cu explode");

var resposta = ler("Deseja ler uma poesia? S ou N");

while (resposta == "S") {
    console.log(poesia);
    resposta = ler("Deseja apreciar novamente? S ou N");
}

console.log("Fim");