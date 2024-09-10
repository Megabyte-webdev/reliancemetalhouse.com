"use strict";
function toggle() {
  let e = document.querySelector(".nav"),
    o =
      (document.querySelector(".icon"), document.querySelector(".menu-toggle"));
  "menu-toggle active" === o.className && e.className.match("responsive")
    ? ((o.className = "menu-toggle"), e.classList.remove("responsive"))
    : ((o.className = "menu-toggle active"), e.classList.add("responsive"));
}
window.addEventListener("load", () => {
  (window.scrollY || document.querySelector("body").scrollTop) > 50
    ? document.querySelector(".nav").classList.add("sticky")
    : document.querySelector(".nav").classList.remove("sticky"),
    window.addEventListener("scroll", function () {
      (window.scrollY || document.querySelector("body").scrollTop) > 50
        ? document.querySelector(".nav").classList.add("sticky")
        : document.querySelector(".nav").classList.remove("sticky");
    });
});
