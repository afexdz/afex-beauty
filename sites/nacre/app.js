/* Nacre — salon de coiffure et d'ongles de démonstration. Défilement : GSAP + ScrollTrigger + Lenis, servis en local. */
(function () {
  "use strict";
  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return [].slice.call((c || document).querySelectorAll(s)); };
  var S = { lang: "fr", cur: "DZD", cat: "coiffure", sel: {}, who: "any", day: "", slot: "" };
  var reduce = root.className.indexOf("static") > -1 || !window.gsap || !window.ScrollTrigger;
  if (reduce && root.className.indexOf("static") < 0) root.className += " static";
  var SV = {}; D.svc.forEach(function (s) { SV[s.id] = s; });
  var TM = {}; D.team.forEach(function (t) { TM[t.id] = t; });
  function T_() { return T[S.lang]; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function store(k, v) { try { localStorage.setItem("nacre-" + k, JSON.stringify(v)); } catch (e) {} }
  function load(k) { try { return JSON.parse(localStorage.getItem("nacre-" + k)); } catch (e) { return null; } }
  var ISO = function (s) { return "⁦" + s + "⁩"; };
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }

  /* ---------- argent, durées, dates ---------- */
  function num(n, l) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, (l || S.lang) === "en" ? "," : " "); }
  function money(v) {
    if (S.cur === "DZD") { var n = num(v); return S.lang === "ar" ? ISO(n) + " دج" : S.lang === "en" ? n + " DZD" : n + " DA"; }
    return new Intl.NumberFormat(S.lang === "en" ? "en-GB" : S.lang === "ar" ? "ar-DZ-u-nu-latn" : "fr-FR", { style: "currency", currency: S.cur, maximumFractionDigits: 0 }).format(v * D.rates[S.cur]);
  }
  function da(v) { return num(v, "fr") + " DA"; }
  function loc(l) { l = l || S.lang; return l === "ar" ? "ar-DZ-u-nu-latn" : l === "en" ? "en-GB" : "fr-FR"; }
  function dur(m, l) {
    l = l || S.lang; var h = Math.floor(m / 60), r = m % 60;
    if (l === "ar") return ISO((h ? h + " س " : "") + (r ? r + " د" : "")).trim();
    return (h ? h + " h" : "") + (r ? (h ? " " : "") + r + (h ? "" : " min") : "");
  }
  function days() {
    var a = [], d = new Date(); d.setHours(12, 0, 0, 0);
    for (var i = 1; a.length < 14; i++) { var x = new Date(d); x.setDate(d.getDate() + i); a.push(x); }
    return a;
  }
  function iso(d) { return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  function fromIso(s) { var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2], 12); }
  function fmtLong(d, l) { return new Intl.DateTimeFormat(loc(l), { weekday: "long", day: "numeric", month: "long" }).format(d); }
  function taken(dayIso, i) {
    var h = 0, s = dayIso + S.who; for (var k = 0; k < s.length; k++) h = (h * 31 + s.charCodeAt(k)) >>> 0;
    return ((h >> (i % 11)) + i * 5) % 6 === 0;
  }
  function chosen() { return Object.keys(S.sel).filter(function (k) { return S.sel[k]; }); }
  function totals() { var p = 0, m = 0; chosen().forEach(function (k) { p += SV[k].p; m += SV[k].m; }); return { p: p, m: m, n: chosen().length }; }

  /* ---------- textes ---------- */
  function applyText() {
    var t = T_();
    root.lang = S.lang; root.dir = t.dir; document.title = t.title;
    $$("[data-t]").forEach(function (e) { e.textContent = t[e.getAttribute("data-t")]; });
    $$("#nav a").forEach(function (a, i) { a.textContent = t.nav[i]; });
    $$(".sw button").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-l") === S.lang); });
    $("#hword").textContent = t.heroH; $("#hsub").textContent = t.heroSub; $("#hsc").textContent = t.scroll;
    $(".man h2").textContent = t.manH; $(".man p").textContent = t.manP;
    $(".facts").innerHTML = t.facts.map(function (f) { return "<div><b>" + esc(f[0]) + "</b><span>" + esc(f[1]) + "</span></div>"; }).join("");
    $("#carte h2").textContent = t.carteH; $("#carte .sh p").textContent = t.carteP;
    $("#salon h2").textContent = t.salonH;
    $$("#salon figcaption").forEach(function (f, i) { f.textContent = t.salonCap[i]; });
    $$("#salon img").forEach(function (im, i) { im.alt = t.salonCap[i]; });
    $("#equipe h2").textContent = t.teamH;
    $("#suivi h2").textContent = t.suiviH; $("#suivi .sh p").textContent = t.suiviP;
    $("#sc").placeholder = t.suiviIn; $("#sc").setAttribute("aria-label", t.suiviIn); $("#sf .btn").textContent = t.suiviBtn;
    $("#faq h2").textContent = t.faqH;
    $("#fl").innerHTML = t.faq.map(function (q) { return "<details><summary>" + esc(q[0]) + "</summary><p>" + esc(q[1]) + "</p></details>"; }).join("");
    $(".fg h2").textContent = t.footH; $("#fa").textContent = t.addr; $("#fh").textContent = t.hours;
    $("#bkh").textContent = t.bkH; $("#h1").textContent = t.bk1; $("#h2").textContent = t.bk2; $("#h3").textContent = t.bk3; $("#h4").textContent = t.bk4; $("#h5").textContent = t.bk5;
    $("#bn").placeholder = t.name; $("#bn").setAttribute("aria-label", t.name); $("#bp").placeholder = t.phone; $("#bp").setAttribute("aria-label", t.phone); $("#bo").placeholder = t.note; $("#bo").setAttribute("aria-label", t.note);
    $("#bsend").textContent = t.send; $(".sm small").textContent = t.sendNote; $(".sm h4").textContent = t.bkH; $(".sm .tt span").textContent = t.total;
    $("#ok h3").textContent = t.okH; $("#ok p").textContent = t.okP; $("#bwa").textContent = t.send; $("#btr").textContent = t.track; $("#bkx").setAttribute("aria-label", t.close);
    $("#hbtn").textContent = t.bookShort;
    waLink();
  }
  function waLink() {
    var f = $("#waf"); f.href = "https://wa.me/" + D.wa + "?text=" + encodeURIComponent(T.fr.waHead);
  }

  /* ---------- carte ---------- */
  function renderCarte() {
    var t = T_();
    if (!$("#cpic img")) $("#cpic").innerHTML = D.cats.map(function (c) { return '<img src="assets/img/' + c.img + '" alt="" loading="lazy" decoding="async" style="object-position:' + c.pos + '" data-c="' + c.id + '">'; }).join("");
    $$("#cpic img").forEach(function (im) { im.classList.toggle("on", im.getAttribute("data-c") === S.cat); });
    $("#tabs").innerHTML = D.cats.map(function (c) { return '<button type="button" role="tab" data-c="' + c.id + '" aria-selected="' + (c.id === S.cat) + '">' + esc(c.n[S.lang]) + "</button>"; }).join("");
    $("#list").innerHTML = D.svc.filter(function (s) { return s.c === S.cat; }).map(function (s) {
      var on = !!S.sel[s.id];
      return '<div class="row"><h3>' + esc(s.n[S.lang]) + '</h3><div class="pr"><small>' + dur(s.m) + "</small>" + money(s.p) + "</div><p>" + esc(s.d[S.lang]) + '</p><button type="button" class="ad" data-s="' + s.id + '" aria-pressed="' + on + '">' + (on ? t.added : t.add) + "</button></div>";
    }).join("");
    sbar();
  }
  function sbar() {
    var t = T_(), x = totals(), b = $("#sbar");
    b.classList.toggle("on", x.n > 0 && !$("#bk").open);
    document.body.classList.toggle("sb", x.n > 0 && !$("#bk").open);
    $("#sbar b").textContent = t.sel(x.n);
    $("#sbar span").textContent = money(x.p) + " · " + dur(x.m);
    $("#sgo").textContent = t.bookShort;
  }

  /* ---------- équipe ---------- */
  function renderTeam() {
    var t = T_();
    $(".tm").innerHTML = D.team.map(function (m) {
      var ini = S.lang === "ar" ? { lilia: "ل", amel: "أ", sofia: "س" }[m.id] : m.n[0];
      return '<div class="tc"><div class="in"><div class="mono" aria-hidden="true">' + ini + "</div><h3>" + (S.lang === "ar" ? { lilia: "ليليا", amel: "أمل", sofia: "صوفيا" }[m.id] : m.n) + '</h3><div class="r">' + esc(m.r[S.lang]) + "</div><p>" + esc(m.t[S.lang]) + '</p><button class="btn o" type="button" data-w="' + m.id + '">' + t.teamBtn + " " + (S.lang === "ar" ? { lilia: "ليليا", amel: "أمل", sofia: "صوفيا" }[m.id] : m.n) + "</button></div></div>";
    }).join("");
  }

  /* ---------- hero : le miroir ---------- */
  var heroI = -1;
  function heroCaption(i, force) {
    if (i === heroI && !force) return; heroI = i;
    var t = T_(), L = t.looks[i], b = $("#hcap b"), s = $("#hcap span");
    var set = function () { b.textContent = L.n; s.textContent = L.s; $("#hbtn").textContent = t.bookShort + " · " + t.from + " " + money(SV[L.svc].p); };
    $$("#hdots i").forEach(function (e, k) { e.classList.toggle("on", k === i); });
    if (reduce || force) { set(); return; }
    gsap.to("#hcap > *", { opacity: 0, y: 8, duration: 0.14, overwrite: true, onComplete: function () { set(); gsap.to("#hcap > *", { opacity: 1, y: 0, duration: 0.3, stagger: 0.04 }); } });
  }

  /* ---------- scènes ---------- */
  var ctx = null, lenis = null;
  function scenes() {
    if (reduce) return;
    if (ctx) ctx.revert();
    ctx = gsap.context(function () {
      var rtl = S.lang === "ar" ? -1 : 1, mob = innerWidth < 820;
      var looks = $$(".look");
      gsap.set(looks[1], { clipPath: "inset(100% 0 0 0)" }); gsap.set(looks[2], { clipPath: "inset(100% 0 0 0)" });
      gsap.set("#mir", { rotationY: -16 * rtl, rotationZ: -1.5 * rtl });
      var tl = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: "#hero", start: "top top", end: "+=" + (mob ? 240 : 300) + "%", pin: true, scrub: 0.7, anticipatePin: 1,
        onUpdate: function (st) { heroCaption(st.progress < 0.34 ? 0 : st.progress < 0.67 ? 1 : 2); } } });
      tl.to("#mir", { rotationY: 16 * rtl, rotationZ: 1.5 * rtl, y: -10, duration: 3 }, 0)
        .to(looks[1], { clipPath: "inset(0% 0 0 0)", duration: 0.7 }, 0.45)
        .to(looks[2], { clipPath: "inset(0% 0 0 0)", duration: 0.7 }, 1.55)
        .to(looks[1].firstChild, { scale: 1.12, duration: 3 }, 0)
        .fromTo("#hword", { xPercent: 6 * rtl }, { xPercent: -6 * rtl, duration: 3 }, 0)
        .to("#hdots", { opacity: 1, duration: 0.01 }, 0);
      gsap.from("#mir", { y: 70, rotationX: 14, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.1 });
      gsap.from("#hcap > *", { y: 20, opacity: 0, duration: 0.8, stagger: 0.08, ease: "power2.out", delay: 0.5 });
      /* le salon : défilement horizontal épinglé */
      var trk = $("#trk");
      var dist = function () { return Math.max(0, trk.scrollWidth - innerWidth); };
      gsap.to(trk, { x: function () { return -dist() * rtl; }, ease: "none", scrollTrigger: { trigger: "#salon", start: "top top", end: function () { return "+=" + dist(); }, pin: true, scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1 } });
    });
    ScrollTrigger.refresh();
  }
  function headerWatch() {
    var hd = $("#hd"), hh = 68;
    function run() {
      var dark = false;
      ["#salon", "#suivi", "footer"].forEach(function (s) { var r = $(s).getBoundingClientRect(); if (r.top < hh / 2 && r.bottom > hh / 2) dark = true; });
      var hr = $("#hero").getBoundingClientRect();
      var inHero = hr.top <= 1 && hr.bottom >= hh;
      hd.classList.toggle("dark", dark);
      hd.classList.toggle("solid", scrollY > 40 && !inHero && !(dark && $("#salon").getBoundingClientRect().top <= 1));
    }
    if (reduce) { addEventListener("scroll", run, { passive: true }); addEventListener("resize", run); } else { gsap.ticker.add(run); ScrollTrigger.addEventListener("refresh", run); } run();
  }

  /* ---------- réservation ---------- */
  function openBk(ids, who) {
    if (ids) { S.sel = {}; ids.forEach(function (i) { S.sel[i] = true; }); }
    if (who) S.who = who;
    if (!ids && !who && !chosen().length) { /* ouverture simple */ }
    $("#bkf").hidden = false; $("#ok").hidden = true;
    renderBk();
    if (!$("#bk").open) $("#bk").showModal();
    $("#er").textContent = "";
    sbar();
  }
  function renderBk() {
    var t = T_();
    var h = "";
    D.cats.forEach(function (c) {
      h += "<h5>" + esc(c.n[S.lang]) + "</h5>";
      D.svc.filter(function (s) { return s.c === c.id; }).forEach(function (s) {
        h += '<label class="ck"><input type="checkbox" value="' + s.id + '"' + (S.sel[s.id] ? " checked" : "") + "><span>" + esc(s.n[S.lang]) + "</span><em>" + dur(s.m) + " · " + money(s.p) + "</em></label>";
      });
    });
    $("#bs").innerHTML = h;
    var who = [["any", t.anyone]].concat(D.team.map(function (m) { return [m.id, S.lang === "ar" ? { lilia: "ليليا", amel: "أمل", sofia: "صوفيا" }[m.id] : m.n]; }));
    $("#bst").innerHTML = who.map(function (w) { return '<button type="button" data-who="' + w[0] + '" aria-pressed="' + (S.who === w[0]) + '">' + esc(w[1]) + "</button>"; }).join("");
    $("#bd").innerHTML = days().map(function (d) {
      var cl = D.closed.indexOf(d.getDay()) > -1, v = iso(d);
      return '<button type="button" data-d="' + v + '"' + (cl ? " disabled" : "") + ' aria-pressed="' + (S.day === v) + '">' + new Intl.DateTimeFormat(loc(), { weekday: "short" }).format(d) + "<b>" + d.getDate() + "</b>" + (cl ? t.closedD : new Intl.DateTimeFormat(loc(), { month: "short" }).format(d)) + "</button>";
    }).join("");
    renderSlots();
    if (!$("#bc").options.length) $("#bc").innerHTML = D.phones.map(function (p) { return '<option value="' + p[0] + '">' + p[0] + " " + p[1] + "</option>"; }).join("");
    renderSum();
  }
  function renderSlots() {
    $("#bt").innerHTML = D.slots.map(function (s, i) {
      var off = !S.day || taken(S.day, i);
      return '<button type="button" data-s="' + s + '"' + (off ? " disabled" : "") + ' aria-pressed="' + (S.slot === s) + '">' + ISO(s) + "</button>";
    }).join("");
  }
  function renderSum() {
    var x = totals(), t = T_();
    $("#bsum").innerHTML = chosen().map(function (k) { return "<li><span>" + esc(SV[k].n[S.lang]) + "</span><span>" + money(SV[k].p) + "</span></li>"; }).join("") + (x.n ? "<li><span>" + t.dur + "</span><span>" + dur(x.m) + "</span></li>" : "");
    $("#btot").textContent = money(x.p);
  }
  function finish() {
    var t = T_(), er = $("#er"), x = totals();
    var name = $("#bn").value.trim(), ph = $("#bp").value.replace(/[^\d]/g, "");
    if (!x.n) { er.textContent = t.needSvc; return; }
    if (!S.day || !S.slot) { er.textContent = t.needSlot; return; }
    if (!name || ph.length < 6) { er.textContent = t.needName; return; }
    er.textContent = "";
    var code = "NAC-" + (10000 + Math.floor(Math.random() * 89999));
    var f = T.fr, who = S.who === "any" ? f.waAny : TM[S.who].n;
    var msg = f.waHead + "\n" + f.waCode + " : " + code + "\n" +
      f.waSvc + " : " + chosen().map(function (k) { return SV[k].n.fr + " (" + da(SV[k].p) + ")"; }).join(" ; ") + "\n" +
      f.waWith + " : " + who + "\n" + f.waDate + " : " + fmtLong(fromIso(S.day), "fr") + ", " + S.slot + "\n" +
      f.waDur + " : " + dur(x.m, "fr") + "\n" + f.waTotal + " : " + da(x.p) + "\n" +
      f.waName + " : " + name + "\n" + f.waPhone + " : " + $("#bc").value + " " + ph.replace(/^0/, "") +
      ($("#bo").value.trim() ? "\n" + f.waNote + " : " + $("#bo").value.trim() : "");
    var o = load("orders") || []; o.unshift({ code: code, svc: chosen(), who: S.who, day: S.day, slot: S.slot, name: name, p: x.p, ts: Date.now() }); store("orders", o.slice(0, 10));
    $("#bcode").textContent = code;
    $("#bwa").href = "https://wa.me/" + D.wa + "?text=" + encodeURIComponent(msg);
    $("#bkf").hidden = true; $("#ok").hidden = false; $("#bk").scrollTop = 0;
    S.sel = {}; sbar(); renderCarte();
  }

  /* ---------- suivi ---------- */
  function track(v) {
    var t = T_(), c = String(v || "").toUpperCase().replace(/\s/g, "");
    if (/^\d{5}$/.test(c)) c = "NAC-" + c;
    var order = null, step = 0;
    if (c === "NAC-40218") { var d = new Date(); d.setDate(d.getDate() + 3); order = { code: c, svc: ["balayage", "gloss"], who: "lilia", day: iso(d), slot: "14:00" }; step = 3; }
    else { (load("orders") || []).forEach(function (o) { if (o.code === c) { order = o; step = 1; } }); }
    var box = $("#st");
    if (!order) { box.innerHTML = '<p class="stm">' + esc(t.suiviNo) + "</p>"; return; }
    var x = 0; order.svc.forEach(function (k) { x += SV[k].m; });
    box.innerHTML = '<div class="stm"><b>' + esc(order.code) + "</b>" + esc(order.svc.map(function (k) { return SV[k].n[S.lang]; }).join(", ")) + "<br>" + esc(fmtLong(fromIso(order.day)) + ", " + order.slot + " · " + (order.who === "any" ? t.anyone : S.lang === "ar" ? { lilia: "ليليا", amel: "أمل", sofia: "صوفيا" }[order.who] : TM[order.who].n)) + "</div>" +
      t.steps.map(function (s, i) { return '<div class="stp' + (i < step ? " ok" : "") + '"><i>' + (i < step ? "✓" : i + 1) + "</i><b>" + esc(s) + "</b></div>"; }).join("");
  }

  /* ---------- événements ---------- */
  document.addEventListener("click", function (e) {
    var b;
    if ((b = e.target.closest("[data-l]"))) { S.lang = b.getAttribute("data-l"); full(); return; }
    if ((b = e.target.closest("#tabs button"))) { S.cat = b.getAttribute("data-c"); renderCarte(); return; }
    if ((b = e.target.closest(".row .ad"))) { var id = b.getAttribute("data-s"); S.sel[id] = !S.sel[id]; renderCarte(); return; }
    if (e.target.closest("#hbook")) { openBk(); return; }
    if (e.target.closest("#hbtn")) { openBk([T_().looks[heroI < 0 ? 0 : heroI].svc]); return; }
    if (e.target.closest("#sgo")) { openBk(); return; }
    if ((b = e.target.closest("[data-w]"))) { openBk(null, b.getAttribute("data-w")); return; }
    if (e.target.closest("#bkx") || e.target === $("#bk")) { $("#bk").close(); return; }
    if ((b = e.target.closest("#bst [data-who]"))) { S.who = b.getAttribute("data-who"); if (S.slot && S.day && taken(S.day, D.slots.indexOf(S.slot))) S.slot = ""; renderBk(); return; }
    if ((b = e.target.closest("#bd [data-d]"))) { S.day = b.getAttribute("data-d"); S.slot = ""; renderBk(); return; }
    if ((b = e.target.closest("#bt [data-s]"))) { S.slot = b.getAttribute("data-s"); renderSlots(); return; }
    if (e.target.closest("#bsend")) { finish(); return; }
    if (e.target.closest("#btr")) { $("#bk").close(); $("#sc").value = $("#bcode").textContent; track($("#sc").value); setTimeout(function () { if (lenis) lenis.scrollTo($("#suivi"), { offset: -4, duration: 1 }); else $("#suivi").scrollIntoView(); }, 60); return; }
    if ((b = e.target.closest('a[href^="#"]'))) {
      var el = $(b.getAttribute("href")); if (el && el.id) { e.preventDefault(); if (lenis) lenis.scrollTo(el, { offset: el.id === "hero" ? 0 : -4 }); else el.scrollIntoView(); }
    }
  });
  document.addEventListener("change", function (e) {
    if (e.target.matches("#bs input")) { S.sel[e.target.value] = e.target.checked; renderSum(); }
    if (e.target.id === "cur") { S.cur = e.target.value; heroCaption(heroI < 0 ? 0 : heroI, true); renderCarte(); if ($("#bk").open) renderBk(); }
  });
  $("#sf").addEventListener("submit", function (e) { e.preventDefault(); track($("#sc").value); });
  $("#bk").addEventListener("close", function () { sbar(); if (lenis) lenis.start(); });
  $("#bk").addEventListener("cancel", function () { sbar(); });
  /* inclinaison 3D des cartes de l'équipe */
  document.addEventListener("pointermove", function (e) {
    if (reduce || e.pointerType === "touch") return;
    var c = e.target.closest && e.target.closest(".tc");
    $$(".tc .in").forEach(function (n) { if (!c || n.parentNode !== c) n.style.transform = ""; });
    if (!c) return;
    var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    c.firstChild.style.transform = "rotateY(" + (x * 10) + "deg) rotateX(" + (-y * 8) + "deg)";
  });

  function full() {
    applyText(); renderCarte(); renderTeam(); heroCaption(heroI < 0 ? 0 : heroI, true);
    if ($("#bk").open) renderBk();
    if ($("#sc").value) track($("#sc").value);
    scenes();
  }

  /* ---------- départ ---------- */
  if (!reduce) {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    new MutationObserver(function () { if ($("#bk").open) lenis.stop(); else lenis.start(); }).observe($("#bk"), { attributes: true, attributeFilter: ["open"] });
  }
  full(); headerWatch();
  addEventListener("load", function () { if (!reduce) ScrollTrigger.refresh(); });
})();
