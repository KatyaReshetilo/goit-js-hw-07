const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');
inputEl.addEventListener('input', onInputCange);
function onInputCange(event) {
    if (event.currentTarget.value.trim() === '') {
        nameEl.textContent = 'незнакомец';
    } else { nameEl.textContent = event.currentTarget.value;};
}