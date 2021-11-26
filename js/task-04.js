const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector('#value')
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
});
