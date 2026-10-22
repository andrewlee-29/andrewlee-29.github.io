document.querySelector('.skip').addEventListener('click', (event) => {
  event.preventDefault();
  const main = document.querySelector('main');
  main.tabIndex = -1;
  main.focus();
});
const themeButton = document.querySelector('.theme');
const isPrototype = location.pathname.startsWith('/prototypes/');
const themeKey = isPrototype ? 'prototype-theme' : 'theme';
const motionButton = document.querySelector('.motion-toggle');
function setMotionPaused(paused) {
  document.body.classList.toggle('motion-paused', paused);
  motionButton.textContent = paused ? 'Resume background' : 'Pause background';
  motionButton.setAttribute('aria-pressed', String(paused));
}
try { setMotionPaused(localStorage.getItem('prototype-motion-paused') === 'true'); } catch { /* Storage is optional. */ }
motionButton.addEventListener('click', () => {
  const paused = !document.body.classList.contains('motion-paused');
  setMotionPaused(paused);
  try { localStorage.setItem('prototype-motion-paused', String(paused)); } catch { /* Storage is optional. */ }
});
function syncVisibility() {
  document.body.classList.toggle('page-hidden', document.hidden);
}
document.addEventListener('visibilitychange', syncVisibility);
syncVisibility();
function setTheme(light) {
  document.body.classList.toggle('light', light);
  themeButton.textContent = light ? 'Dark mode' : 'Light mode';
  themeButton.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
}
let savedTheme;
try { savedTheme = localStorage.getItem(themeKey); } catch { /* Preview works without storage. */ }
setTheme(savedTheme ? savedTheme === 'light' : !isPrototype && matchMedia('(prefers-color-scheme: light)').matches);
themeButton.addEventListener('click', () => {
  const light = !document.body.classList.contains('light');
  setTheme(light);
  try { localStorage.setItem(themeKey, light ? 'light' : 'dark'); } catch { /* Optional persistence. */ }
});
function route() {
  const requestedPage = location.hash.slice(1).replace(/^\//, '');
  const page = ['gallery', 'writing', 'projects', 'about'].includes(requestedPage) ? requestedPage : 'home';
  ['home', 'gallery', 'writing', 'projects', 'about'].forEach(id => { document.getElementById(id).hidden = id !== page; });
  document.querySelector('.below').hidden = page !== 'home';
  document.querySelector('.project-strip').hidden = page !== 'home';
  document.querySelectorAll('nav a').forEach(link => {
    if (link.hash === `#${page}`) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.title = `${page.charAt(0).toUpperCase() + page.slice(1)} — Andrew Lee${isPrototype ? ' · Prototype' : ''}`;
  window.scrollTo(0, 0);
}
document.querySelectorAll('.filters button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filters button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.querySelector('.writing-empty h2').textContent = button.textContent === 'All' ? 'No entries yet.' : `No ${button.textContent} entries yet.`;
}));
// Old comparison links resolve to the selected A direction.
const url = new URL(location.href);
url.searchParams.delete('variant');
history.replaceState(null, '', url);
window.addEventListener('hashchange', route);
route();
