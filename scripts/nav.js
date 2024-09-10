"use strict";

function toggle() {
  let nav = document.querySelector(".nav");
  let icon = document.querySelector(".icon");
  let menu = document.querySelector(".menu-toggle");


  if (!(menu.className === "menu-toggle active" && nav.className.match("responsive"))) {
    menu.className = "menu-toggle active";
    nav.classList.add("responsive");
  } else {
    menu.className = "menu-toggle";
    nav.classList.remove("responsive");
  }

  // nav.onmouseleave = function () {
  //     menu.className = "menu-toggle";
  //     nav.classList.remove("responsive");    
  // }
}
window.addEventListener('load', ()=>{
  
  let scrll = window.scrollY || document.querySelector('body').scrollTop;

    if (scrll > 50) {

      document.querySelector('.nav').classList.add('sticky');

    } else {
      document.querySelector('.nav').classList.remove('sticky');
    }

  window.addEventListener("scroll", function () {
      let scrll = window.scrollY || document.querySelector('body').scrollTop;
    if (scrll > 50) {
      document.querySelector('.nav').classList.add('sticky');

    } else {
      document.querySelector('.nav').classList.remove('sticky');
    }
  });
})