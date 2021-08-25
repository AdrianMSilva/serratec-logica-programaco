/*
  sapato

*/
'use string';

var sapato = [];
sapato[0] = "sandalia";
sapato[1] = "mocacim";
sapato[2] = "bota";
sapato[3] = "tenis";
sapato[4] = "jordan";
sapato[5] = "tomanco";
sapato[6] = "kichute";


var pesquisa = "mocacim";
var encontrei = -1;

for (var i = 0; i < sapato.length; i++){

if (sapato[1] == pesquisa) {
    encontrei = i;
}
if (encontrei > -1) {
    console.log("Seu sapato está na gaveta " + 1);
    break;
}
else {
    console.log("Não encontrado");
}

}
