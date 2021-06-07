const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
let z = 0;
decrementEl.addEventListener('click', () => { z -= 1; valueEl.textContent = z; });
incrementEl.addEventListener('click', () => { z += 1; valueEl.textContent = z;});