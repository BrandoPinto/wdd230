document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("open");
    menuToggle.classList.toggle("open");
  });
});

document.querySelector("#copyrightyear").textContent =  new Date().getFullYear();


document.getElementById("modify").innerHTML = document.lastModified