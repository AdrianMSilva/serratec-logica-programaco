

const ler = require("prompt-sync")();

console.log("== Banco de Sangue ==");
console.log("[Digite “Sim” ou “Nao” nas restrições a seguir]");
var idade = ler("Idade abaixo de 16 ou acima de 69 anos: ");
var peso = ler("Pesa menos de 50kg: ");
var hepatite = ler("Portador de Hepatite: ");
var malaria = ler("Já teve Malária: ");
var doacao = ler("Fez doação recente: ");

var validar = idade && peso && hepatite && malaria && doacao == "Nao";

if (validar) {
    console.log("Pode doar sangue? " + validar);
}
else
    console.log("Pode doar sangue? " + validar);
