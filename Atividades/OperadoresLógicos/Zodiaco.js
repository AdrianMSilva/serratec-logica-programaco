

const ler = require("prompt-sync")();

var dia = ler("Qual dia você nasceu? ");
var mês = ler("Qual mês você nasceu? ");

var validar = ((mês == 1 && dia >= 21) || (mês == 2 && dia <= 19))
if (validar) {
    console.log("Você é inteligente?" + validar);
}
else 
    console.log("Você é inteligente?" + validar);