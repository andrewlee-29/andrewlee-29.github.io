document.querySelector('.skip').addEventListener('click', (event) => {
  event.preventDefault();
  const main = document.querySelector('main');
  main.tabIndex = -1;
  main.focus();
});
const themeButton = document.querySelector('.theme');
function setTheme(light) {
  document.body.classList.toggle('light', light);
  themeButton.textContent = light ? 'Dark mode' : 'Light mode';
  themeButton.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
}
let savedTheme;
try { savedTheme = localStorage.getItem('prototype-theme'); } catch { /* Preview works without storage. */ }
setTheme(savedTheme === 'light');
themeButton.addEventListener('click', () => {
  const light = !document.body.classList.contains('light');
  setTheme(light);
  try { localStorage.setItem('prototype-theme', light ? 'light' : 'dark'); } catch { /* Optional persistence. */ }
});
function route() {
  const page = ['gallery', 'writing'].includes(location.hash.slice(1)) ? location.hash.slice(1) : 'home';
  ['home', 'gallery', 'writing'].forEach(id => { document.getElementById(id).hidden = id !== page; });
  document.querySelector('.below').hidden = page !== 'home';
  document.querySelector('.project-strip').hidden = page !== 'home';
  document.querySelectorAll('nav a').forEach(link => {
    if (link.hash === `#${page}`) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.title = `${page === 'home' ? 'Home' : page === 'gallery' ? 'Gallery' : 'Writing'} — Andrew Lee · Prototype`;
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
