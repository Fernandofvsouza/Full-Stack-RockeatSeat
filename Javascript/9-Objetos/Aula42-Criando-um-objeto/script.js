/*
   Objetos em JavaScript
   -Uma coleção de dados e/ou funcionalidades;
   -Pode ter propriedades e métodos;
*/
//Criando um objeto vazio
const obj = {};
console.log(typeof obj);

//Criando um objeto com propriedades e metodos
const user = {
    //Propriedades(são usadas para descrever o objeto)
    //chave: valor
    email: "fernando@gmail.com",
    id : '1f3fgh4g5h6j7k8l9',
    //Propriedades aninhadas
    personalData:{
        name: "Fernando Souza",
        age: 30,
        address: {
            street: "Rua A",
            number: 123,
            city: "São Paulo",
            state: "SP",
            //propriedades tambem é comum usar snake case em objetos ex:
            postal_code: "01234-567"
        }
    },
    //Métodos(são funções que descrevem ações que o objeto pode realizar)
    login: () => {
        console.log("Usuário logado");
    },
    message: function(){
        console.log(`Olá ${this.personalData.name}, seja bem-vindo!`);
    }

}