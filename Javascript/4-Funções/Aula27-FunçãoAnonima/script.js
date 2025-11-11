//Função anonima é uma função sem nome, geralmente atribuída a uma variável ou passada como argumento para outra função

//Exemplo 1: Atribuindo uma função anônima a uma variável
let greet = function(name){
    return "Hello, " + name + "!";
};
//Se colocar sem os parenteses, a variavel greet armazena a função
console.log(greet);//Mostra o código da função
//Se colocar com os parenteses, a variavel greet executa a função
console.log(greet("Alice"));//Mostra "Hello, Alice!"

