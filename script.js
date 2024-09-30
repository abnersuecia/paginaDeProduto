const imagemPrincipal = document.querySelector('.imagem-principal');

const miniaturas = document.querySelectorAll('.miniaturas img');

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', () => {
        imagemPrincipal.src = miniatura.src;
    });
});
