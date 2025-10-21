// Floating Icons Drag-to-scroll
const floatingIcons = document.querySelector('.floating-icons');
let isDragging = false;
let startY;
let scrollTopStart;

floatingIcons.addEventListener('mousedown', (e) => {
  isDragging = true;
  floatingIcons.classList.add('dragging');
  startY = e.pageY - floatingIcons.offsetTop;
  scrollTopStart = floatingIcons.scrollTop;
});

floatingIcons.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const y = e.pageY - floatingIcons.offsetTop;
  const walk = (startY - y); // scroll distance
  floatingIcons.scrollTop = scrollTopStart + walk;
});

floatingIcons.addEventListener('mouseup', () => {
  isDragging = false;
  floatingIcons.classList.remove('dragging');
});

floatingIcons.addEventListener('mouseleave', () => {
  isDragging = false;
  floatingIcons.classList.remove('dragging');
});

// Touch support for mobile
floatingIcons.addEventListener('touchstart', (e) => {
  isDragging = true;
  startY = e.touches[0].pageY - floatingIcons.offsetTop;
  scrollTopStart = floatingIcons.scrollTop;
});

floatingIcons.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const y = e.touches[0].pageY - floatingIcons.offsetTop;
  const walk = (startY - y);
  floatingIcons.scrollTop = scrollTopStart + walk;
});

floatingIcons.addEventListener('touchend', () => {
  isDragging = false;
});
