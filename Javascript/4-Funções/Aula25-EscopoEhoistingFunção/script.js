//Hoisting da função permite que ela seja chamada antes de sua declaração exemplo:

showMessage();

function showMessage(){
    console.log("Função chamada antes da declaração!");
    innerFunction(); //Função interna pode ser chamada aqui, antes da declaração

    function innerFunction(){
        console.log("Função interna chamada!");
    }
}

//Escopo da função define que uma variavel ou função nao pode ser chamada fora do seu escopo exemplo:
innerFunction(); //Erro: innerFunction is not defined
