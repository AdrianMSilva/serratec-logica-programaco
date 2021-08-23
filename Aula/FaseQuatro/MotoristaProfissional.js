/*
Requisito
Para saber se o motorista é profissional, ele precisa se hanilitado nas categorias:
A, B, e C.
*/

var prompt = require("prompt-sync")();
//Entradas
var A = prompt("Possui habilitação A? Digite sim ou não");
var B = prompt("Possui habilitação B? Digite sim ou não");
var C = prompt("Possui habilitação C? Digite sim ou não");

//processamento
//primeiro particularizar, depois, generalizar.
var moto = A == "sim" || A == "Sim";
var carro = B == "sim" || B == "Sim";
var vuc = C == "sim" || C == "Sim";

//&& || lógicos
var resposta = moto && carro && vuc;

//Saida
console.log("Você é motorista de verdade?", resposta);



