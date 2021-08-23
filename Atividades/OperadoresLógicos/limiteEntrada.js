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
  