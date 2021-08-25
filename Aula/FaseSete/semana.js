

const semana = ["domingo","segunda=feira","terça-feira","quarta-feira","quinta-feira"];
semana[5] = "sexta";
semana[6] = "sabado";


console.log(semana[4]);

//lista
semana.push("Semana acabou");

console.log(semana);

var A = 6;
var B = 8;

//permuta
var aux = A;
A = B;
B = aux;