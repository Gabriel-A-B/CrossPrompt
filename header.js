let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Rolando para baixo
        header.style.transition = '0.5s';
        header.style.top = '-100%'; // Ajuste conforme a altura do seu header
    } else {
        // Rolando para cima
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});