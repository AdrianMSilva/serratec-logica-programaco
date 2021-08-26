/*
O setor de RH quer fazer uma separação dos candidatos à vaga de programador usando um critério diferente:
As pessoas com nome iniciado em vogal serão entrevistadas na segunda-feira, e as pessoas com nome iniciado em consoante, na terça-feira.
*/

const ler = require("prompt-sync")();

var nome = ler("");

do {
    var pri = nome.substr(0, 1);
    pri = pri.toUpperCase();
    nome = ler("Qual seu primeiro nome? ");
    vogal = (pri == "A") || (pri == "E") || (pri == "I") || (pri == "O") == (pri == "U");
/*
    if (nome == "") break;
    
  

    switch (nome) {
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
            vogal = true;
        break;
            default:
            vogal = false;
    }
*/
    if (vogal)
        console.log("Sua entrevista será segunda");
    else
        console.log("Sua entrevista será terça-feira");

} while (nome != "");

console.log("RH deseja um ótimo dia");