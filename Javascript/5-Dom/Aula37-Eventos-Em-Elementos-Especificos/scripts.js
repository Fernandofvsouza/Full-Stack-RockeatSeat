//Eventos em elementos específicos
const ul = document.querySelector('ul');

ul.addEventListener('scroll', function(event) {
    console.log('A lista foi rolada!');
    console.log(event);

    //Podemos verificar a posição do scroll usando  ul.scrollTop
    console.log('Posição do scroll:', ul.scrollTop);

    //Podemos alterar a posição do scroll usando ul.scrollTop
    if(ul.scrollTop > 300) {
        ul.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
});