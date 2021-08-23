/*
O sistema irá solicitar a digitação da sigla da "UF" de onde você mora.
 E o programa irá dizer o nome completo do estado. Para as UFs do sudeste,
  considerar a entrada em maiúsculas ou minúsculas.
*/


//Entradas
var ler = require("prompt-sync")();
var uf = ler("Qual a sigla da UF de onde você mora? ");

//Processamento
nomeCompleto = "";

switch (uf) {
    case "am","AM": nomeCompleto = "Amazonas";
    break;
    case "RJ","rj": nomeCompleto = "Rio de janeiro";
    break;
    case "SP","sp": nomeCompleto = "São Paulo";
    break;
    case "BA","ba": nomeCompleto = "Bahia";
    break;
    case "MG","mg": nomeCompleto = "Minas Gerais";
    break;
    case "ES","es": nomeCompleto = "Espirito Santo";
    break;
    default: nomeCompleto = "Estado não está no sistema :C";
}

//Saida
console.log("Nome completo do estado: " + nomeCompleto);