var alunos = [];
var presenca = [];

alunos[0] = "Adrian";
presenca[0] = true;
alunos[1] = "Andre Luis";
presenca[1] = true;
alunos[2] = "Andre Silva";
presenca[2] = true;
alunos[3] = "Antonio";
presenca[3] = true;
alunos[4] = "Arthur";
presenca[4] = true;
alunos[5] = "Beatriz";
presenca[5] = true;
alunos[6] = "Bruno";
presenca[6] = true;
alunos[7] = "Carlos";
presenca[7] = false;
alunos[8] = "Carol";
presenca[8] = true;
alunos[9] = "Daniel";
presenca[9] = true;
alunos[10] = "Diego";
presenca[10] = true;
alunos[11] = "Eduardo";
presenca[11] = true;
alunos[12] = "Guilherme";
presenca[12] = true;
alunos[13] = "Gustavo";
presenca[13] = true;
alunos[14] = "Higor";
presenca[14] = true;
alunos[15] = "Karina";
presenca[15] = true;
alunos[16] = "Leandro";
presenca[16] = true;
alunos[17] = "Luana";
presenca[17] = true;
alunos[18] = "Luciana E";
presenca[18] = true;
alunos[19] = "Luciana M";
presenca[19] = true;
alunos[20] = "Marcela";
presenca[20] = true;
alunos[21] = "Marcos Antonio";
presenca[21] = true;
alunos[22] = "Marcos Vinicios";
presenca[22] = true;
alunos[23] = "Mateus";
presenca[23] = true;
alunos[24] = "Nathan";
presenca[24] = true;
alunos[25] = "Núria";
presenca[25] = true;
alunos[26] = "Pedro Ricaro";
presenca[26] = true;
alunos[27] = "Pedro Henrique";
presenca[27] = false;
alunos[28] = "Rafael";
presenca[28] = true;
alunos[29] = "Raquel";
presenca[29] = true;
alunos[30] = "Rodrigo C";
presenca[30] = true;
alunos[31] = "Rodrigo de Paula";
presenca[31] = true;
alunos[32] = "Vanderson";
presenca[32] = true;
alunos[33] = "Vitor";
presenca[33] = true;
alunos[34] = "Viviane";
presenca[34] = true;


var qtde = alunos.length;
console.log("A Quantidade de alunos: " + qtde);

var nome = "Adrian";
var posicaoNome = -1;

for (var i = 0; i < qtde; i++) {
    
    if (alunos[i] == nome) {
        posicaoNome = i;
        break;
    }
}

if (posicaoNome == -1) {
    console.log("Não encontrei o aluno " + nome + " na listagem.");
}
else {
    console.log("O aluno " + nome + " está na cadeira " + posicaoNome);
}

var total = 0;

for (var i = 0; i < presenca.length; i++) {

    if (presenca[i]) {
        total++;
    }
}

console.log("O total de presentes é " + total);


var ausentes = [];

for (var i = 0; i < alunos.length; i++) {
    const ausente = ! presenca[i];

    if (ausente) {
        nome = alunos[i];
        ausentes.push(i);
    }
}
console.log("Os nomes dos ausentes abaixo: ");
console.log(ausentes);
/*

var nomeAusente = "";
var nomePresente = "";

for (var i = 0; i < presenca.length; i++) {
    if (presenca[i]){
        total++
        nomePresente = alunos[i];
    }
    else {
        nomeAusente = alunos[i];
        console.log("O nome dos ausentes é " + nomeAusente);
    }
}
*/