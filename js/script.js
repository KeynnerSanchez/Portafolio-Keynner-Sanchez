const $ = s => document.querySelector(s);

// Menú móvil
const nav = $('.nav-links');
$('.menu-btn').onclick = () => nav.classList.toggle('active');
nav.onclick = () => nav.classList.remove('active');

// Scroll: barra de progreso, header y botón "volver arriba"
const bar = $('#progress'), btn = $('#top'), header = $('header');
addEventListener('scroll', () => {
  bar.style.width = scrollY / (document.documentElement.scrollHeight - innerHeight) * 100 + '%';
  header.classList.toggle('scrolled', scrollY > 80);
  btn.classList.toggle('show', scrollY > 500);
});
btn.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

// Contadores animados
document.querySelectorAll('.counter').forEach(c => {
  const max = +c.dataset.target;
  let n = 0;
  (function step() {
    c.textContent = n = Math.min(max, n + Math.ceil(max / 80));
    if (n < max) setTimeout(step, 20);
  })();
});

// Aparición de tarjetas al hacer scroll
const io = new IntersectionObserver(items => items.forEach(i => {
  if (i.isIntersecting) { i.target.classList.add('show'); io.unobserve(i.target); }
}));
document.querySelectorAll('.tech-card,.project-card,.service-card,.certificate-card').forEach(el => {
  el.classList.add('reveal');
  el.style.setProperty('--d', [...el.parentNode.children].indexOf(el) * 0.1 + 's');
  io.observe(el);
});
