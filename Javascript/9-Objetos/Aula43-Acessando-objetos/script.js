//Acessando objetos
const user = {
    email: "fernando@gmail.com",
    id : '1f3fgh4g5h6j7k8l9',
    personalData:{
        name: "Fernando Souza",
        age: 30,
        address: {
            street: "Rua A",
            number: 123,
            city: "São Paulo",
            state: "SP",
            postal_code: "01234-567"
        }
    },
    login: () => {
        console.log("Usuário logado");
    },
    message: function(){
        console.log(`Olá ${this.personalData.name}, seja bem-vindo!`);
    }

}
//Acessando propriedades do objeto usando a notação de ponto (a mais comum)
console.log(user.email);
console.log(user.personalData.name);
console.log(user.personalData.address.city);
//Executando métodos do objeto
user.login();
user.message();

//Acessando propriedades do objeto usando a notação de colchetes
console.log(user['email']);
console.log(user['personalData']['address']['state']);
user['message']();