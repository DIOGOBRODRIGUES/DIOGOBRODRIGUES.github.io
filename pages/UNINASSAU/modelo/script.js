document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.chapter');
    const navLinks = document.querySelectorAll('.toc-link');

    // Função que observa a rolagem da página para destacar o índice
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            // Pega a distância do topo de cada seção
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Verifica se a tela rolou o suficiente para entrar na seção
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        // Remove a classe ativa de todos e adiciona no link atual
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});