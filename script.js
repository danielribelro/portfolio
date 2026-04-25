const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    // Faz o brilho seguir o mouse suavemente
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// Efeito de revelação ao scroll (opcional)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Aplicar em seções para um fade-in suave
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});