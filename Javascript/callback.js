const fnc=() => {
  console.log("nothing");
}

const callback = (arg, fnc) => {
  console.log(arg)
  fnc()
}

const loadscript=(src, callback) => {
  let sc=document.createElement("script");
  sc.src=src;
  src.onload=callback("Harry", fnc);
  document.head.append(sc);
}

loadscript("myscript.js", callback);
