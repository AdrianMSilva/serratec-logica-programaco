/* Exercicio digestivo

O shopping decidiu colocar na entrada dos sanitários um indicar luminoso de capacidade,
antes de entrar, a pessoa deve responder se o indicar está verde ou vermelho,
caso a resposta seja vermelho, a pessoa deve aguardar antes de entrar.
*/


var prompt = require("prompt-sync")();

console.log("=== shopping - Sanitários ===")

//entradas
var cor = prompt("qual a cor do indicador? (verde, vermelho) ")

//processamento
var liberado = (cor != "vermelho");

//saidas
var saida = "aguarde antes de entrar";

if (liberado)
   saida = "pode entrar no sanitário";

   console.log(saida);

