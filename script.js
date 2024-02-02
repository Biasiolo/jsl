document.addEventListener('DOMContentLoaded', function () {
    // Adiciona um ouvinte de evento ao botão para mostrar/ocultar o PDF quando clicado
    document.getElementById('btnAbrirPDF').addEventListener('click', function () {
        // Alterna a visibilidade do containerPDF
        document.getElementById('containerPDF').classList.toggle('d-none');
    });
});

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var imgElement = document.getElementById('animatedImage');
    
    // Ajuste esses valores conforme necessário
    var zoomFactor = 0.5;
    var maxZoomOut = 0.8;

    // Calcule o zoom-out com base no scroll
    var zoomLevel = 1 - (scrollPosition * zoomFactor / window.innerHeight);

    // Limite o zoom-out para evitar que a imagem fique muito pequena
    zoomLevel = Math.max(zoomLevel, maxZoomOut);

    // Aplique a transformação de zoom-out
    imgElement.style.transform = 'scale(' + zoomLevel + ')';
});

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var imgElement = document.getElementById('animatedImage2');
    
    // Ajuste esses valores conforme necessário
    var zoomFactor = 0.5;
    var maxZoomOut = 0.8;

    // Calcule o zoom-out com base no scroll
    var zoomLevel = 1.3 - (scrollPosition * zoomFactor / window.innerHeight);

    // Limite o zoom-out para evitar que a imagem fique muito pequena
    zoomLevel = Math.max(zoomLevel, maxZoomOut);

    // Aplique a transformação de zoom-out
    imgElement.style.transform = 'scale(' + zoomLevel + ')';
});

