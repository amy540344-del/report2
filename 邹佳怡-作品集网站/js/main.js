/* ============================================================
   作品集 · 交互逻辑
   ============================================================ */
(function () {
  "use strict";

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------------- 自我介绍 ---------------- */
  function renderIntro() {
    $("#introHeadline").innerHTML = SITE.headline;
    $("#introBody").innerHTML = SITE.intro.map((p) => "<p>" + p + "</p>").join("");
    $("#statsRow").innerHTML = SITE.stats
      .map((s) => '<div><dt>' + esc(s.label) + "</dt><dd>" + esc(s.v) + "</dd></div>")
      .join("");
    const t = $("#toolRow");
    if (t) t.innerHTML = SITE.tools.map((x) => "<li>" + esc(x) + "</li>").join("");
    const cl = $("#contactList");
    if (cl) {
      cl.innerHTML = SITE.contact.map((c) =>
        "<li><span>" + esc(c.label) + '</span><a href="' + esc(c.href) + '"' +
        (/^https?:/.test(c.href) || /\.pdf$/.test(c.href) ? ' target="_blank" rel="noopener"' : "") +
        ">" + esc(c.value) + "</a></li>"
      ).join("");
    }
    const y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------------- 板块按钮 ---------------- */
  const countItems = (cat) => cat.groups.reduce((n, g) => n + g.items.length, 0);

  function renderCats() {
    $("#catsGrid").innerHTML = CATEGORIES.map((c, i) =>
      '<button class="cat cat--' + esc(c.id) + '" type="button" data-cat="' + esc(c.id) + '" aria-selected="' + (i === 0) + '">' +
        '<span class="cat__top">' +
          '<em class="cat__idx">' + esc(c.index) + "</em>" +
          '<em class="cat__count">' + countItems(c) + " 件作品</em>" +
        "</span>" +
        '<span class="cat__main">' +
          '<span class="cat__title">' + esc(c.title) + "</span>" +
          '<span class="cat__en">' + esc(c.en) + "</span>" +
          '<span class="cat__brief">' + esc(c.brief) + "</span>" +
        "</span>" +
        '<span class="cat__arrow">进入板块 <i>→</i></span>' +
      "</button>"
    ).join("");
  }

  /* ---------------- 作品渲染 ---------------- */
  let current = null;
  let gallery = [];

  function tileHTML(item, imgIndex) {
    const style = "--span:" + (item.span || 6) + ";--ar:" + (item.ar || 1);
    const cap =
      '<figcaption class="tile__cap">' +
        '<em class="tile__idx">' + esc(item._no) + "</em>" +
        "<span>" +
          "<h4>" + esc(item.title) + "</h4>" +
          (item.meta ? "<p>" + esc(item.meta) + "</p>" : "") +
        "</span>" +
      "</figcaption>";

    if (item.type === "video") {
      return '<figure class="tile tile--video" style="' + style + '">' +
          '<div class="tile__media">' +
            '<video controls preload="metadata" playsinline poster="' + esc(item.poster || "") + '">' +
              '<source src="' + esc(item.src) + '" type="video/mp4" />' +
            "</video>" +
          "</div>" + cap +
        "</figure>";
    }
    return '<figure class="tile" style="' + style + '">' +
        '<button class="tile__media tile__media--btn" type="button" data-i="' + imgIndex + '" aria-label="查看大图：' + esc(item.title) + '">' +
          '<img src="' + esc(item.src) + '" alt="' + esc(item.title) + " " + esc(item.meta || "") + '" loading="lazy" decoding="async" />' +
          '<span class="tile__hint">查看大图</span>' +
        "</button>" + cap +
      "</figure>";
  }

  function renderWorks(cat, animate) {
    const body = $("#worksBody");

    const paint = function () {
      gallery = [];
      cat.groups.forEach((g) => g.items.forEach((it) => { if (it.type !== "video") gallery.push(it); }));

      let no = 0, imgIdx = 0;
      const html = cat.groups.map(function (g) {
        const items = g.items.map(function (it) {
          no += 1;
          it._no = (no < 10 ? "0" : "") + no;
          if (it.type === "video") return tileHTML(it, null);
          const idx = imgIdx; imgIdx += 1;
          return tileHTML(it, idx);
        }).join("");
        return '<section class="group">' +
            '<header class="group__head">' +
              '<h3 class="group__name">' + esc(g.name) + "</h3>" +
              (g.note ? '<p class="group__note">' + esc(g.note) + "</p>" : "") +
            "</header>" +
            (g.desc ? '<p class="group__desc">' + esc(g.desc) + "</p>" : "") +
            '<div class="grid">' + items + "</div>" +
          "</section>";
      }).join("");

      const note = cat.note
        ? '<aside class="note"><h4 class="note__title">' + esc(cat.note.title) + "</h4><p>" + esc(cat.note.body) + "</p></aside>"
        : "";

      $("#worksTitle").textContent = cat.title;
      $("#worksEn").textContent = cat.en;
      $("#worksDesc").textContent = cat.desc;
      body.innerHTML = html + note;
      observeReveals(body);
    };

    if (animate) {
      body.classList.add("is-switching");
      window.setTimeout(function () { paint(); body.classList.remove("is-switching"); }, 180);
    } else {
      paint();
    }
  }

  function scrollToWorks() {
    const top = $("#works").getBoundingClientRect().top + window.pageYOffset - 64;
    window.scrollTo({ top: top, behavior: "smooth" });
  }

  function setCategory(id, scroll) {
    const cat = CATEGORIES.filter((c) => c.id === id)[0];
    if (!cat) return;
    if (current && current.id === id) { if (scroll) scrollToWorks(); return; }
    current = cat;
    $$(".cat").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.cat === id)));
    $("#works").dataset.cat = id;
    renderWorks(cat, true);
    if (scroll) scrollToWorks();
  }

  /* ---------------- 灯箱 ---------------- */
  const modal = $("#modal");
  let mi = 0;

  function paintLightbox() {
    const it = gallery[mi];
    $("#modalBody").innerHTML =
      '<div class="detail__media"><img src="' + esc(it.src) + '" alt="' + esc(it.title) + '" /></div>' +
      '<div class="detail__head">' +
        '<p class="detail__cat">' + esc(current.title) + "</p>" +
        '<h3 class="detail__title" id="modalTitle">' + esc(it.title) + "</h3>" +
        '<div class="detail__meta">' +
          (it.meta ? "<span>" + esc(it.meta) + "</span>" : "") +
          "<span>" + (mi + 1) + " / " + gallery.length + "</span>" +
        "</div>" +
      "</div>";
    const many = gallery.length > 1;
    $$(".modal__nav").forEach((b) => { b.style.display = many ? "" : "none"; });
  }

  function openLightbox(i) {
    if (!gallery.length) return;
    mi = ((i % gallery.length) + gallery.length) % gallery.length;
    paintLightbox();
    modal.hidden = false;
    document.body.classList.add("is-locked");
  }

  function closeLightbox() {
    modal.hidden = true;
    document.body.classList.remove("is-locked");
    $("#modalBody").innerHTML = "";
  }

  function step(d) {
    if (gallery.length < 2) return;
    mi = (mi + d + gallery.length) % gallery.length;
    paintLightbox();
  }

  /* ---------------- 进场动画 ---------------- */
  let io = null;
  function observeReveals(scope) {
    const nodes = $$(".reveal:not(.is-in)", scope || document);
    if (!("IntersectionObserver" in window)) { nodes.forEach((el) => el.classList.add("is-in")); return; }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
        });
      }, { rootMargin: "0px 0px -6% 0px", threshold: 0.05 });
    }
    nodes.forEach((el) => io.observe(el));
  }

  /* ---------------- 事件 ---------------- */
  function bind() {
    $("#catsGrid").addEventListener("click", function (e) {
      const b = e.target.closest(".cat");
      if (b) setCategory(b.dataset.cat, true);
    });

    $("#worksBody").addEventListener("click", function (e) {
      const b = e.target.closest(".tile__media--btn");
      if (b) openLightbox(Number(b.dataset.i));
    });

    document.addEventListener("play", function (e) {
      if (e.target && e.target.tagName === "VIDEO") {
        $$("video").forEach((v) => { if (v !== e.target) v.pause(); });
      }
    }, true);

    modal.addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-close")) closeLightbox();
      if (e.target.closest(".modal__nav--prev")) step(-1);
      if (e.target.closest(".modal__nav--next")) step(1);
    });

    document.addEventListener("keydown", function (e) {
      if (modal.hidden) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });

    const bar = $("#progress");
    const bar2 = $("#progressBar");
    window.addEventListener("scroll", function () {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.pageYOffset / h : 0;
      (bar || bar2).style.transform = "scaleX(" + p + ")";
      $(".topbar").classList.toggle("is-scrolled", window.pageYOffset > 40);
    }, { passive: true });
  }

  /* ---------------- 启动 ---------------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderIntro();
    renderCats();
    current = CATEGORIES[0];
    $("#works").dataset.cat = current.id;
    renderWorks(current, false);
    bind();
    observeReveals(document);
  });
})();