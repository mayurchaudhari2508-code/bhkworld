/* =====================================================================
   BHK WORLD — PAGE BUILDER & SCROLL ANIMATIONS
   You normally don't need to edit this file. Edit content.js instead.
   ===================================================================== */
(() => {
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const get = (path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), S);
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- ICONS (simple line icons) ---------- */
  const P = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const ICONS = {
    chat: P('<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M8.5 11h.01M12 11h.01M15.5 11h.01"/>'),
    search: P('<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>'),
    car: P('<path d="M5 16V11l2-5h10l2 5v5"/><path d="M3 16h18v2H3z"/><circle cx="7.5" cy="13.5" r=".8"/><circle cx="16.5" cy="13.5" r=".8"/><path d="M5 11h14"/>'),
    handshake: P('<path d="m11 17 2 2a1.4 1.4 0 0 0 2-2"/><path d="m14 14 2.5 2.5a1.4 1.4 0 0 0 2-2L15 11"/><path d="M2 12 6 8l4 1 3-3 7 6-2 2"/><path d="m6 8-4 4 6 6 2-2"/><path d="m9 15 1.5 1.5"/>'),
    file: P('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>'),
    key: P('<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M17 6l3 3M15 8l2 2"/>'),
    home: P('<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>'),
    building: P('<path d="M4 21V6l8-3v18M12 21V9l8 3v9M2 21h20"/><path d="M7 9h2M7 13h2M7 17h2M15 14h2M15 18h2"/>'),
    rupee: P('<path d="M6 4h12M6 9h12M9 4c6 0 6 10 0 10H6l8 7"/>'),
    shield: P('<path d="M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>'),
    chart: P('<path d="M3 21h18"/><path d="m4 16 5-5 4 3 7-8"/><path d="M15 6h5v5"/>'),
    spark: P('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>'),
    lock: P('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><path d="M12 15v2"/>'),
    palm: P('<path d="M12 21v-9"/><path d="M12 12C10 7 6 6 3 8c3 0 6 1 9 4z"/><path d="M12 12c2-5 6-6 9-4-3 0-6 1-9 4z"/><path d="M12 12c-1-4 0-7 3-9-1 3-1 6-3 9z"/><path d="M5 21h14"/>'),
    pin: P('<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
    check: P('<path d="m5 12.5 4.5 4.5L19 7"/>'),
    arrow: P('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    phone: P('<path d="M21 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.1 4.2 2 2 0 0 1 3.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L7.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>'),
    mail: P('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
    youtube: P('<rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor"/>'),
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.9l10.4-6.5a1 1 0 0 0 0-1.8L9.5 4.6A1 1 0 0 0 8 5.5z"/></svg>',
    instagram: P('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'),
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.3A11.8 11.8 0 0 0 1.7 17.8L0 24l6.3-1.7A11.8 11.8 0 0 0 24 12a11.7 11.7 0 0 0-3.6-8.5z"/></svg>',
  };
  const icon = (n) => ICONS[n] || ICONS.spark;

  /* ---------- THEME (content.js -> theme, or ?theme= in the address for previews) ---------- */
  const themeParam = new URLSearchParams(location.search).get("theme");
  document.documentElement.dataset.theme = themeParam || S.theme || "emerald";

  /* ---------- FILL SIMPLE TEXT (*word* becomes gold) ---------- */
  const rich = (t) => esc(t).replace(/\*([^*]+)\*/g, '<em class="gold-text">$1</em>');
  $$("[data-bind]").forEach((el) => (el.innerHTML = rich(get(el.dataset.bind) ?? "")));
  $$("[data-icon]").forEach((el) => (el.innerHTML = icon(el.dataset.icon)));
  $("#year").textContent = new Date().getFullYear();

  const waLink = `https://wa.me/${S.contact.whatsapp}?text=${encodeURIComponent(S.contact.whatsappMessage)}`;
  $$("[data-wa]").forEach((a) => { a.href = waLink; a.target = "_blank"; a.rel = "noopener"; });

  /* ---------- HERO TITLE ---------- */
  $("#heroTitle").innerHTML = S.hero.titleLines
    .map((l, i) => `<span class="line"><span class="${[].concat(S.hero.highlightLines ?? S.hero.highlightLine).includes(i) ? "gold" : ""}" style="transition-delay:${0.25 + i * 0.12}s">${esc(l)}</span></span>`)
    .join("");

  /* ---------- MARQUEE (duplicated for seamless loop) ---------- */
  const mq = S.marquee.map((t) => `<span>${esc(t)}</span>`).join("");
  $("#marquee").innerHTML = mq + mq;

  /* ---------- ABOUT STATEMENT (words light up while scrolling) ---------- */
  const brandWords = S.brand.name.toLowerCase().split(/\s+/);
  $("#statement").innerHTML = S.about.statement
    .split(/\s+/)
    .map((w) => `<span class="w${brandWords.includes(w.toLowerCase().replace(/[^\w]/g, "")) ? " hl" : ""}">${esc(w)}</span>`)
    .join(" ");

  /* ---------- STATS ---------- */
  $("#stats").innerHTML = S.stats
    .map((s, i) => `<div class="stat reveal" style="--delay:${i * 0.1}s">
        <div class="stat-num">${s.prefix ? `<em>${esc(s.prefix)}</em>` : ""}<span data-count="${Number(s.value) || 0}">0</span>${s.suffix ? `<em>${esc(s.suffix)}</em>` : ""}</div>
        <div class="stat-label">${esc(s.label)}</div></div>`)
    .join("");

  /* ---------- FOUNDER ---------- */
  const F = S.founder;
  if (F) {
    if (F.photo) $("#founderPhoto .founder-frame").innerHTML = `<img src="${esc(F.photo)}" alt="${esc(F.name)}" loading="lazy" data-pspeed="0.1" />`;
    else $("#founderPhoto").remove();
    $("#founderList").innerHTML = (F.highlights || [])
      .map((h, i) => `<li class="reveal" style="--delay:${i * 0.08}s"><span class="why-check">${ICONS.check}</span><span>${esc(h)}</span></li>`)
      .join("");
  } else $("#founder").remove();

  /* ---------- PROCESS ---------- */
  const steps = S.process.steps;
  const pad = (n) => String(n).padStart(2, "0");
  $("#pcTotal").textContent = pad(steps.length);
  $("#timeline").innerHTML = steps
    .map((s, i) => `<li class="step reveal" data-reveal="right">
        <div class="step-dot">${icon(s.icon)}</div>
        <div class="step-card">
          <div class="step-meta"><span class="step-no">STEP ${pad(i + 1)}</span>${s.time ? `<span class="step-time">${esc(s.time)}</span>` : ""}</div>
          <h3>${esc(s.title)}</h3><p>${esc(s.text)}</p>
        </div></li>`)
    .join("");

  /* ---------- SERVICES ---------- */
  $("#services-list").innerHTML = S.services.items
    .map((s, i) => `<article class="card reveal" style="--delay:${(i % 3) * 0.1}s">
        <div class="card-icon">${icon(s.icon)}</div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></article>`)
    .join("");

  /* ---------- WHY ---------- */
  $("#why-list").innerHTML = S.why.items
    .map((s, i) => `<li class="reveal" style="--delay:${i * 0.08}s"><span class="why-check">${ICONS.check}</span>
        <div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div></li>`)
    .join("");

  /* ---------- VIDEOS & REELS (YouTube + Instagram) ---------- */
  const M = S.media || {}, C0 = S.contact;
  const ytId = (u) => (String(u).match(/(?:youtu\.be\/|[?&]v=|\/(?:shorts|embed|live)\/)([\w-]{11})/) || [])[1];
  const igPath = (u) => (String(u).match(/instagram\.com\/(?:[\w.]+\/)?(p|reel|reels|tv)\/([\w-]+)/) || []);
  const asItem = (v) => (typeof v === "string" ? { url: v } : v || {});
  const vids = (M.videos || []).map(asItem).map((v) => ({ ...v, id: ytId(v.url), short: /\/shorts\//.test(v.url) })).filter((v) => v.id);
  const reels = (M.reels || []).map(asItem).map((r) => { const m = igPath(r.url); return m[2] && { ...r, href: `https://www.instagram.com/${m[1] === "reels" ? "reel" : m[1]}/${m[2]}/` }; }).filter(Boolean);
  const follow = [
    C0.youtube && { i: "youtube", t: "Subscribe on YouTube", href: C0.youtube },
    C0.instagram && { i: "instagram", t: "Follow on Instagram", href: C0.instagram },
  ].filter(Boolean);

  if (vids.length || reels.length || follow.length) {
    $("#media").hidden = false;
    $("#navMedia").hidden = !(vids.length || reels.length);
    $("#mediaFollow").innerHTML = follow
      .map((f, i) => `<a class="btn ${i ? "btn-ghost" : "btn-gold"} magnetic" href="${esc(f.href)}" target="_blank" rel="noopener"><i>${icon(f.i)}</i><span>${f.t}</span></a>`)
      .join("");

    // YouTube: a light thumbnail first, the real player loads only when tapped (keeps the page fast)
    const ytCard = (v, i) => `<figure class="yt${v.short ? " short" : ""} reveal" style="--delay:${(i % 3) * 0.1}s">
        <div class="yt-frame"><button class="yt-btn" data-yt="${v.id}" aria-label="Play ${esc(v.title || "video")}">
          <img src="https://i.ytimg.com/vi/${v.id}/${v.short ? "oar2" : "maxresdefault"}.jpg" alt="" loading="lazy" decoding="async"
            onload="if(this.naturalWidth<200)this.onerror()" onerror="this.onerror=this.onload=null;this.src='https://i.ytimg.com/vi/${v.id}/hqdefault.jpg'" />
          <span class="yt-play">${ICONS.play}</span>
        </button></div>
        <figcaption>${v.title ? `<span>${esc(v.title)}</span>` : ""}
          <a class="ig-open" href="${esc(v.url)}" target="_blank" rel="noopener">${ICONS.youtube}<span>Watch on YouTube</span></a></figcaption></figure>`;
    const wide = vids.filter((v) => !v.short), shorts = vids.filter((v) => v.short);
    $("#ytGrid").innerHTML = wide.map(ytCard).join("");
    $("#ytGrid").classList.toggle("feature", wide.length % 2 === 1 && wide.length > 1);

    // a small label + "see all" link above each swipe row
    const rowHead = (label, href, linkText, ic) =>
      `<div class="row-head reveal"><h3>${label}</h3>${href ? `<a class="ig-open" href="${esc(href)}" target="_blank" rel="noopener">${icon(ic)}<span>${linkText}</span></a>` : ""}</div>`;
    $("#shortsHead").innerHTML = shorts.length ? rowHead("YouTube Shorts", C0.youtube, "See all on YouTube", "youtube") : "";
    $("#reelsHead").innerHTML = reels.length ? rowHead("Instagram Reels", C0.instagram, "See all on Instagram", "instagram") : "";
    $("#shortsRow").innerHTML = shorts.map(ytCard).join("");

    $$("#ytGrid, #shortsRow").forEach((g) => g.addEventListener("click", (e) => {
      const b = e.target.closest("[data-yt]");
      if (!b) return;
      b.outerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${b.dataset.yt}?autoplay=1&rel=0&modestbranding=1&playsinline=1" title="YouTube video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
    }));

    // Instagram reels/posts (official Instagram embed)
    $("#reelRow").innerHTML =
      reels.map((r, i) => `<div class="ig${/\/reel\//.test(r.href) ? " is-reel" : ""} reveal" style="--delay:${(i % 3) * 0.1}s">
          <iframe src="${esc(r.href)}embed/" title="Instagram post" loading="lazy" allowtransparency="true" allow="encrypted-media; fullscreen"></iframe>
          <a class="ig-open" href="${esc(r.href)}" target="_blank" rel="noopener">${ICONS.instagram}<span>Open on Instagram</span></a></div>`).join("");
  }

  /* ---------- FOOTER SOCIAL ICONS ---------- */
  $("#footerSocial").innerHTML = [
    C0.instagram && ["instagram", "Instagram", C0.instagram],
    C0.youtube && ["youtube", "YouTube", C0.youtube],
    C0.whatsapp && ["whatsapp", "WhatsApp", waLink],
  ].filter(Boolean).map(([i, t, h]) => `<a href="${esc(h)}" target="_blank" rel="noopener" aria-label="${t}">${icon(i)}</a>`).join("");

  /* ---------- FAQ ---------- */
  $("#faq-list").innerHTML = S.faq.items
    .map((f, i) => `<div class="faq-item reveal" style="--delay:${i * 0.06}s">
        <button class="faq-q" aria-expanded="false">${esc(f.q)}<span class="faq-plus"></span></button>
        <div class="faq-a"><div><p>${esc(f.a)}</p></div></div></div>`)
    .join("");
  $$(".faq-q").forEach((b) =>
    b.addEventListener("click", () => {
      const item = b.parentElement, open = !item.classList.contains("open");
      $$(".faq-item.open").forEach((x) => { x.classList.remove("open"); $(".faq-q", x).setAttribute("aria-expanded", "false"); });
      if (open) { item.classList.add("open"); b.setAttribute("aria-expanded", "true"); }
    })
  );

  /* ---------- CONTACT CARDS ---------- */
  const C = S.contact;
  const contacts = [
    { i: "whatsapp", k: "WhatsApp", v: C.whatsapp && "Instant connect", href: waLink, ext: true },
    { i: "phone", k: "Call", v: C.phone, href: `tel:${C.phoneLink}` },
    { i: "phone", k: "Call", v: C.phone2, href: `tel:${C.phone2Link}` },
    { i: "mail", k: "Email", v: C.email, href: `mailto:${C.email}` },
    { i: "instagram", k: "Instagram", v: C.instagram && (C.instagramHandle || "Follow us"), href: C.instagram, ext: true },
    { i: "youtube", k: "YouTube", v: C.youtube && (C.youtubeHandle || "Watch our videos"), href: C.youtube, ext: true },
    { i: "pin", k: "Visit our office", v: C.address, href: C.mapLink, ext: true, wide: true },
  ].filter((c) => c.v);
  $("#contact-grid").innerHTML = contacts
    .map((c) => `<a class="contact${c.wide ? " wide" : ""}" href="${esc(c.href)}"${c.ext ? ' target="_blank" rel="noopener"' : ""}><i>${icon(c.i)}</i><span><small>${c.k}</small><strong>${esc(c.v)}</strong></span></a>`)
    .join("");

  /* ---------- PROCEDURAL SKYLINE (crisp at any resolution) ---------- */
  (function skyline() {
    let seed = 7;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    const W = 1600, H = 600;
    const layers = [
      { speed: 0.08, count: 22, min: 150, max: 330, fill: "--sky-1", win: 0.25 },
      { speed: 0.18, count: 16, min: 200, max: 440, fill: "--sky-2", win: 0.45 },
      { speed: 0.32, count: 11, min: 240, max: 540, fill: "--sky-3", win: 0.7 },
    ];
    const host = $("#skyline");
    const css = getComputedStyle(document.documentElement);
    layers.forEach((L) => (L.fill = css.getPropertyValue(L.fill).trim() || "#0c2a20"));
    layers.forEach((L) => {
      let x = -20, out = "";
      const avg = W / L.count;
      while (x < W + 20) {
        const w = avg * (0.55 + rnd() * 0.7);
        const h = L.min + rnd() * (L.max - L.min);
        const y = H - h;
        out += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${h}" fill="${L.fill}"/>`;
        // rooftop details
        if (rnd() > 0.55) out += `<rect x="${(x + w * 0.4).toFixed(1)}" y="${(y - 18).toFixed(1)}" width="${(w * 0.2).toFixed(1)}" height="18" fill="${L.fill}"/>`;
        if (rnd() > 0.75) out += `<rect x="${(x + w * 0.5 - 1).toFixed(1)}" y="${(y - 46).toFixed(1)}" width="2" height="30" fill="${L.fill}"/>`;
        // windows
        const cols = Math.max(2, Math.floor(w / 16)), rows = Math.floor(h / 22);
        const gx = w / cols;
        for (let r = 1; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            if (rnd() > L.win * 0.55) continue;
            const o = (0.35 + rnd() * 0.65) * L.win;
            const tw = rnd() > 0.86 ? ` class="win" style="--o:${o.toFixed(2)};--d:${(4 + rnd() * 6).toFixed(1)}s;--delay:${(rnd() * 6).toFixed(1)}s"` : "";
            out += `<rect${tw} x="${(x + c * gx + gx * 0.3).toFixed(1)}" y="${(y + r * 22).toFixed(1)}" width="${(gx * 0.4).toFixed(1)}" height="9" rx="1" fill="#f5ebc0" opacity="${o.toFixed(2)}"/>`;
          }
        }
        x += w + 2 + rnd() * 10;
      }
      host.insertAdjacentHTML("beforeend", `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax slice" data-speed="${L.speed}">${out}</svg>`);
    });
  })();

  /* =====================================================================
     ANIMATIONS
     ===================================================================== */
  setTimeout(() => document.body.classList.add("loaded"), 60);

  // Reveal elements as they enter the screen
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  $$(".reveal").forEach((el) => io.observe(el));

  // Count-up numbers
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target, end = +el.dataset.count, t0 = performance.now(), dur = 1800;
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / dur), eased = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(end * eased).toLocaleString("en-IN");
        if (p < 1) requestAnimationFrame(tick);
      };
      reduced ? (el.textContent = end.toLocaleString("en-IN")) : requestAnimationFrame(tick);
      countIO.unobserve(el);
    });
  }, { threshold: 0.6 });
  $$("[data-count]").forEach((el) => countIO.observe(el));

  // Scroll-driven effects
  const header = $("#header"), bar = $(".scroll-progress span"), wa = $(".wa-float");
  const parallax = $$("[data-speed]");
  const pimgs = $$("[data-pspeed]");
  const words = $$("#statement .w"), statement = $("#statement");
  const wrap = $("#timelineWrap"), fill = $("#timelineFill"), stepEls = $$(".step"), pcNow = $("#pcNow");
  let lastY = 0, ticking = false;

  function onScroll() {
    const y = scrollY, vh = innerHeight;
    const max = document.documentElement.scrollHeight - vh;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;

    header.classList.toggle("scrolled", y > 30);
    header.classList.toggle("hidden", y > lastY && y > vh * 0.8);
    wa.classList.toggle("show", y > vh * 0.5);
    lastY = y;

    if (!reduced) {
      parallax.forEach((el) => {
        if (el.closest(".hero") && y > vh * 1.2) return;
        el.style.transform = `translate3d(0, ${(y * +el.dataset.speed).toFixed(1)}px, 0)`;
      });
    }

    // image parallax inside their frames
    if (!reduced) pimgs.forEach((img) => {
      const r = img.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const c = (r.top + r.height / 2 - vh / 2) / vh;
      img.style.transform = `translate3d(0, ${(c * -100 * (+img.dataset.pspeed || 0.1)).toFixed(1)}%, 0)`;
    });

    // statement words
    const r = statement.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
    const lit = Math.round(p * words.length);
    words.forEach((w, i) => w.classList.toggle("on", i < lit));

    // timeline
    const wr = wrap.getBoundingClientRect();
    const tp = Math.min(1, Math.max(0, (vh * 0.55 - wr.top) / wr.height));
    fill.style.transform = `scaleY(${tp})`;
    let current = 0;
    stepEls.forEach((s, i) => {
      const on = s.getBoundingClientRect().top < vh * 0.55;
      s.classList.toggle("active", on);
      if (on) current = i;
    });
    const label = pad(current + 1);
    if (pcNow.textContent !== label) pcNow.textContent = label;

    ticking = false;
  }
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener("resize", onScroll);
  onScroll();

  // Desktop-only hover polish
  if (matchMedia("(hover: hover) and (pointer: fine)").matches && !reduced) {
    $$(".magnetic").forEach((b) => {
      b.addEventListener("mousemove", (e) => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
      });
      b.addEventListener("mouseleave", () => (b.style.transform = ""));
    });
    $$(".card").forEach((c) => {
      c.addEventListener("mousemove", (e) => {
        const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        c.style.setProperty("--mx", `${x * 100}%`);
        c.style.setProperty("--my", `${y * 100}%`);
        c.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 8}deg) translateY(-4px)`;
      });
      c.addEventListener("mouseleave", () => (c.style.transform = ""));
    });
  }
})();
