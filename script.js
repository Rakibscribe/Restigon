// Scroll motion JS (smooth, bounded)
window.addEventListener('scroll', () => {
  const icons = document.querySelector('.floating-icons');
  const scrollY = window.scrollY;

  const maxTranslate = window.innerHeight - icons.offsetHeight - 80; // header height
  let translate = scrollY * 0.3;  // scroll speed multiplier
  if (translate > maxTranslate) translate = maxTranslate;
  
  icons.style.transform = `translateY(${translate}px)`;
});
