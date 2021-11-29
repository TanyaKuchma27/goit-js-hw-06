const textInputRef = document.querySelector('#validation-input');


textInputRef.addEventListener("blur", () => {
    (textInputRef.dataset.length == textInputRef.value.length) ?
    textInputRef.classList.add('valid') :
    textInputRef.classList.add('invalid');
});


