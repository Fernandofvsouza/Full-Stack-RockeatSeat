let title = document.querySelector('.special-item');

console.log(title.textContent); // Exibe o texto do elemento selecionado

title.textContent = 'Texto alterado via JavaScript!'; // Altera o texto do elemento selecionado

console.log(title.innerText); // Exibe o texto interno do elemento selecionado

title.innerHTML = '<span style="color: red;">Texto com HTML alterado via JavaScript!</span>'; // Altera o conteúdo HTML do elemento selecionado