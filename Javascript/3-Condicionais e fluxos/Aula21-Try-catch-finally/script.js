//Try-Catch-Finally
/*
tratamento de exceções em javascrip é um condição de fluxo que se caso algo de errado podemos redirecionar o fluxo do codigo para que ele nao quebre toda a aplicação
exemplo:
*/
try{
    //codigo que pode gerar erro
    console.log(nome);//nome nao foi definido
}catch(error){
    //codigo para tratar o erro
    console.log("Ocorreu um erro: " + error.message);//Saída: "Ocorreu um erro: nome is not defined"
}finally{
    //codigo que sempre sera executado independente se houve erro ou nao
    console.log("Execução finalizada.");//Saída: "Execução finalizada."
}