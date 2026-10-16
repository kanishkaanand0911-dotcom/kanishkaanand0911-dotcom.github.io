(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  function setMenu(open) {
    links.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }
  toggle.addEventListener("click", function () {
    setMenu(!links.classList.contains("is-open"));
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  /* ---------- Active nav link ---------- */
  var navAnchors = Array.prototype.slice.call(links.querySelectorAll('a[href^="#"]'));
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navAnchors.forEach(function (a) {
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    navAnchors.forEach(function (a) {
      var s = document.querySelector(a.getAttribute("href"));
      if (s) io.observe(s);
    });
  }

  /* ---------- Terminal: one typed sequence on load ---------- */
  var body = document.getElementById("terminalBody");
  if (body && !reduce) {
    var lines = Array.prototype.slice.call(body.querySelectorAll(".t-line"));
    lines.forEach(function (l) { l.style.visibility = "hidden"; });
    var i = 0;
    (function next() {
      if (i >= lines.length) return;
      var line = lines[i++];
      line.style.visibility = "visible";
      var isCmd = !line.classList.contains("t-out");
      setTimeout(next, isCmd ? 520 : 340);
    })();
  }

  /* ---------- Report tabs ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('#dash [role="tab"]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
    });
  }
  tabs.forEach(function (t, idx) {
    t.addEventListener("click", function () { select(t); });
    t.addEventListener("keydown", function (e) {
      var n = null;
      if (e.key === "ArrowRight") n = tabs[(idx + 1) % tabs.length];
      if (e.key === "ArrowLeft") n = tabs[(idx - 1 + tabs.length) % tabs.length];
      if (n) { e.preventDefault(); select(n); n.focus(); }
    });
  });

  /* ---------- Crowd simulation (tiny Markov-style agent model) ---------- */
  var svg = document.getElementById("crowd");
  var W = 24, H = 14, C = 12;
  var NS = "http://www.w3.org/2000/svg";
  var counters = [{ x: 3, y: 4 }, { x: 3, y: 9 }];
  var entry = { x: 12, y: 13 }, exit = { x: 23, y: 7 };
  var stops = ["#1d1d1d", "#4361EE", "#B9A7F5", "#F3D6DA"];

  function rng(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function hex(h) { return [1, 3, 5].map(function (i) { return parseInt(h.substr(i, 2), 16); }); }
  function colour(v) {
    var p = v * (stops.length - 1), k = Math.min(Math.floor(p), stops.length - 2), f = p - k;
    var a = hex(stops[k]), b = hex(stops[k + 1]);
    return "rgb(" + a.map(function (c, i) { return Math.round(c + (b[i] - c) * f); }).join(",") + ")";
  }
  function step(pos, target, r) {
    var dx = Math.sign(target.x - pos.x), dy = Math.sign(target.y - pos.y);
    if (r() < 0.72) {
      if (dx && dy) { if (r() < 0.5) pos.x += dx; else pos.y += dy; }
      else { pos.x += dx; pos.y += dy; }
    } else {
      var d = [[1, 0], [-1, 0], [0, 1], [0, -1]][Math.floor(r() * 4)];
      pos.x = Math.min(W - 1, Math.max(0, pos.x + d[0]));
      pos.y = Math.min(H - 1, Math.max(0, pos.y + d[1]));
    }
  }
  function simulate(seed) {
    var r = rng(seed), visits = [], n, t;
    for (n = 0; n < W * H; n++) visits.push(0);
    for (n = 0; n < 160; n++) {
      var pos = { x: entry.x, y: entry.y };
      var c = counters[r() < 0.6 ? 0 : 1];
      var phase = 0, wait = 0, born = Math.floor(r() * 300);
      for (t = 0; t < 260; t++) {
        if (t < born) continue;
        if (phase === 0) { step(pos, c, r); if (pos.x === c.x && pos.y === c.y) { phase = 1; wait = 6 + Math.floor(r() * 18); } }
        else if (phase === 1) { wait--; if (wait <= 0) phase = 2; }
        else { step(pos, exit, r); if (pos.x === exit.x && pos.y === exit.y) break; }
        visits[pos.y * W + pos.x]++;
      }
    }
    return visits;
  }
  function draw(visits) {
    var max = Math.max.apply(null, visits) || 1;
    svg.textContent = "";
    for (var y = 0; y < H; y++) {
      for (var x = 0; x < W; x++) {
        var rect = document.createElementNS(NS, "rect");
        rect.setAttribute("x", x * C); rect.setAttribute("y", y * C);
        rect.setAttribute("width", C - 1); rect.setAttribute("height", C - 1);
        rect.setAttribute("rx", 1.5);
        rect.setAttribute("fill", colour(Math.sqrt(visits[y * W + x] / max)));
        svg.appendChild(rect);
      }
    }
  }
  if (svg) {
    draw(simulate(11));
    var btn = document.getElementById("rerun");
    if (btn) btn.addEventListener("click", function () { draw(simulate((Date.now() & 0xffff) + 1)); });
  }
})();
