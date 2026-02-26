const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const revealEls = document.querySelectorAll('.reveal');
const skillFills = document.querySelectorAll('.skill-fill');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  revealEls.forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.88) {
      setTimeout(() => el.classList.add('visible'), i * 80);
    }
  });

  skillFills.forEach(fill => {
    const rect = fill.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95 && fill.style.width === '') {
      fill.style.width = fill.dataset.width + '%';
    }
  });
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

document.getElementById('contatoForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Mensagem enviada!';
  btn.style.background = '#16a34a';
  btn.style.borderColor = '#16a34a';
  setTimeout(() => {
    btn.innerHTML = 'Enviar Mensagem <i class="fa-solid fa-paper-plane"></i>';
    btn.style.background = '';
    btn.style.borderColor = '';
    e.target.reset();
  }, 3000);
});

window.dispatchEvent(new Event('scroll'));
