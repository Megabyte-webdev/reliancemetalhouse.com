window.addEventListener("load", () => {
  function e() {
    document.querySelectorAll(".animate").forEach(function (e) {
      var t;
      (((t = e.getBoundingClientRect()).top <= 0 && t.bottom >= 0) ||
        (t.bottom >=
          (window.innerHeight || document.documentElement.clientHeight) &&
          t.top <=
            (window.innerHeight || document.documentElement.clientHeight)) ||
        (t.top >= 0 &&
          t.bottom <=
            (window.innerHeight || document.documentElement.clientHeight))) &&
        e.classList.add("is-visible");
    });
    document.querySelectorAll(".is-in-view").forEach((e) => {
      !(function (e) {
        const t = e.getBoundingClientRect();
        return (
          t.top >= (e.closest(".hero-section") ? -200 : 0) &&
          t.left >= 0 &&
          t.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          t.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      })(e)
        ? e.classList.remove("is-visible")
        : e.classList.add("is-visible");
    });
  }
  (document.querySelector("body").onscroll = e), e();
});
