function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorRef = document.querySelector('.change-color');
const textColorRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');

const onbtnChangeColorClick = () => {
  bodyRef.style.background = `${getRandomHexColor()}`;
  textColorRef.textContent = `${getRandomHexColor()}`;
}

btnChangeColorRef.addEventListener("click", onbtnChangeColorClick);