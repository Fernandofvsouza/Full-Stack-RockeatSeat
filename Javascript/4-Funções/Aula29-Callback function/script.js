//callback function é uma função que é passada como parâmetro para outra função 

//Exemplo 1: Função de callback simples
function greet(callback){
    console.log('Executando a função de callback:');
    callback();
}
function callback(){
    console.log('Hello, World!');
}
greet(callback);

//Exemplo 2: Função de callback criada no proprio parametro
greet(function(){
    console.log('Hello from inline callback!');
});

//Exemplo 3 utilizando arrow function como callback
greet(()=>{
    console.log('Hello from arrow function callback!');
});