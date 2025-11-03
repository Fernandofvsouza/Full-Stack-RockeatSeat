//Falsy quando um valor é considerado falso em um contexto booleano e truthy quando é considerado verdadeiro em um contexto booleano

//Valores Falsy em JavaScript:
console.log(false ? "verdadeiro" : "falso"); //falso
console.log(0 ? "verdadeiro" : "falso"); //falso
console.log(-0 ? "verdadeiro" : "falso"); //falso
console.log("" ? "verdadeiro" : "falso"); //falso
console.log(null ? "verdadeiro" : "falso"); //falso
console.log(NaN ? "verdadeiro" : "falso"); //falso
console.log(undefined ? "verdadeiro" : "falso"); //falso

//Qualquer outro valor é considerado truthy
console.log(true ? "verdadeiro" : "falso"); //verdadeiro
console.log(1 ? "verdadeiro" : "falso"); //verdadeiro
console.log(3.23 ? "verdadeiro" : "falso"); //verdadeiro
console.log("JavaScript" ? "verdadeiro" : "falso"); //verdadeiro
console.log([] ? "verdadeiro" : "falso"); //verdadeiro
console.log({} ? "verdadeiro" : "falso"); //verdadeiro
console.log(function(){} ? "verdadeiro" : "falso"); //verdadeiro
console.log(" " ? "verdadeiro" : "falso"); //verdadeiro
//Espaço em branco dentro de uma string também é considerado truthy
console.log("falso" ? "verdadeiro" : "falso"); //verdadeiro
console.log("0" ? "verdadeiro" : "falso"); //verdadeiro