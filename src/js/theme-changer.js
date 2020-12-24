const refs = {
  switcher: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

pageJustOpened();

refs.switcher.addEventListener('change', changeTheme);

function changeTheme() {
  if (refs.body.className === Theme.LIGHT) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('storageTheme', Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('storageTheme', Theme.LIGHT);
  }
}

function pageJustOpened() {
  const preferedTheme = localStorage.getItem('storageTheme');
  if (preferedTheme === null) {
    refs.body.classList.add(Theme.LIGHT);
  } else {
    refs.body.classList.add(preferedTheme);
    if (preferedTheme === Theme.DARK) {
      refs.switcher.checked = 'true';
    }
  }
}
