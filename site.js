/* ============================================================
   site.js — vanilla interactions
   ============================================================ */
(function () {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 3D motif: idle rotation + pointer tracking ---------- */
  const cube = document.getElementById("cube");
  const glasses = document.getElementById("glasses");
  const motif = document.getElementById("motif");

  let curX = -18, curY = 18, tgtX = -18, tgtY = 18;
  let idleX = -18, idleY = 18;
  let hovering = false;
  const SMOOTH = 0.06;

  function frame() {
    const lively = root.dataset.motion === "lively";
    const speed = lively ? 0.55 : 0.28;
    if (!hovering) {
      idleX += speed * 0.7;
      idleY += speed;
      tgtX = idleX;
      tgtY = idleY;
    }
    curX += (tgtX - curX) * SMOOTH;
    curY += (tgtY - curY) * SMOOTH;
    const t = `rotateX(${curX}deg) rotateY(${curY}deg)`;
    if (cube) cube.style.transform = t;
    if (glasses) glasses.style.transform = `rotateY(${curY * 0.8}deg)`;
    requestAnimationFrame(frame);
  }
  if (!reduceMotion) frame();

  window.addEventListener("mousemove", (e) => {
    if (reduceMotion || root.dataset.motion === "calm-lock") return;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight * 0.42;
    const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
    const reach = root.dataset.motion === "lively" ? 620 : 480;
    if (dist < reach) {
      hovering = true;
      tgtX = -18 - (e.clientY - cy) * 0.16;
      tgtY = 18 + (e.clientX - cx) * 0.16;
    } else if (hovering) {
      hovering = false;
      idleX = curX;
      idleY = curY;
    }
  });

  /* ---------- fade motif out on scroll ---------- */
  function onScroll() {
    const y = window.scrollY;
    if (motif) {
      let o = 1 - y / 560;
      motif.style.opacity = Math.max(0, Math.min(1, o));
    }
    nav.classList.toggle("scrolled", y > 24);
  }
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ---------- smooth scroll for in-page links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 8;
      window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
    });
  });
})();
