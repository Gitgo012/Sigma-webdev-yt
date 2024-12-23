let cont = document.querySelector(".container");
cont.addEventListener("dblclick", () => {
  while (cont.firstChild) {
    cont.removeChild(cont.firstChild);
  }
  let div = document.createElement("div");
  div.style.height = "100px";
  div.style.width = "200px";
  div.style.border = "1px solid black";
  div.style.display="flex";
  div.style.justifyContent="center";
  div.style.alignItems="center";
  div.style.borderRadius="5px";
  let h5 = document.createElement("h5");
  h5.innerHTML = "You pressed double click";
  div.append(h5);
  cont.style.display = "flex";
  cont.style.justifyContent = "center";
  cont.style.alignItems = "center";
  cont.append(div);
});


// Events:-> "dblclick", "contextmenu","keydown"
cont.addEventListener("contextmenu", ()=>{
    alert("You opened context menu");
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key);
})