// Shared navigation behavior and small enhancements for every page.
document.querySelectorAll('[data-current-year]').forEach(element => {
  element.textContent = String(new Date().getFullYear());
});
(() => {
  const button = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  if (!button || !menu) return;
  const navigation = button.closest('nav');
  const desktop = window.matchMedia('(min-width: 768px)');

  const setOpen = (open) => {
    menu.classList.toggle('hidden', !open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  };

  button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target)) setOpen(false);
  });
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });
  navigation.addEventListener('focusout', (event) => {
    if (!navigation.contains(event.relatedTarget)) setOpen(false);
  });
  desktop.addEventListener('change', () => setOpen(false));
})();
