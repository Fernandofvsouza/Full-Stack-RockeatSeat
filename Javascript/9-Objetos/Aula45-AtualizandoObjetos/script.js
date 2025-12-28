//Atualizando objetos
const product = {
    name: "Smartphone",
    price: 1500,
    brand: "Samsung",
    model: "Galaxy S21"
}
console.log("Produto antes da atualização: " + product.name + " - R$" + product.price);

//atualizando propriedades do objeto
product.price = 1400; //Atualizando o preço
product.model = "Galaxy S22"; //Atualizando o modelo

console.log("Produto após a atualização: " + product.name + " - R$" + product.price + " - Modelo: " + product.model);

//notação de colchetes para atualizar propriedades
product['brand'] = "Apple";