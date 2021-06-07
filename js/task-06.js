const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const textLength = Array.from(event.currentTarget.value).length;
    if (textLength == inputEl.dataset.length) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }

}