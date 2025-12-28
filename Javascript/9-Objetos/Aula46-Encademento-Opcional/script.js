/*
    optional chaining (?.) - encademento opcional se a propriedade ou função chamada é nullish (null ou undefined), a expressão é interrompida e retorna undefined ao invés de lançar um erro.

    util ao explorar o conteudo de um objeto quando nao exite garantia da existencia de determinadas propriedades obrigatorias.

    //Exemplo: foto do usuario, se o usuario nao tiver foto, nao lancar um erro.
*/
const user = {
    id: 123,
    name: "Fernando Souza",
    //Suponha que o endereço seja opcional na hora de criar o objeto user
    /*
    adress:{
        street: "Rua A",
        number: 100,
        geo:{
            lat: -23.564,
            lng: -46.6543
        },
    },*/
    message : function(){
        console.log(`Olá ${this.name}, seja bem-vindo!`);
    }

}
console.log(user?.adress?.geo?.lat); //undefined, nao lança erro
user.message?.(); //Não lança erro
