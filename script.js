(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;
  root.classList.add("js");

  /* mobile menu */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  function setMenu(open) {
    links.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }
  toggle.addEventListener("click", function () { setMenu(!links.classList.contains("is-open")); });
  links.addEventListener("click", function (e) { if (e.target.tagName === "A") setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  /* active nav link */
  var anchors = Array.prototype.slice.call(links.querySelectorAll('a[href^="#"]'));
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        anchors.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    anchors.forEach(function (a) { var s = document.querySelector(a.getAttribute("href")); if (s) spy.observe(s); });
  }

  /* scroll progress */
  var bar = document.getElementById("progress");
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var max = root.scrollHeight - innerHeight;
      if (bar) bar.style.transform = "scaleX(" + (max > 0 ? scrollY / max : 0) + ")";
      ticking = false;
    });
  }
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* reveal on scroll */
  var targets = document.querySelectorAll(".head, .split > *, .card, .pairs div");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    targets.forEach(function (t) { t.classList.add("reveal"); io.observe(t); });
  }

  /* Adi tala: eight beats lighting up in turn */
  var tala = document.getElementById("tala");
  if (tala) {
    var bars = tala.querySelectorAll(".tala__bars span");
    var syl = tala.querySelectorAll(".tala__syl b");
    var beat = 0, paused = false;
    var show = function (n) {
      for (var i = 0; i < bars.length; i++) {
        bars[i].classList.toggle("is-on", i === n);
        syl[i].classList.toggle("is-on", i === n);
      }
    };
    show(0);
    if (!reduce) {
      tala.addEventListener("pointerenter", function () { paused = true; });
      tala.addEventListener("pointerleave", function () { paused = false; });
      setInterval(function () { if (paused) return; beat = (beat + 1) % bars.length; show(beat); }, 480);
    }
  }
})();
