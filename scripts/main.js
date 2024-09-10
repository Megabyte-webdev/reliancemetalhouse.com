let user_obj = {},
  subscription = {};
window.addEventListener("load", () => {
  document.querySelector("body") || document.body;
  const e = document.getElementById("form"),
    t = document.getElementById("loader"),
    s = document.getElementById("send"),
    i = document.getElementById("name"),
    a = document.getElementById("mobile"),
    n = document.getElementById("msg"),
    o = document.getElementById("email"),
    l = document.getElementById("subscribe-email"),
    r = document.getElementById("subscribe-btn"),
    c = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  function u(e, t, s) {
    const i = e.parentElement.querySelector(".notice");
    if (i)
      (i.innerHTML = t),
        s ? i.classList.add(s) : i.classList.remove("confirmed");
    else {
      let i = `<small class="notice${
        void 0 !== s || null !== s ? ` ${s}` : ""
      }">${t}</small>`;
      e.insertAdjacentHTML("afterend", `${i}`);
    }
  }
  (i.oninput = function () {
    this.value.length < 3 || this.value.length > 20
      ? u(i, "First Name must be between 3 and 20 characters")
      : (u(this, "Good!", "confirmed"), (user_obj.name = this.value));
  }),
    (n.oninput = function () {
      this.value.trim().split(/\s+/).length >= 3
        ? (u(this, "Good!", "confirmed"), (user_obj.message = this.value))
        : u(n, "Message must be atleast 3 words");
    }),
    (o.oninput = (e) => {
      c.test(e.target.value)
        ? (u(e.target, "good!", "confirmed"), (user_obj.email = o.value))
        : u(e.target, "Enter a valid email");
    }),
    (l.oninput = (e) => {
      c.test(e.target.value)
        ? (u(r, "good!", "confirmed"), (subscription.email = e.target.value))
        : u(r, "Enter a valid email");
    }),
    (a.oninput = function () {
      (this.value = this.value
        .replace(/[^\+0-9]/g, "")
        .replace(/\+(?=.*\+)/g, "")),
        0 === this.value.length
          ? u(this, "", "")
          : "+" !== this.value[0]
          ? u(this, "+ sign must be at the start")
          : this.value.match(/^[\+][^0-9]/)
          ? u(this, "Only numbers allowed after + sign")
          : this.value.startsWith("+234") && this.value.length < 14
          ? u(
              this,
              "Nigerian number should be 14 characters, e.g +2348012345678"
            )
          : this.value.length < 11
          ? u(this, "Number should be at least 11 characters")
          : this.value.length > 14
          ? u(this, "Number cannot exceed 14 characters")
          : (u(this, "Good!", "confirmed"),
            (user_obj.mobile = this.value.trim()));
    }),
    s.addEventListener("click", async function (l) {
      if ((l.preventDefault(), i.value && o.value && a.value && n.value))
        if (
          user_obj.name &&
          user_obj.email &&
          user_obj.mobile &&
          user_obj.message
        ) {
          t.classList.add("active"), u(this, "Sending message...", "confirmed");
          const e = {
            method: "POST",
            body: JSON.stringify(user_obj),
            headers: { "Content-Type": "application/json" },
            redirect: "follow",
          };
          try {
            const i = await fetch(
              "https://rmhapi.onrender.com/api/contact/",
              e
            );
            if (!i.ok)
              throw new Error(
                `Network response was not ok: ${i.status} - ${await i.text()}`
              );
            const a = await i.json();
            t.classList.remove("active"),
              u(this, `${a.message}, We'll be in touch soon.`, "confirmed"),
              setTimeout(function () {
                u(s, "Check your mail now!", "confirmed");
              }, 2e3);
          } catch (e) {
            t.classList.remove("active"),
              alert("Error sending message: " + e.message);
          }
        } else {
          u(s, "Please ensure all fields are valid");
          const t = e.querySelector("[required]:invalid");
          t && t.focus();
        }
      else {
        u(s, "Please fill in all fields");
        const t = e.querySelector("[required]:invalid");
        t && (t.focus(), u(t, "This field is required"));
      }
    }),
    r.addEventListener("click", async (e) => {
      if ((e.preventDefault(), l.value))
        if (subscription.email) {
          (t.querySelector(".loader-display").innerText =
            "Please hold on a moment..."),
            t.classList.add("active");
          try {
            const e = await fetch("https://rmhapi.onrender.com/api/subscribe/"),
              s = await e.json();
            if (s.some((e) => e.email === subscription.email))
              u(
                r,
                "Already a subscriber! We'll keep you updated.",
                "confirmed"
              );
            else {
              u(r, "Please hold on...");
              const e = await fetch(
                "https://rmhapi.onrender.com/api/subscribe/",
                {
                  method: "POST",
                  body: JSON.stringify(subscription),
                  headers: { "Content-Type": "application/json" },
                  redirect: "follow",
                }
              );
              if (!e.ok) throw new Error("Network response was not ok");
              await e.json();
              t.classList.remove("active"), u(r, "Subscription successful!");
            }
          } catch (e) {
            u(r, "Error subscribing. Please try again.", "error");
          } finally {
            t.classList.remove("active");
          }
        } else u(r, "Please fill in a valid email");
      else u(r, "Please fill in the email field"), l.focus();
    });
  const d = document.querySelectorAll(".nav a");
  !(function () {
    let e = window.location.href;
    for (let t = 0; t < d.length; t++) {
      d[t].classList.remove("active");
      let s = d[t].href;
      if (-1 !== e.indexOf(s)) d[t].classList.add("active");
      else if (
        (!e.match(".html") && e.match("reliancemetalhouse")) ||
        e.match("/")
      ) {
        d[0].classList.add("active");
        console.log(window.location.href);
        break;
      }
    }
  })(),
    d.forEach((e) => {
      e.onclick = function () {
        d.forEach((e) => e.classList.remove("active")),
          this.classList.add("active");
      };
    }),
    document.querySelectorAll("a:not(.nav a)").forEach((e) => {
      document.querySelector(".menu-toggle"), document.querySelector(".nav");
      e.onclick = function (e) {
        if (this.closest(".learn-content")) {
          let e = `I'm interested in getting a ${
            this.parentElement.querySelector("h3").innerText
          } installed and I'd like to request your expertise.`;
          (n.value = e), (user_obj.message = n.value);
        }
        window.location.href = this.href;
      };
    });
});
