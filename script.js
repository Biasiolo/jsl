document.addEventListener('DOMContentLoaded', function () {
    // Adiciona um ouvinte de evento ao botão para mostrar/ocultar o PDF quando clicado
    document.getElementById('btnAbrirPDF').addEventListener('click', function () {
        // Alterna a visibilidade do containerPDF
        document.getElementById('containerPDF').classList.toggle('d-none');
    });
});

