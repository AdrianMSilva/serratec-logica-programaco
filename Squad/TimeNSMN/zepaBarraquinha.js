/* Zepa tem uma barraquinha na feira, onde vende café e 5 tipos de doces: bala, pirulito,
bombom, paçoca e jujuba. Mas quem é cliente do Zepa sabe que nunca tem café nem
paçoca na sua barraquinha. Quando chega um cliente, ele é sempre gentil e saudoso,
avisando sobre Tudo que ele vende. Quando alguém escolhe um item que ele tem na
barraquinha, ele agradece a pessoa pelo item comprado, e quando alguém pede paçoca ou
café, ele confessa seus vícios e pede desculpa pois devorou o estoque. E se o cliente pedir
algo que ele não vende, o Zepa educadamente pede para que o cliente escolha um produto
válido. */

var repete;
do {
const ler = require("prompt-sync")();
console.log("Olá, Tudo bem? Vendemos. Cafe,Bala,Pirulito,Bombom,Pacoca e Jujuba.");
var produto = ler("Qual produto você gostaria de comprar? :) ");

switch (produto) {
    case "Jujuba":{
        console.log("Muito Obrigado. Tenha um excelente dia :)")
        repete = false;
    }
        break;
    case "Pirulito":{
        console.log("Muito Obrigado. Tenha um excelente dia :)")
        repete = false;
    }
        break;
    case "Bala":{
        console.log("Muito Obrigado. Tenha um excelente dia :)")
        repete = false;
    }
        break;
    case "Bombom":{
        console.log("Muito Obrigado. Tenha um excelente dia :)")
        repete = false;
    }
        break;
    case "Cafe":{
        console.log("Peço desculpas, mas infelizmente tomei tudo :,)")
        repete = false;
    }
        break;
    case "Pacoca":{
        console.log("Peço desculpas, mas infelizmente comi tudo :,)")
        repete = false;
    }
        break;
    default:{
    console.log("Não tenho esse produto. você poderia escolher um produto que tenho? :D")
    repete = true;
    }
}
}
while (repete);