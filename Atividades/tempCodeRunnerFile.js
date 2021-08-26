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