
const ler = require("prompt-sync")();

var repete;
do {
console.log("Bravo Heroi, o grande e poderoso dragão 'Programaçãnção' esta vindo para destruis o mundo, e só você podera nos salvar!");
console.log("─────▄████▀█▄");
console.log("───▄█████████████████▄");
console.log("─▄█████.▼.▼.▼.▼.▼.▼▼▼▼");
console.log("▄███████▄.▲.▲▲▲▲▲▲▲▲");
console.log("████████████████████▀▀");

var escolha = ler("Escolha uma das seguintes armas: (Sapato) 👠, (Espada) ⚔️, e (Faca) 🔪");

switch (escolha) {
    case "Sapato":
        console.log("VOCÊ PERDEU :C");
    break;
    case "Faca":
        console.log("VOCÊ PERDEU :C");
    break;
    case "Espada":
        console.log("VOCÊ GANHOU, VOCÊ É UM BRAVO GUERREIRO :)");
    break;
    default:
        console.log("Essa arma não é valida, VOCÊ PERDEU :C");
}

var novamente = ler("Você gostaria de jogar novamento? 'S' ou 'N' ")

if (novamente == "S")
    repete = true;
else
    repete = false;

}
while (repete);

console.log("Bravo Heroi, o grande e poderoso dragão 'Programaçãnção' esta vindo para destruis o mundo, e só você podera nos salvar!");
console.log("─────▄████▀█▄");
console.log("───▄█████████████████▄");
console.log("─▄█████.▼.▼.▼.▼.▼.▼▼▼▼");
console.log("▄███████▄.▲.▲▲▲▲▲▲▲▲");
console.log("████████████████████▀▀");
console.log("Escolha uma das seguintes armas: (Sapato) 👠, (Espada) ⚔️, e (Faca) 🔪");


const ler = require("prompt-sync")();
var arma = ler("Digite S, E ou F: ");

var texto = "";
var sorteio = Math.floor(Math.random() * 3);

console.log(sorteio);

const armas = ["S", "E", "F"];
var dragao = armas[sorteio];

if (dragao == arma) {
    texto = "Ninguém vai ganhar, ninguem vai perder... vai todo mundo perder";
}

console.log(texto);