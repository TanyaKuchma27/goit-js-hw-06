const textInputRef = document.querySelector('#validation-input');

textInputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(textInputRef.dataset.length)) {
        textInputRef.classList.add('valid');
        textInputRef.classList.remove('invalid');
    } else {
        textInputRef.classList.add('invalid');
        textInputRef.classList.remove('valid');
    }
}

