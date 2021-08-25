/*Implemente um programa que receba do usuário o valor do salário bruto de um
funcionário e imprima o valor com descontos de INSS, FGTS e Plano de Saúde. O programa
deve utilizar uma função para calcular cada um dos descontos, sendo que estas funções
devem receber o valor do salário bruto e retornar o valor a ser descontado. Os valores
descontados devem ser:
INSS: 10% do valor bruto
FGTS: 8%
Plano de Saúde: R$100,00

 O programa deve informar um salário com valor igual ou acima do salário mínimo.
 Se for informado um salário menor, informar que está errado.
*/

const ler = require("prompt-sync")();

var salario = ler("Qual seu salario bruto? iremos calcular o desconto do INSS, FGTS e Plano de saúde para você ");

porcentagem = 18;

desconto = salario * (1 - porcentagem / 100) - 100;

if (desconto >= 1100) {
    console.log("O salario com desconto é R$" + Math.trunc(desconto));
} else if (desconto <= 1099) {
    console.log("O Salário bruto informado está errado, pois está abaixo do piso salarial. " + Math.trunc(desconto));
} else {
    console.log("O Salário bruto informado está errado!");
}
