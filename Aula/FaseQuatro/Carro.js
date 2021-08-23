/*
Requisto
Criar um programa para saber se o carro está ligado ou desligado
*/
var prompt = require("prompt-sync")();
//Entrada
console.log('Responda algumas perguntas com "sim" ou "nao":');
var movimento = prompt("O veiculo está em movimento? ");
var barulho = prompt("Está ouvindo barulho do motor? ");
var luzes = prompt("As luzes do painel, ou farol, estão acesas? ");

//Processamento
var ligado = (movimento == "sim") || (barulho == "sim") && (luzes == "sim");

//Saida
console.log("concluimos que: Seu carro está ligado", ligado);sim

/*
var A = "A";
var B = "console";
//Textos vem entre aspas para diferenciar de identificadores
var const nome if // declarações
"var" "const" //
*/
 