const COPY = document.querySelector('textarea');
const VALUE = document.querySelector('.value');

COPY.addEventListener('click', () => {
    navigator.clipboard.writeText(VALUE.value);
})