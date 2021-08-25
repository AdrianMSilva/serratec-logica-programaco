
const ler = require("prompt-sync")();

var numero = ler("Digite um numero inteiro, positivo ou negativo e irei dizer o oposto dele >:) ")
var dobro = numero * 2;

console.log("O oposto de " + numero);

numero = numero - dobro;

console.log("É : " + numero);