function generateRandomColors() {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
function changeColor() {
  let box1 = document.getElementsByClassName("box-1")[0];
  let box2 = document.getElementsByClassName("box-2")[0];
  let box3 = document.getElementsByClassName("box-3")[0];
  let box4 = document.getElementsByClassName("box-4")[0];
  let box5 = document.getElementsByClassName("box-5")[0];
  box1.style.backgroundColor = generateRandomColors();
  box2.style.backgroundColor = generateRandomColors();
  box3.style.backgroundColor = generateRandomColors();
  box4.style.backgroundColor = generateRandomColors();
  box5.style.backgroundColor = generateRandomColors();
  setInterval(() => {
    changeColor();
  }, 1000);
}


