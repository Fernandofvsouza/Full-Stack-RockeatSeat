//Arrow function, é uma forma mais curta de escrever uma função em JavaScript.

//Exemplo 1:
const showMessage = ()=>{
    return "Hello, World!";
}

console.log(showMessage());//Mostra "Hello, World!"

//Exemplo 2: Arrow function com um parâmetro
const square = (num)=>{
    return num * num;
}

console.log(square(4));//Mostra 16

//Exemplo 3: Arrow function com múltiplos parâmetros
const add = (a, b)=>{
    return a + b;
}

console.log(add(3, 5));//Mostra 8

//Exemplo 4: Arrow function com retorno implícito (sem chaves e return)
const multiply = (x, y) => x * y;

console.log(multiply(2, 6));//Mostra 12

//Exemplo 5: Arrow function com um único parâmetro (parênteses opcionais)
const greet = name => "Hello, " + name + "!";

console.log(greet("Bob"));//Mostra "Hello, Bob!"


