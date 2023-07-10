function dark() {
  document.documentElement.classList.add('dark');
  localStorage.theme = 'dark';
}

function light() {
  document.documentElement.classList.remove('dark');
  localStorage.theme = 'light';
}

function reset() {
  localStorage.removeItem('theme');
  document.documentElement.classList.toggle('dark', isDark());
}

function toggle() {
  return isDark() ? light() : dark();
}

function isDark() {
  return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
}

document.documentElement.classList.toggle('dark', isDark());
window.theme = {reset, dark, light, toggle};