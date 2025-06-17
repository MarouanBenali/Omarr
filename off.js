function night() {
  let you = document.getElementById("jk");
  if (you.innerText == "off") {
    you.innerText = "on";
    document.body.style.backgroundColor = "black";
  } else {
    you.innerText = "off";
    document.body.style.backgroundColor = "white";
  }
}

function vote(element) {
  let vt = document.getElementsByClassName("more");
  let plus = vt[element].innerText;
  vt[element].innerText = parseInt(plus) + 1;
}

function goal() {
  let me = document.getElementById("mbpp");
  if (me.innerText == "29") {
    me.innerText = "30";
  }
}

function upDown() {
  let up = document.getElementById("sahm");
  let top = document.getElementsByClassName("top")[0];
  let list = document.getElementsByClassName("list")[0];
  if (up.innerText == "▲") {
    up.innerText = "▼";
    top.style.height = "10px";
    list.style.opacity = "0";
  } else {
    up.innerText = "▲";
    top.style.height = "70px";
    list.style.opacity = "1";
  }
}