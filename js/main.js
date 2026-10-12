/* Renders the page from window.SITE (js/content.js).
   You should not need to edit this file to update content. */
(function () {
  const S = window.SITE;
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const link = (l) => l && l.url ? `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.text)}</a>` : "";

  document.title = S.meta.title;
  const md = document.createElement("meta");
  md.name = "description"; md.content = S.meta.description;
  document.head.appendChild(md);

  /* hero */
  $("#hero-eyebrow").textContent = S.hero.eyebrow;
  $("#hero-name").textContent = S.hero.name;
  $("#hero-line").textContent = S.hero.line;
  $("#hero-lead").textContent = S.hero.lead;
  $("#hero-img").src = S.hero.photo;
  $("#hero-img").alt = S.hero.name;
  $("#stats").innerHTML = S.hero.stats.map(s =>
    `<div><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");
  $("#profiles").innerHTML = S.profiles.map(link).join("");

  const eyebrow = (t) => `<div class="eyebrow rv">${esc(t)}</div>`;
  const trio = (list) => `<div class="trio">` + list.map(p =>
    `<figure class="fr rv"><div class="fim"><img src="${esc(p.img)}" alt="${esc(p.caption)}" loading="lazy"></div>
     <figcaption>${esc(p.caption)}</figcaption></figure>`).join("") + `</div>`;
  const gallery = (list) => `<div class="gallery">` + list.map(c =>
    `<article class="gcard rv">
       <div class="gim"><img src="${esc(c.img)}" alt="${esc(c.title)}" loading="lazy">
         ${c.tag ? `<span class="tag">${esc(c.tag)}</span>` : ""}</div>
       <div class="gb">
         <span class="where">${esc(c.where)}</span>
         <h3>${esc(c.title)}</h3>
         <p>${esc(c.text)}</p>
         <span class="lks">${(c.links || []).map(link).join("")}</span>
       </div>
     </article>`).join("") + `</div>`;

     /* news */
  $("#news").innerHTML = `<div class="wrap">
    ${eyebrow(S.media.eyebrow)}
    <h2 class="rv">${esc(S.media.heading)}</h2>
    <div class="mediarow">
      <a class="tv rv" href="${esc(S.media.video.url)}" target="_blank" rel="noopener" aria-label="Watch the interview">
        <img src="${esc(S.media.video.img)}" alt="Television interview">
        <span class="play"><i>▶</i></span>
        <figcaption>${esc(S.media.video.caption)}</figcaption>
      </a>
      <div class="rv">
        <blockquote>${esc(S.media.quote)}<footer>${esc(S.media.quoteSource)}</footer></blockquote>
        <div class="presslist">${S.media.links.map(link).join("")}</div>
      </div>
    </div>
  </div>`;

  /* record */
  $("#record").innerHTML = `<div class="wrap">
    ${eyebrow(S.record.eyebrow)}
    <h2 class="rv">${esc(S.record.heading)}</h2>
    <p class="intro rv">${esc(S.record.intro)} ${link(S.record.introLink)}.</p>
    <div class="sheet rv">${S.record.rows.map(r =>
      `<div class="srow${r.strong ? " strong" : ""}">
         <span class="yr">${esc(r.year)}</span>
         <span class="ev"><span>${esc(r.event)}</span></span>
         <span class="rs">${esc(r.result)}${r.link ? link(r.link) : ""}</span>
       </div>`).join("")}
    </div>
    ${trio(S.record.photos)}
  </div>`;

  /* world */
  $("#world").innerHTML = `<div class="wrap">
    ${eyebrow(S.world.eyebrow)}
    <h2 class="rv">${esc(S.world.heading)}</h2>
    <p class="intro rv">${esc(S.world.intro)}</p>
    ${gallery(S.world.cards)}
  </div>`;

  /* team */
  $("#team").innerHTML = `<div class="wrap">
    ${eyebrow(S.team.eyebrow)}
    <h2 class="rv">${esc(S.team.heading)}</h2>
    <div class="team rv">
      <div class="big serif">${esc(S.team.big)}</div>
      <div>
        <p class="intro">${esc(S.team.intro)}</p>
        <div class="links">${S.team.links.map(link).join("")}</div>
      </div>
    </div>
    ${trio(S.team.photos)}
  </div>`;

  /* club */
  $("#club").innerHTML = `<div class="wrap">
    ${eyebrow(S.club.eyebrow)}
    <h2 class="rv">${esc(S.club.heading)}</h2>
    <p class="intro rv">${esc(S.club.intro)}</p>
    <div class="trio" style="grid-template-columns:repeat(4,1fr)">${S.club.photos.map(p =>
      `<figure class="fr rv"><div class="fim"><img src="${esc(p.img)}" alt="${esc(p.caption)}" loading="lazy" style="height:200px"></div>
       <figcaption>${esc(p.caption)}</figcaption></figure>`).join("")}
    </div>
  </div>`;
  if (window.matchMedia("(max-width:760px)").matches)
    $("#club .trio").style.gridTemplateColumns = "1fr 1fr";

  /* science */
  $("#science").innerHTML = `<div class="wrap">
    ${eyebrow(S.science.eyebrow)}
    <h2 class="rv">${esc(S.science.heading)}</h2>
    <p class="intro rv">${esc(S.science.intro)}</p>
    ${gallery(S.science.cards)}
  </div>`;

  /* media */
  $("#media").innerHTML = `<div class="wrap">
    ${eyebrow(S.media.eyebrow)}
    <h2 class="rv">${esc(S.media.heading)}</h2>
    <div class="mediarow">
      <a class="tv rv" href="${esc(S.media.video.url)}" target="_blank" rel="noopener" aria-label="Watch the interview">
        <img src="${esc(S.media.video.img)}" alt="Television interview">
        <span class="play"><i>▶</i></span>
        <figcaption>${esc(S.media.video.caption)}</figcaption>
      </a>
      <div class="rv">
        <blockquote>${esc(S.media.quote)}<footer>${esc(S.media.quoteSource)}</footer></blockquote>
        <div class="presslist">${S.media.links.map(link).join("")}</div>
      </div>
    </div>
  </div>`;

  /* about strip, closing, footer */
  $("#about-text").textContent = S.about;
  $("#ferry").style.backgroundImage = `url('${S.ferry.img}')`;
  $("#ferry-text").textContent = S.ferry.text;
  $("#footer-line").textContent = S.footer.line;
  $("#footer-links").innerHTML = S.profiles.map(link).join("");

  /* scroll reveal */
  const io = ("IntersectionObserver" in window) &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }), { rootMargin: "0px 0px -8% 0px" })
    : null;
  document.querySelectorAll(".rv").forEach(el => io ? io.observe(el) : el.classList.add("in"));
})();
