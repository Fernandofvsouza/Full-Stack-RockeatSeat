//Acessando propriedades no contexto do objeto
const user = {
   name: "Fernando Souza",
   age: 30,
   message: () => {
       console.log(`Olá ${user.name}, seja bem-vindo!`);
   },
   myAge: function()  {
    //Usando this para acessar a propriedade do objeto
    //O js entende que o this no contexto do objeto user é o próprio objeto user
    //Nao funciona com notação de arrow function
       console.log(`Minha idade é ${this.age}`);
   }
}
user.message();
user.myAge();
