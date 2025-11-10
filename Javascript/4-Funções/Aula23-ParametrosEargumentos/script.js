//Parametros e argumentos
//Parametro é uma variavel que a função vai receber, que so existe na função, apenas no escopo da função
//Argumento é o valor real que é passa para a função quando ela é chamada

function saudacao(nome){ //nome é o parametro
    console.log("Olá, " + nome + "!");//Saída: "Olá, Fernando!"
}

saudacao("Fernando");//Fernando é o argumento que estamos passando para o parametro nome
saudacao("Maria");//Saída: "Olá, Maria!"
saudacao("João");//Saída: "Olá, João!"

//Podemos ter mais de um parametro
function soma(a, b){ //a e b são os parametros
    let resultado = a + b;
    console.log("A soma de " + a + " e " + b + " é: " + resultado);
}

soma(5, 3);

//Podemos ter parametros com valores padroes
function multiplicacao(x, y = 2){ //y tem valor padrao 2
    let resultado = x * y;
    console.log("A multiplicação de " + x + " e " + y + " é: " + resultado);
}

multiplicacao(4);//Y vai assumir o valor padrao 2