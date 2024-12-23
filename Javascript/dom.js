function changeColor() {
  let body = document.querySelector("body");
  let colors = ["red", "green", "orange", "yellow", "blue"];
  let random = Math.floor(Math.random() * 4);
  body.style.backgroundColor = colors[random];
}
