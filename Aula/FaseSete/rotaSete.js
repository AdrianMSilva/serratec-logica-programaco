
const ler = require("prompt-sync")();

var onibus = [];

onibus[1] = "Caleme X Alto";
onibus[2] = "Salaco X Alto";
onibus[3] = "Campo Grande X Alto";
onibus[4] = "Salaquinho X Alto";
onibus[5] = "Parque do Imbui X Alto";
onibus[6] = "Ermitangem X Alto";
onibus[7] = "Varzea X Alto";
onibus[8] = "Roviaria X Alto";

const linha = ler("Qual linha de onibus você gostaria de acessar? ");

nome = onibus[linha];

console.log("Essa é a rota " + linha + ": " + nome);

