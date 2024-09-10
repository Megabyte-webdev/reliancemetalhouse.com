window.addEventListener("load", () => {
  const e = document.querySelector(".slide-images");
  var t = document.querySelector(".full-image");
  for (let t = 1; t <= 18; t++) {
    let n = document.createElement("img");
    (n.src = `./images/img${t}.jpg`),
      5 === t && (n.className = "active"),
      e.appendChild(n);
  }
  var n = document.querySelectorAll(".slide-images img");
  let c,
    l = 0;
  function i() {
    (n[l].className = ""),
      (l = (l + 1) % n.length),
      (t.style.backgroundImage = "url(" + n[l].src + ")"),
      (e.scrollLeft = n[0].offsetWidth * l),
      (n[l].className = "active");
  }
  function o(o) {
    clearInterval(c),
      (n[l].className = ""),
      (l = o % n.length),
      (t.style.backgroundImage = "url(" + n[l].src + ")"),
      (n[l].className = "active"),
      (e.scrollLeft = n[0].offsetWidth * l),
      (c = setInterval(i, 3e3));
  }
  (t.style.backgroundImage = "url(" + n[0].src + ")"),
    window.addEventListener("scroll", function () {
      (function (e) {
        const t = e.getBoundingClientRect();
        return (
          t.top >= 0 &&
          t.left >= 0 &&
          t.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          t.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      })(t) &&
        setTimeout(function () {
          o(l);
        }, 1e3);
    }),
    n.forEach((e, t) => {
      e.addEventListener("click", () => {
        o(t);
      });
    });
});
