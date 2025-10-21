// Scroll animation
window.addEventListener('scroll', () => {
  const icons = document.querySelector('.floating-icons');
  const scrollY = window.scrollY;
  // Scroll অনুযায়ী হালকা translate
  icons.style.transform = `translateY(${scrollY * 0.3}px)`;
});
