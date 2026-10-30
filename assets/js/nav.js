(function () {
  var root = document.documentElement;
  var btn = document.querySelector(".nav-toggle");
  var menu = document.getElementById("site-menu");
  if (!btn || !menu) return;

  function setOpen(open) {
    menu.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.textContent = open ? "Close" : "Menu";
  }

  btn.hidden = false;
  setOpen(false);

  btn.addEventListener("click", function () {
    setOpen(btn.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setOpen(false);
  });

  menu.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false);
  });

  var desktop = window.matchMedia("(min-width: 960px)");
  function onChange() {
    if (desktop.matches) setOpen(false);
  }
  if (desktop.addEventListener) desktop.addEventListener("change", onChange);
  root.classList.add("nav-ready");
})();
