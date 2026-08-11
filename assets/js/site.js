/* ScanCal — minimales Skript.
   Kein Framework, keine Tracker, keine externen Anfragen.
   Die Seite ist ohne JavaScript vollständig lesbar und bedienbar; dieses
   Skript fügt nur das mobile Menü und ein dezentes Einblenden hinzu. */
(function () {
  "use strict";

  /* --- Mobiles Menü ------------------------------------------------------ */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("hauptnavigation");

  if (toggle && nav) {
    var mobile = window.matchMedia("(max-width: 820px)");

    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.hidden = !open;
    };

    // Ausgangszustand: auf schmalen Anzeigen geschlossen, sonst immer sichtbar.
    var sync = function () {
      if (mobile.matches) {
        setOpen(false);
      } else {
        toggle.setAttribute("aria-expanded", "false");
        nav.hidden = false;
      }
    };
    sync();
    mobile.addEventListener("change", sync);

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Escape schließt und gibt den Fokus zurück — Tastaturbedienung.
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a") && mobile.matches) setOpen(false);
    });
  }

  /* --- Dezentes Einblenden ----------------------------------------------- */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  var targets = document.querySelectorAll(".reveal");

  if (reduced.matches || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  targets.forEach(function (el) { observer.observe(el); });
})();
