let container = document.querySelector(".container2");
let click = document.querySelector(".addVideo");
click.addEventListener("click", () => {
  let titleMain = document.getElementsByClassName("Title")[0].value;
  let channelMain = document.getElementsByClassName("Channel")[0].value;
  let viewsMain = document.getElementsByClassName("Views")[0].value;
  let timestampMain = document.getElementsByClassName("Timestamp")[0].value;
  let timeMain = document.getElementsByClassName("Time")[0].value;
  let boxHolder = document.createElement("div");
  boxHolder.classList.add("box-holder");
  container.appendChild(boxHolder);
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  boxHolder.append(imgContainer);
  let textContainer = document.createElement("div");
  textContainer.classList.add("text-container");
  boxHolder.append(textContainer);
  let img = document.createElement("img");
  img.setAttribute("src", "./images/vid-41/hqdefault.webp");
  imgContainer.append(img);
  img.style.position = "relative";
  img.style.height = "100%";
  img.style.borderRadius = "5px";
  let title = document.createElement("h1");
  title.classList.add("text");
  title.innerHTML = titleMain;
  textContainer.append(title);
  let channelName = document.createElement("h4");
  channelName.classList.add("channelName");
  channelName.innerHTML = channelMain;
  textContainer.append(channelName);
  let inlineContainer = document.createElement("div");
  inlineContainer.classList.add("inline-container");
  textContainer.append(inlineContainer);
  let viewCount = document.createElement("h6");
  viewCount.classList.add("views");
  viewCount.innerHTML = viewsMain;
  if (viewCount.innerHTML >= 1000 && viewCount.innerHTML < 1000000) {
    viewCount.innerHTML = `${viewCount.innerHTML / 1000} K views  `;
  } else if (viewCount.innerHTML < 1000) {
    viewCount.innerHTML = `${viewCount.innerHTML} views  `;
  } else if (
    viewCount.innerHTML >= 1000000 &&
    viewCount.innerHTML < 1000000000
  ) {
    viewCount.innerHTML = `${viewCount.innerHTML / 1000000}M views  `;
  } else if (viewCount.innerHTML >= 1000000000) {
    viewCount.innerHTML = `${viewCount.innerHTML / 1000000000}B views  `;
  }
  inlineContainer.append(viewCount);
  let timeUploaded = document.createElement("h6");
  timeUploaded.classList.add("timeUploaded");
  timeUploaded.innerHTML = timeMain;
  inlineContainer.append(timeUploaded);
  let timeStamp = document.createElement("h6");
  timeStamp.classList.add("time");
  timeStamp.style.color = "white";
  timeStamp.style.fontWeight = "lighter";
  timeStamp.innerHTML = timestampMain;
  imgContainer.append(timeStamp);
});
