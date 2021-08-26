
//string == cadeira de caracteres
var texto = "Uma string é um vetor!";

var trecho = texto[0];
console.log(trecho);

var tamanho = texto.length;
console.log("tamanho: " + tamanho);


//não é de qatro a seis: a partir de 4, seis caracteres
trecho = texto.substr(4, 6);
console.log(trecho);

var posicao = texto.indexOf(" ");
console.log("Posição do primeiro espaço é " + posicao);

trecho = texto.toUpperCase();
console.log("Tudo em maiscula " + trecho);

trecho = texto.toLowerCase();
console.log("Tudo em minusculas " + trecho);

var aluno = "Maria é muito chata e muito rica";
const antigo = "chata";
const novo = "legal";

posicao = aluno.indexOf(antigo);
trecho = aluno.substr(0, posicao);
console.log(trecho);
posicao += antigo.length;
trecho = trecho + novo + aluno.substr(posicao, 100);
console.log(trecho);

/*
function substituir(texto, antigo, novo) {

}

substituir("a", "chata", "legal");
*/
var aluno = "Maria é muito chata e muito rica";
trecho = aluno.replace("muito", "pouca");
console.log(trecho);

//dividir um texto em array
var maria = aluno.split("muito")
console.log(maria);