jQuery(document).ready(function(){jQuery("body").addClass("light");});

// DOM Elements

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}

// Button Event Handlers

darkButton.onclick = () => {
  if (body.classList.contains("light")) {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark'); 
  } else if (body.classList.contains("matrix")) {
    body.classList.replace('matrix', 'dark');
    localStorage.setItem('theme', 'dark'); 
  } 
};

lightButton.onclick = () => {
  if (body.classList.contains("dark")) {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light'); 
  } else if (body.classList.contains("matrix")) {
    body.classList.replace('matrix', 'light');
    localStorage.setItem('theme', 'light'); 
  } 
};

solarButton.onclick = () => {
  if (body.classList.contains('solar')) {

    body.classList.remove('solar');
    solarButton.style.cssText = `
      --bg-solar: var(--yellow);
    `

    solarButton.innerText = 'solarize';

    localStorage.removeItem('isSolar');

  } else {

    solarButton.style.cssText = `
      --bg-solar: white;
      `

    body.classList.add('solar');
    solarButton.innerText = 'normalize';

    localStorage.setItem('isSolar', true);
  }
};