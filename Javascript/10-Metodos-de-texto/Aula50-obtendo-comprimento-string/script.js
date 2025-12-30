//Obtendo comprimento de uma string
let message = "Estou estudando os fundamentos do Javascript!";

console.log(`A mensagem tem ${message.length} caracteres.`); //A mensagem tem 45 caracteres.

//Onde pode ser usado
//Validando campos de formulários
let username = "FernandoSouza";

if(username.length < 6){
    console.log("O nome de usuario deve ter pelo menos 6 caracteres.");
} else {
    console.log("Nome de usuario valido.");
}

//Verificando quantos digitos tem um numero
//Numeros não tem propriedade length, por isso convertemos para string
let value = 12345;
console.log(String(value).length); //5
console.log(value.toString().length); //5

