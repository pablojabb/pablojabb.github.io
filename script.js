function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var icon = document.getElementById("icontheme");
var text = document.getElementById("themetext");

icon.onclick  = function () {
  const logo = document.querySelector(".golo");
  logo.classList.toggle("light");
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    icon.src = "./assets/darkmode.svg";
  } else {
    icon.src = "./assets/lightmode.svg";
  }
};

text.onclick  = function () {
  const logos = document.querySelector(".golos");
  logos.classList.toggle("light");
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    icon.src = "./assets/darkmode.svg";
  } else {
    icon.src = "./assets/lightmode.svg";
  }
};
