// A bre o menu de navegação
function openNav() {
  document.getElementById("navigationMenu").style.width = "100%";
  document.getElementById("section-2").style.height = "0vh";
  document.getElementById("section-3").style.height = "0vh";
}
// Fecha o menu de navegação
function closeNav() {
  document.getElementById("navigationMenu").style.width = "0";
  document.getElementById("section-2").style.height = "100vh";
  document.getElementById("section-3").style.height = "100vh";
}

// Código abaixo para controlar o comportamento de de botões e cartões de texto
// Quando um botão é clicado, ele abre um cartão e fecha os outros, se tiver outro
// aberto no momento, se ele já estiver aberto clicar no botão fecha.

let isActive_1 = false;
let isActive_2 = false;
let isActive_3 = false;

// Cada parâmetro dessas funções abaixo é para um elemento
function changeContent(x = "0vh", y = "0vh", z = "0vh") {
  document.getElementById("card-1").style.fontSize = x;
  document.getElementById("card-2").style.fontSize = y;
  document.getElementById("card-3").style.fontSize = z;
}
function changeBorder(
  x = "2px solid #e6e6e6",
  y = "2px solid #e6e6e6",
  z = "2px solid #e6e6e6"
) {
  document.getElementById("button-1").style.border = x;
  document.getElementById("button-2").style.border = y;
  document.getElementById("button-3").style.border = z;
}
//

function openTextBlock_1() {
  if (isActive_1) {
    changeContent();
    changeBorder();

    isActive_1 = false;
  } else {
    changeContent("1.661vh");
    changeBorder("2px solid black");

    isActive_1 = true;
    isActive_2 = false;
    isActive_3 = false;
  }
}

function openTextBlock_2() {
  if (isActive_2) {
    changeContent();
    changeBorder();

    isActive_2 = false;
  } else {
    changeContent("0vh", "1.661vh");
    changeBorder("2px solid #e6e6e6", "2px solid black");

    isActive_2 = true;
    isActive_1 = false;
    isActive_3 = false;
  }
}

function openTextBlock_3() {
  if (isActive_3) {
    changeContent();
    changeBorder();

    isActive_3 = false;
  } else {
    changeContent("0vh", "0vh", "1.661vh");
    changeBorder("2px solid #e6e6e6", "2px solid #e6e6e6", "2px solid black");

    isActive_3 = true;
    isActive_1 = false;
    isActive_2 = false;
  }
}
