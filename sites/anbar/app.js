/* Anbar — institut et hammam de démonstration. Défilement : GSAP + ScrollTrigger + Lenis, servis en local. */
(function () {
  "use strict";
  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return [].slice.call((c || document).querySelectorAll(s)); };
  var S = { lang: "fr", cur: "DZD", cat: "hammam", sel: {}, who: "any", day: "", slot: "" };
  var G = { amt: 10000, to: "", msg: "", code: "CAD-" + (10000 + Math.floor(Math.random() * 89999)) };
  var reduce = root.className.indexOf("static") > -1 || !window.gsap || !window.ScrollTrigger;
  if (reduce && root.className.indexOf("static") < 0) root.className += " static";
  var SV = {}; D.svc.forEach(function (s) { SV[s.id] = s; });
  var TM = {}; D.team.forEach(function (t) { TM[t.id] = t; });
  function T_() { return T[S.lang]; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function store(k, v) { try { localStorage.setItem("anbar-" + k, JSON.stringify(v)); } catch (e) {} }
  function load(k) { try { return JSON.parse(localStorage.getItem("anbar-" + k)); } catch (e) { return null; } }
  var ISO = function (s) { return "⁦" + s + "⁩"; };

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
  function days() { var a = [], d = new Date(); d.setHours(12, 0, 0, 0); for (var i = 1; a.length < 14; i++) { var x = new Date(d); x.setDate(d.getDate() + i); a.push(x); } return a; }
  function iso(d) { return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  function fromIso(s) { var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2], 12); }
  function fmtLong(d, l) { return new Intl.DateTimeFormat(loc(l), { weekday: "long", day: "numeric", month: "long" }).format(d); }
  function taken(dayIso, i) { var h = 0, s = dayIso + S.who; for (var k = 0; k < s.length; k++) h = (h * 31 + s.charCodeAt(k)) >>> 0; return ((h >> (i % 11)) + i * 5) % 6 === 0; }
  function chosen() { return Object.keys(S.sel).filter(function (k) { return S.sel[k]; }); }
  function totals() { var p = 0, m = 0; chosen().forEach(function (k) { p += SV[k].p; m += SV[k].m; }); return { p: p, m: m, n: chosen().length }; }
  function pname(id) { return TM[id].n[S.lang]; }

  /* ---------- textes ---------- */
  function applyText() {
    var t = T_();
    root.lang = S.lang; root.dir = t.dir; document.title = t.title;
    $$("[data-t]").forEach(function (e) { e.textContent = t[e.getAttribute("data-t")]; });
    $$("#nav a").forEach(function (a, i) { a.textContent = t.nav[i]; });
    $$(".sw button").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-l") === S.lang); });
    $("#hl h1").textContent = t.heroH; $("#hl p").textContent = t.heroP; $("#hsc").textContent = t.scroll;
    $("#rit h2").textContent = t.ritH; $("#rit .sh p").textContent = t.ritP;
    $("#carte h2").textContent = t.carteH; $("#carte .sh p").textContent = t.carteP;
    $("#gift h2").textContent = t.giftH; $("#gift .sh p").textContent = t.giftP;
    $("#gh1").textContent = t.gAmt; $("#gh2").textContent = t.gTo; $("#gh3").textContent = t.gMsg;
    $("#gn").placeholder = t.gToPh; $("#gn").setAttribute("aria-label", t.gTo); $("#gx").placeholder = t.gMsgPh; $("#gx").setAttribute("aria-label", t.gMsg);
    $("#gbtn").textContent = t.gBtn; $("#gnote").textContent = t.gNote;
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
    $("#waf").href = "https://wa.me/" + D.wa + "?text=" + encodeURIComponent(T.fr.waHead);
  }

  /* ---------- hero : l'anneau ---------- */
  function buildRing() {
    $("#ring").innerHTML = D.ring.map(function (f, i) { return '<div class="fc" style="--i:' + i + '"><img src="assets/img/' + f.img + '" alt="" style="object-position:' + f.pos + '" decoding="async"' + (i === 0 ? ' fetchpriority="high"' : "") + "></div>"; }).join("");
    $("#hdots").innerHTML = D.ring.map(function (_, i) { return "<i" + (i === 0 ? ' class="on"' : "") + "></i>"; }).join("");
  }
  var capI = -1;
  function heroCaption(i, force) {
    if (i === capI && !force) return; capI = i;
    var t = T_(), b = $("#hcap b"), s = $("#hcap span"), btn = $("#hbtn");
    var set = function () { b.textContent = t.ringN[i]; s.textContent = t.ringS[i]; btn.textContent = t.bookShort + " · " + t.from + " " + money(SV[D.ring[i].svc].p); };
    $$("#hdots i").forEach(function (e, k) { e.classList.toggle("on", k === i); });
    if (reduce || force) { set(); return; }
    gsap.to("#hcap > *", { opacity: 0, y: 8, duration: 0.14, overwrite: true, onComplete: function () { set(); gsap.to("#hcap > *", { opacity: 1, y: 0, duration: 0.3, stagger: 0.04 }); } });
  }

  /* ---------- rituel ---------- */
  function renderRit() {
    if (!$("#rpic img")) $("#rpic").innerHTML = D.steps.map(function (s, i) { return '<img src="assets/img/' + s.img + '" alt="" loading="lazy" decoding="async" style="object-position:' + s.pos + '"' + (i === 0 ? ' class="on"' : "") + ">"; }).join("");
    $("#rsteps").innerHTML = D.steps.map(function (s, i) { return '<div class="rs' + (reduce || i === 0 ? " on" : "") + '"><i>' + (i + 1) + "</i><h3>" + esc(s.t[S.lang]) + "</h3><p>" + esc(s.d[S.lang]) + "</p></div>"; }).join("");
  }
  function ritActive(i) {
    $$("#rpic img").forEach(function (im, k) { im.classList.toggle("on", k === i); });
    $$(".rs").forEach(function (r, k) { r.classList.toggle("on", k === i); });
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
    var t = T_(), x = totals(), b = $("#sbar"), open = $("#bk").open;
    b.classList.toggle("on", x.n > 0 && !open);
    document.body.classList.toggle("sb", x.n > 0 && !open);
    $("#sbar b").textContent = t.sel(x.n);
    $("#sbar span").textContent = money(x.p) + " · " + dur(x.m);
    $("#sgo").textContent = t.bookShort;
  }
  function renderTeam() {
    var t = T_();
    $(".tm").innerHTML = D.team.map(function (m) {
      return '<div class="tc"><div class="mono" aria-hidden="true">' + esc(m.n[S.lang].charAt(0)) + "</div><h3>" + esc(m.n[S.lang]) + '</h3><div class="r">' + esc(m.r[S.lang]) + "</div><p>" + esc(m.t[S.lang]) + '</p><button class="btn o" type="button" data-w="' + m.id + '">' + t.teamBtn + " " + esc(m.n[S.lang]) + "</button></div>";
    }).join("");
  }

  /* ---------- carte cadeau ---------- */
  function renderGift() {
    var t = T_(), f = T.fr;
    $("#gc").innerHTML = D.gift.map(function (a) { return '<button type="button" data-g="' + a + '" aria-pressed="' + (a === G.amt) + '">' + money(a) + "</button>"; }).join("");
    $("#ga").textContent = money(G.amt);
    $("#gt").textContent = t.gCardTo + " " + (G.to || "…");
    $("#gm").textContent = G.msg || t.gMsgPh;
    $("#gv").textContent = t.gCardValid + " · " + G.code;
    var msg = f.waGift + "\n" + f.waCode + " : " + G.code + "\n" + f.waGAmt + " : " + da(G.amt) + (G.to ? "\n" + f.waGTo + " : " + G.to : "") + (G.msg ? "\n" + f.waGMsg + " : " + G.msg : "");
    $("#gbtn").href = "https://wa.me/" + D.wa + "?text=" + encodeURIComponent(msg);
  }

  /* ---------- scènes ---------- */
  var ctx = null, lenis = null;
  function scenes() {
    if (reduce) { gsap && 0; return; }
    if (ctx) ctx.revert();
    ctx = gsap.context(function () {
      var rtl = S.lang === "ar" ? -1 : 1, mob = innerWidth < 860, ring = $("#ring");
      var R = ring.offsetWidth * 1.02;
      gsap.set(ring, { z: -R, rotationX: -5, rotationY: 0 });
      var st = { a: 0 };
      gsap.to(ring, { rotationY: -300 * rtl, ease: "none", scrollTrigger: { trigger: "#hero", start: "top top", end: "+=" + (mob ? 320 : 400) + "%", pin: true, scrub: 0.8, anticipatePin: 1,
        onUpdate: function (s) { heroCaption(Math.min(5, Math.round(s.progress * 5))); } } });
      gsap.from("#hl > *", { y: 24, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power2.out", delay: 0.2 });
      gsap.from(ring, { opacity: 0, duration: 1.2, delay: 0.1 });
      $$(".rs").forEach(function (r, i) { ScrollTrigger.create({ trigger: r, start: "top 60%", end: "bottom 60%", onToggle: function (s) { if (s.isActive) ritActive(i); } }); });
    });
    ScrollTrigger.refresh();
  }
  function headerWatch() {
    var hd = $("#hd");
    function run() {
      var dark = false;
      ["#hero", "#gift", "#suivi", "footer"].forEach(function (s) { var r = $(s).getBoundingClientRect(); if (r.top < 34 && r.bottom > 34) dark = true; });
      var hr = $("#hero").getBoundingClientRect();
      hd.classList.toggle("dark", dark);
      hd.classList.toggle("solid", scrollY > 40 && !(hr.top <= 1 && hr.bottom >= 68));
    }
    if (reduce) { addEventListener("scroll", run, { passive: true }); addEventListener("resize", run); } else { gsap.ticker.add(run); }
    run();
  }

  /* ---------- réservation ---------- */
  function openBk(ids, who) {
    if (ids) { S.sel = {}; ids.forEach(function (i) { S.sel[i] = true; }); }
    if (who) S.who = who;
    $("#bkf").hidden = false; $("#ok").hidden = true; $("#er").textContent = "";
    renderBk();
    if (!$("#bk").open) $("#bk").showModal();
    sbar();
  }
  function renderBk() {
    var t = T_(), h = "";
    D.cats.forEach(function (c) {
      h += "<h5>" + esc(c.n[S.lang]) + "</h5>";
      D.svc.filter(function (s) { return s.c === c.id; }).forEach(function (s) {
        h += '<label class="ck"><input type="checkbox" value="' + s.id + '"' + (S.sel[s.id] ? " checked" : "") + "><span>" + esc(s.n[S.lang]) + "</span><em>" + dur(s.m) + " · " + money(s.p) + "</em></label>";
      });
    });
    $("#bs").innerHTML = h;
    var who = [["any", t.anyone]].concat(D.team.map(function (m) { return [m.id, m.n[S.lang]]; }));
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
    $("#bt").innerHTML = D.slots.map(function (s, i) { var off = !S.day || taken(S.day, i); return '<button type="button" data-s="' + s + '"' + (off ? " disabled" : "") + ' aria-pressed="' + (S.slot === s) + '">' + ISO(s) + "</button>"; }).join("");
  }
  function renderSum() {
    var x = totals(), t = T_();
    $("#bsum").innerHTML = chosen().map(function (k) { return "<li><span>" + esc(SV[k].n[S.lang]) + "</span><span>" + money(SV[k].p) + "</span></li>"; }).join("") + (x.n ? "<li><span>" + t.dur + "</span><span>" + dur(x.m) + "</span></li>" : "");
    $("#btot").textContent = money(x.p);
  }
  function finish() {
    var t = T_(), er = $("#er"), x = totals(), f = T.fr;
    var name = $("#bn").value.trim(), ph = $("#bp").value.replace(/[^\d]/g, "");
    if (!x.n) { er.textContent = t.needSvc; return; }
    if (!S.day || !S.slot) { er.textContent = t.needSlot; return; }
    if (!name || ph.length < 6) { er.textContent = t.needName; return; }
    er.textContent = "";
    var code = "ANB-" + (10000 + Math.floor(Math.random() * 89999)), who = S.who === "any" ? f.waAny : TM[S.who].n.fr;
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
    if (/^\d{5}$/.test(c)) c = "ANB-" + c;
    var order = null, step = 0;
    if (c === "ANB-30415") { var d = new Date(); d.setDate(d.getDate() + 3); order = { code: c, svc: ["rituel"], who: "sabrine", day: iso(d), slot: "14:00" }; step = 3; }
    else (load("orders") || []).forEach(function (o) { if (o.code === c) { order = o; step = 1; } });
    var box = $("#st");
    if (!order) { box.innerHTML = '<p class="stm">' + esc(t.suiviNo) + "</p>"; return; }
    box.innerHTML = '<div class="stm"><b>' + esc(order.code) + "</b>" + esc(order.svc.map(function (k) { return SV[k].n[S.lang]; }).join(", ")) + "<br>" + esc(fmtLong(fromIso(order.day)) + ", " + order.slot + " · " + (order.who === "any" ? t.anyone : pname(order.who))) + "</div>" +
      t.steps.map(function (s, i) { return '<div class="stp' + (i < step ? " ok" : "") + '"><i>' + (i < step ? "✓" : i + 1) + "</i><b>" + esc(s) + "</b></div>"; }).join("");
  }

  /* ---------- événements ---------- */
  document.addEventListener("click", function (e) {
    var b;
    if ((b = e.target.closest("[data-l]"))) { S.lang = b.getAttribute("data-l"); full(); return; }
    if ((b = e.target.closest("#tabs button"))) { S.cat = b.getAttribute("data-c"); renderCarte(); return; }
    if ((b = e.target.closest(".row .ad"))) { var id = b.getAttribute("data-s"); S.sel[id] = !S.sel[id]; renderCarte(); return; }
    if ((b = e.target.closest("#gc [data-g]"))) { G.amt = +b.getAttribute("data-g"); renderGift(); return; }
    if (e.target.closest("#hbook") || e.target.closest("#sgo")) { openBk(); return; }
    if (e.target.closest("#hbtn")) { openBk([D.ring[capI < 0 ? 0 : capI].svc]); return; }
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
    if (e.target.id === "cur") { S.cur = e.target.value; heroCaption(capI < 0 ? 0 : capI, true); renderCarte(); renderGift(); if ($("#bk").open) renderBk(); }
  });
  document.addEventListener("input", function (e) {
    if (e.target.id === "gn") { G.to = e.target.value.trim(); renderGift(); }
    if (e.target.id === "gx") { G.msg = e.target.value.trim(); renderGift(); }
  });
  $("#sf").addEventListener("submit", function (e) { e.preventDefault(); track($("#sc").value); });
  $("#bk").addEventListener("close", function () { sbar(); if (lenis) lenis.start(); });
  $("#card").addEventListener("pointermove", function (e) {
    if (reduce || e.pointerType === "touch") return;
    var r = this.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    $("#cd").style.transform = "rotateY(" + (x * 16) + "deg) rotateX(" + (-y * 12) + "deg)";
  });
  $("#card").addEventListener("pointerleave", function () { $("#cd").style.transform = ""; });

  function full() {
    applyText(); renderRit(); renderCarte(); renderTeam(); renderGift(); heroCaption(capI < 0 ? 0 : capI, true);
    if ($("#bk").open) renderBk();
    if ($("#sc").value) track($("#sc").value);
    scenes();
  }

  buildRing();
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
