const controlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
controlEl.addEventListener('input', onInputCange);

function onInputCange(event) {
    if (event.currentTarget.value++) {
        textEl.style.fontSize = `${event.currentTarget.value}px`;
    }

}