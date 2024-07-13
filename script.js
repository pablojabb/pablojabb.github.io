function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var icon = document.getElementById("theme--btn");
var text = document.getElementById("themetext");

icon.onclick  = function () {
  const logo = document.querySelector(".golo");
  logo.classList.toggle("light");
  document.body.classList.toggle("light");


};

text.onclick  = function () {
  const logos = document.querySelector(".golos");
  logos.classList.toggle("light");
  document.body.classList.toggle("light");

};
