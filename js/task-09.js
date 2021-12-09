function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorRef = document.querySelector('.change-color');
const textColorRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');

const onbtnChangeColorClick = () => {
  const color = getRandomHexColor();

  bodyRef.style.backgroundColor = color;
  textColorRef.textContent = color;
}

btnChangeColorRef.addEventListener("click", onbtnChangeColorClick);