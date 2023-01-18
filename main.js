function openNav() {
  document.getElementById("navigationMenu").style.width = "100%";
  document.getElementById("section-2").style.height = "0vh";
  document.getElementById("section-3").style.height = "0vh";
}

function closeNav() {
  document.getElementById("navigationMenu").style.width = "0";
  document.getElementById("section-2").style.height = "100vh";
  document.getElementById("section-3").style.height = "100vh";
}

let isActive_1 = false;
let isActive_2 = false;
let isActive_3 = false;

function changeContent(x = "0vh", y = "0vh", z = "0vh") {
  document.getElementById("card-1").style.fontSize = x;
  document.getElementById("card-2").style.fontSize = y;
  document.getElementById("card-3").style.fontSize = z;
}

function openTextBlock_1() {
  if (isActive_1) {
    changeContent();

    isActive_1 = false;
  } else {
    changeContent("1.5vh");

    isActive_1 = true;
    isActive_2 = false;
    isActive_3 = false;
  }
}

function openTextBlock_2() {
  if (isActive_2) {
    changeContent();

    isActive_2 = false;
  } else {
    changeContent("0vh", "1.5vh");

    isActive_2 = true;
    isActive_1 = false;
    isActive_3 = false;
  }
}

function openTextBlock_3() {
  if (isActive_3) {
    changeContent();

    isActive_3 = false;
  } else {
    changeContent("0vh", "0vh", "1.5vh");

    isActive_3 = true;
    isActive_1 = false;
    isActive_2 = false;
  }
}
