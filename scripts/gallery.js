window.addEventListener("load", () => {
  const e = document.querySelector(".gallery-content"),
    t = document.getElementById("video-modal"),
    d = document.querySelector(".modal .modal-content .display"),
    c = document.querySelector(".close");
  for (let t = 1; t < 5; t++) {
    let d = document.createElement("div");
    (d.className = "video-item"), d.setAttribute("data-src", `window${t}.jpg`);
    let c = document.createElement("img");
    (c.src = `./images/window${t}.jpg`), d.appendChild(c), e.appendChild(d);
  }
  for (let t = 1; t < 6; t++) {
    let d = document.createElement("div");
    (d.className = "video-item"), d.setAttribute("data-src", `door${t}.jpg`);
    let c = document.createElement("img");
    (c.src = `./images/door${t}.jpg`), d.appendChild(c), e.appendChild(d);
  }
  for (let t = 1; t <= 25; t++) {
    let d = document.createElement("div");
    (d.className = "video-item"), d.setAttribute("data-src", `img${t}.jpg`);
    let c = document.createElement("img");
    (c.src = `./images/img${t}.jpg`), d.appendChild(c), e.appendChild(d);
  }
  document.querySelectorAll(".video-item").forEach((e) => {
    e.addEventListener("click", () => {
      const c = e.getAttribute("data-src");
      let i;
      (d.innerHTML = ""),
        c.match("jpg")
          ? ((i = document.createElement("img")), (i.src = `./images/${c}`))
          : ((i = document.createElement("video")),
            (i.poster = `${e.querySelector("img").src}`),
            (i.autoplay = !0),
            (i.controls = !0),
            (i.src = `./videos/${c}`)),
        d.appendChild(i),
        t.classList.add("active");
    });
  }),
    c.addEventListener("click", () => {
      (d.innerHTML = ""), t.classList.remove("active");
    }),
    window.addEventListener("click", (e) => {
      e.target === t && ((d.innerHTML = ""), t.classList.remove("active"));
    });
});
