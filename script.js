// script.js

window.addEventListener('load', () => {
    const minDelay = 2000; // 2000 milissegundos = 2 segundos
    
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    // Marca o tempo de início do carregamento
    const startTime = Date.now();
    
    // Função para ocultar o preloader
    function hidePreloader() {
        const elapsedTime = Date.now() - startTime;
        const delay = Math.max(minDelay - elapsedTime, 0); // Calcula o tempo restante para garantir que o preloader fique visível por pelo menos minDelay
        
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            content.style.display = 'block';
        }, delay);
    }
    
    hidePreloader();
});
