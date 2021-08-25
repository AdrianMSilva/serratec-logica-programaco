/*
O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo.
Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.
*/

const ler = require("prompt-sync")();

var pessoaEntrando = ler("Quantas pessoas vão entrar nesse momento ? ");
var pessoaNaLoja = 2;
var PodeEntrar = pessoaEntrando + pessoaNaLoja;
var limite = 12;

if (PodeEntrar < limite) {
    console.log("aguarde");
}
    else 
    console.log("pode entrar");
  