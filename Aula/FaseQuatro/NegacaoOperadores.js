
var prompt = require("prompt-sync")();

const limiteClientes = 8;

console.log("Tem uma pessoa na porta na loja querendo entrar.");
var qtde = prompt("Quantas pessoas estão na loja no momento? ");

var permitirEntrada = (qtde < limiteClientes);

console.log("Entrada Permitida?", permitirEntrada);

// ====================================

var prompt = require("prompt-sync")();

const limiteClientes = 8;

console.log("Tem uma pessoa na porta na loja querendo entrar.");
var qtde = prompt("Quantas pessoas estão na loja no momento? ");

var bloquear = ! (qtde < limiteClientes);

console.log("Impedir a entrada?", bloquear);

// ====================================

var prompt = require("prompt-sync")();

const limiteClientes = 8;

console.log("Tem uma pessoa na porta na loja querendo entrar.");
var qtde = prompt("Quantas pessoas estão na loja no momento? ");

var bloquear =  (qtde >= limiteClientes);

console.log("Impedir a entrada?", bloquear);