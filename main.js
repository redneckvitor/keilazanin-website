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
