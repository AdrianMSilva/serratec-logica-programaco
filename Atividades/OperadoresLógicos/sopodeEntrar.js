

const ler = require("prompt-sync")();

var requisito1 = ler("Digite a temperatura: ")
var requisto2 = ler("Está usando mascará? 'S' ou 'N' ")

if (requisito1 < 37.5 && requisto2 == "S") {
    console.log("Pode entrar!");
}
    else 
    console.log("Não pode entrar!");
