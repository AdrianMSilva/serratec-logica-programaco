var prompt = require("prompt-sync")();

//Ralacionais

var aluno = "";

var presente = (aluno != "");

console.log("aluno está presente?");
console.log(presente);

//Lógicos

//Boolean
var maria = true;
var carol = true;

//quero saber se AMBAS alunas estão presentes
var estaoPresente = maria && carol;
//var estaoPresentess = (true && true);
console.log("estao presentes?", estaoPresente);

//var respost = true && true && true;
//var motoristaProfissional = A e B e C;

var moto = true;
var carro = true;
var vuc = true;

var motoristaProfissional = moto && carro && vuc;
console.log("É motorista profissional?", motoristaProfissional);
/*
P     Q      &&
true | true | true
true | false| false
false| true | false
false| false| false
*/

//Operadr OU

//Quando QUALQUER dos valores é verdade

var servidorDragao = true;
var serverGuerrilha = true;

var entrar = servidorDragao || serverGuerrilha;

console.log("estou conectado no discord?", entrar);

/*
P     Q      &&
true | true | true
true | false| true
false| true | true
false| false| false
*/

//Negação not não ! 

/*
P      NOT
true | false
salse | true
*/

var prof = true;

var serverGalera = ! prof;

console.log("Posso entrar no server da galera?", serverGalera);

