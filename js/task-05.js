const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', (event) => {
    if (inputRef.value !== '') {
        outputRef.textContent = event.currentTarget.value;
    } else {
        outputRef.textContent = 'Anonymous';
    };
});