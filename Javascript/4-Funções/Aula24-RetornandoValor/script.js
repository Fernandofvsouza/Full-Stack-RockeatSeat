//O retorno de uma função é o valor que ela devolve quando é chamada
//Para retornar um valor, usamos a palavra reservada "return", seguida do valor que queremos devolver

function sum(a, b){
    let result = a + b;
    return result;
}

let response = sum(5, 10);
console.log(response); //15 
//Ou
console.log(sum(20, 30)); //50


//Podemos retornar qualquer tipo de dado: números, strings, arrays, objetos, etc.

function createUser(name, age){
    return {
        name: name,
        age: age
    };
}

let user = createUser("Fernando", 30);
console.log(user); //{ name: 'Fernando', age: 30 }

