// =========================
// Floating Icons - Scroll Effect
// =========================
window.addEventListener('scroll', function() {
  const icons = document.querySelector('.floating-icons');
  if(window.scrollY > 100){  // স্ক্রল 100px হলে slide-in
    icons.classList.add('show');
  } else {
    icons.classList.remove('show');
  }
});
