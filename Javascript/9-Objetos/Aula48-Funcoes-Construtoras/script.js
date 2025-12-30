/*
Funcoes construtoras, sao funcoes utilizadas para criar objetos, geralmente iniciadas com a letra maiuscula para diferenciar de funcoes comuns.
*/

function createProduct(name){
    
    const product = {

    };
    product.name = name;
    product.details = function(){
        console.log(`Produto: ${this.name}`);
    }
    return product;
}
//Instancia de objetos, é criar uma nova copia do objeto, na memoria.
//O new cria um novo objeto utilizando a funcao construtora.
const product1 = new createProduct("Camiseta");
const product2 = new createProduct("Caneca");

console.log(product1.name);
console.log(product2.name);
product1.details();
product2.details();

console.log(product1 === product2); //Flase, sao objetos diferentes na memoria.


//Exemplos de funcoes construtoras nativas do Javascript
let myName = new String("Fernando Souza");
console.log(myName);
let myNumber = new Number(123);
console.log(myNumber);
let myDate = new Date("2024-06-01");
console.log(myDate);
let myArray = new Array("A", "B", "C");
console.log(myArray);
let myObject = new Object({id: 1, name: "Objeto"});
console.log(myObject);

//OUTRA FORMA DE CRIAR OBJETOS COM FUNCAO CONSTRUTORA
function Person(name, age){
    this.name = name;
    this.age = age;
    this.introduce = function(){
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos.`);
    }
}

const person1 = new Person("Ana", 30);
const person2 = new Person("Bruno", 25);

person1.introduce();
person2.introduce();