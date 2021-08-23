/* Zepa tem uma barraquinha na feira, e vende café e 5 tipos de doces: bala, pirulito, 
bombom, paçoca e jujuba. Mas quem é cliente do Zepa sabe que nunca tem café nem paçoca na 
sua barraquinha. Quando chega um cliente, ele é sempre gentil e saudoso, avisando sobre Tudo 
que ele vende. Quando alguém escolhe um item que ele tem na barraquinha, ele agradece a pessoa 
pelo item comprado, e quando alguém pede paçoca ou café, ele confessa seus vícios e 
pede desculpa, pois acabou com o estoque! */

const ler = require("prompt-sync")();
console.log("Olá, Tudo bem? Vendemos. Cafe,Bala,Pirulito,Bombom,Pacoca e Jujuba.");
var produto = ler("Qual produto você gostaria de comprar? :) ");

switch (produto) {
    case "Jujuba":
        console.log("Muito Obrigado. Tenha um excelente dia :)")
        break;
    case "Pirulito":
        console.log("Muito Obrigado. Tenha um excelente dia :)")
        break;
    case "Bala":
        console.log("Muito Obrigado. Tenha um excelente dia :)")
        break;
    case "Bombom":
        console.log("Muito Obrigado. Tenha um excelente dia :)")
        break;
    case "Cafe":
        console.log("Peço desculpas, mas infelizmente tomei tudo :,)")
        break;
    case "Pacoca":
        console.log("Peço desculpas, mas infelizmente comi tudo :,)")
        break;
    default:
    console.log("Não tenho esse produto. Aconselho você dar uma passada no PostoIpiranga :D")
}