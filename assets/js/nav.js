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

(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    document.querySelectorAll("video[autoplay]").forEach(function (video) {
      video.removeAttribute("autoplay");
      video.pause();
    });
  }

  var clips = document.querySelectorAll("video[data-lazy]");
  if (!clips.length) return;

  function arm(video) {
    if (reduce) return;
    video.preload = "metadata";
    var play = video.play();
    if (play && play.catch) play.catch(function () {});
  }

  if (!("IntersectionObserver" in window)) {
    clips.forEach(arm);
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var video = entry.target;
      if (entry.isIntersecting) arm(video);
      else video.pause();
    });
  }, { rootMargin: "180px 0px" });

  clips.forEach(function (video) { io.observe(video); });
})();
