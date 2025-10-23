 /**
- conversão de tipos ocorre quando voce explicitamente transforma um valor de um tipo para o outro, isso é feito de forma consciente, usando funções ou métodos específicos para conversão.
ex:
  */
let value = "123"; // string
console.log(Number(value)); // converte string para número, resultado: 123

let age = 30; // número
console.log(String(age)); // converte número para string, resultado: "30"

let number = 1; // número
console.log(Boolean(number)); // converte número para booleano, resultado: true
//Se for 0, o resultado será false, se for qualquer outro número, o resultado será true

/*
- Coerção de tipos ocorre quando o javascript automaticamente, tenta converter um dos valores para um tipo compativel antes de realizar uma operação.
*/

console.log('10' + 3); // o javascript converte o número 3 para string, resultado: "103"