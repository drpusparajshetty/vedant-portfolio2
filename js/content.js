/* ============================================================
   VEDANT SHETTY — SITE CONTENT
   ============================================================
   This is the ONLY file you need to edit to update the website.

   HOW TO UPDATE:
   • Text  — change any text between the quotes "..."
   • Links — replace the url between the quotes. Use url: "" to hide it.
   • Photos — put the new photo in assets/images/ and write its
     filename here, e.g.  img: "assets/images/my-new-photo.jpg"
   • Add an achievement — copy one whole { ... } block in a list,
     paste it below, and edit it. Remove one by deleting its block.
     Keep the comma between blocks!

   After committing, Cloudflare redeploys automatically (~1 min).
   ============================================================ */

window.SITE = {

  meta: {
    title: "Vedant Shetty — National Chess Champion of Saint Vincent & the Grenadines",
    description: "The portfolio of Vedant Shetty: national chess champion at ten, medallist across the Americas, founder of his school's chess club, and four-time national science fair winner."
  },

  hero: {
    eyebrow: "Saint Vincent & the Grenadines",
    name: "Vedant Shetty",
    line: "National chess champion, aged ten.",   /* italic serif line under the name */
    lead: "Three-time under-18 champion. Winner of the 2025 open title against the country's adult field. Medallist from Trinidad to Peru — and a four-time national science fair winner.",
    photo: "assets/images/portrait.jpg",
    stats: [
      { value: "2026", label: "Open National Champion" },
      { value: "CM",   label: "Conditional title, FIDE" },
      { value: "5–0",  label: "As team captain, twice" },
      { value: "4×",   label: "Science fair, best project" }
    ]
  },

  /* Official profiles — shown under the hero and in the footer */
  profiles: [
    { text: "FIDE 36100196", url: "https://ratings.fide.com/profile/36100196" },
    { text: "Chess.com",     url: "https://www.chess.com/players/vedant-shetty" },
    { text: "Wikipedia",     url: "https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines_Chess_Championship" }
  ],

  /* ---------- THE NATIONAL RECORD (scoresheet) ---------- */
  record: {
    eyebrow: "The national record",
    heading: "Five seasons, written like a scoresheet.",
    intro: "Under-18 national champion of Saint Vincent and the Grenadines three years running — then, in 2025, winner of the open category to become the overall national champion.",
    introLink: { text: "Verified on Wikipedia", url: "https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines_Chess_Championship" },
    rows: [
      { year: "2022", event: "SVG National Championship",        result: "U18 Champion" },
      { year: "2023", event: "SVG National Championship",        result: "U18 Champion" },
      { year: "2024", event: "SVG National Championship",        result: "U18 Champion · 2nd, Adult Open" },
      { year: "2025", event: "SVG National Championship",        result: "Overall Champion — Open", strong: true },
      { year: "2026", event: "Tyrone Jack Memorial Open",        result: "Champion", link: { text: "press", url: "https://www.searchlight.vc/sports/2026/01/23/vedant-shetty-tops-chess-tournament/" } }
    ],
    photos: [
      { img: "assets/images/trophy-2022.jpg",   caption: "2022 · The first title, age six" },
      { img: "assets/images/champion-2025.jpg", caption: "2025 · Overall national champion, with the adult field" },
      { img: "assets/images/trophies-2025.jpg", caption: "“The game is just begin-ning.”" }
    ]
  },

  /* ---------- INTERNATIONAL ----------
     tag examples: "Gold ×2 · CM", "Bronze", "Best in the Caribbean" */
  world: {
    eyebrow: "The international stage",
    heading: "Medals across the Americas.",
    intro: "Podium finishes at the Central American & Caribbean Youth Chess Festival and the Pan-American Youth Championship — often as the lone player carrying the Vincentian flag.",
    cards: [
      {
        img: "assets/images/podium-elsalvador.jpg",
        tag: "Gold ×2 · CM title",
        where: "El Salvador · 2024 · U8 Open",
        title: "CAC Youth Festival — double gold",
        text: "Gold absolute and gold in blitz, earning a conditional Candidate Master title — SVG's first CAC medal in the festival's nineteen years.",
        links: [{ text: "Press", url: "https://www.searchlight.vc/sports/2024/08/09/player-returns-gold-for-svg-in-americas-chess-festival/" }]
      },
      {
        img: "assets/images/podium-puertorico.jpg",
        tag: "Gold · Silver",
        where: "Dorado, Puerto Rico · 2025 · U10 Open",
        title: "CAC Youth Festival — gold & silver",
        text: "Gold in blitz and silver absolute at the 20th festival.",
        links: [{ text: "Press", url: "https://www.stvincenttimes.com/st-vincent-chess-prodigy-vedant-shetty-central-american-caribbean-youth-chess-festival/" }]
      },
      {
        img: "assets/images/panam-lima.jpg",
        tag: "Bronze",
        where: "Lima, Peru · 2025 · U10 Open",
        title: "Pan-American Youth — bronze, rapid",
        text: "Third in the rapid category — the only Caribbean player to win a trophy.",
        links: [{ text: "Press", url: "https://www.searchlight.vc/sports/2025/08/08/svg-rep-podium-position-35th-pan-american-youth-chess-championship/" }]
      },
      {
        img: "assets/images/panam-orlando.jpg",
        tag: "Best in the Caribbean",
        where: "Orlando, USA · 2024 · U8 Open",
        title: "Pan-American Youth — 8th place",
        text: "Placed 8th of the under-8 field and finished as the highest scorer from the entire Caribbean region.",
        links: [{ text: "Barbados Today", url: "https://barbadostoday.bb/2024/07/24/del-castilho-kinged-in-corbin-chess-open/" }]
      },
      {
        img: "assets/images/podium-trinidad.jpg",
        tag: "4th place",
        where: "Trinidad · 2023 · U8 Open",
        title: "CAC Youth Festival — debut",
        text: "First international festival, just off the podium at age seven.",
        links: []
      },
      {
        img: "assets/images/online-trophy.jpg",
        tag: "First place ×4",
        where: "Online · Romania & the Caribbean",
        title: "The online circuit",
        text: "First at three Grand Prix Chesscraft Romania U8 stages; 2nd U1500 and best U1700 at the Heat Rapids Caribbean Open.",
        links: []   /* add the Tornello results link here when you have it */
      }
    ]
  },

  /* ---------- TEAM CAPTAIN ---------- */
  team: {
    eyebrow: "Team Saint Vincent",
    heading: "Captain, undefeated.",
    big: "5–0",
    intro: "Team leader for the Chatoyer Bilateral against Grenada in 2024 and 2025, winning every game — a perfect five from five, twice. Captain again for the inaugural Fedon Bilateral in Grenada, jointly awarded Best Male Player.",
    links: [
      { text: "Fedon Bilateral — press",    url: "https://www.stvincenttimes.com/svg-clinch-inaugural-fedon-bilateral-chess-trophy/" },
      { text: "Chatoyer 2026 — press",      url: "https://www.searchlight.vc/sports/2026/03/20/svg-holds-bilateral-youth-chess-title/" }
    ],
    photos: [
      { img: "assets/images/team-flag.jpg",   caption: "Team SVG with the national flag" },
      { img: "assets/images/fedon.jpg",       caption: "Receiving the Fedon trophy, Grenada" },
      { img: "assets/images/team-yellow.jpg", caption: "The winning unit" }
    ]
  },

  /* ---------- CHESS CLUB ---------- */
  club: {
    eyebrow: "Giving the game back",
    heading: "The Calliaqua Anglican School Chess Club.",
    intro: "With motivation from my principal, I started a chess club at my school — writing a teaching presentation that covers the fundamentals, from the rules of each piece to basic strategy and the educational value of chess. Sessions run weekly in the school library, where students learn and play under peer-led guidance.",
    photos: [
      { img: "assets/images/club-classroom.jpg", caption: "Teaching the fundamentals" },
      { img: "assets/images/club-library-1.jpg", caption: "Weekly sessions in the library" },
      { img: "assets/images/club-library-2.jpg", caption: "Learning by playing" },
      { img: "assets/images/club-donation.jpg",  caption: "New boards for the club" }
    ]
  },

  /* ---------- SCIENCE ---------- */
  science: {
    eyebrow: "Beyond the board",
    heading: "Four national science fairs. Four best projects.",
    intro: "Best outstanding project at the national science fair in 2022, 2023, 2024 and 2026 — with a regional environmental science silver alongside.",
    cards: [
      {
        img: "assets/images/science-potato.jpg",
        tag: "2022 · Best project",
        where: "National science fair · Primary",
        title: "“Potato Battery”",
        text: "Best outstanding project, primary category.",
        links: []   /* add the online video link here when you have it */
      },
      {
        img: "assets/images/science-globalwarming.jpg",
        tag: "2023 · Best project",
        where: "National science fair · Lower primary",
        title: "“Is Global Warming Real?”",
        text: "Best outstanding project, lower primary category.",
        links: []
      },
      {
        img: "assets/images/science-roof.jpg",
        tag: "2024 · Best project",
        where: "National science fair · Higher primary",
        title: "“Which colour roof keeps the house coolest?”",
        text: "Best outstanding project — followed in 2026 by “Hydrogen Car”, which won again.",
        links: []
      },
      {
        img: "assets/images/science-yes.jpg",
        tag: "2025 · Silver",
        where: "Macmillan Education · Regional",
        title: "Young Environmental Scientist",
        text: "Second place, primary category, with the SVG Wildlife Warriors.",
        links: []
      },
      {
        img: "assets/images/eccb-stamp.jpg",
        tag: "Winner · Age 6",
        where: "Eastern Caribbean Central Bank",
        title: "40th anniversary stamp design",
        text: "Winner of the 5–11 category across the Eastern Caribbean.",
        links: []
      },
      {
        img: "assets/images/planet-video.jpg",
        tag: "Winner",
        where: "Better Climate4MyHealth contest",
        title: "“A Planet in Peril and a Promise to Keep”",
        text: "Winning video entry.",
        links: []
      }
    ]
  },

  /* ---------- MEDIA ---------- */
  media: {
    eyebrow: "In the press",
    heading: "“Rising Island Genius.”",
    quote: "From academic excellence to innovative projects and meaningful community impact, he's proving that age is no barrier to brilliance.",
    quoteSource: "Smile Jamaica · Television Jamaica",
    video: {
      img: "assets/images/tvj-interview.jpg",
      url: "https://www.youtube.com/watch?v=tqolHt7idCg",
      caption: "Watch the interview — TVJ Smile Jamaica, November 2025"
    },
    links: [
      { text: "TVJ Smile Jamaica — Young Star Rising",           url: "https://www.youtube.com/watch?v=tqolHt7idCg" },
      { text: "Smile Jamaica — #CaribbeanCheckIn",               url: "https://www.facebook.com/smilejamtvj/posts/1355395396376284/" },
      { text: "St Vincent Times — double medal in Puerto Rico",  url: "https://www.stvincenttimes.com/st-vincent-chess-prodigy-vedant-shetty-central-american-caribbean-youth-chess-festival/" },
      { text: "Searchlight — Pan-American podium in Peru",       url: "https://www.searchlight.vc/sports/2025/08/08/svg-rep-podium-position-35th-pan-american-youth-chess-championship/" },
      { text: "Barbados Today — the region's top scorer",        url: "https://barbadostoday.bb/2024/07/24/del-castilho-kinged-in-corbin-chess-open/" },
      { text: "Searchlight — Tyrone Jack Memorial champion",     url: "https://www.searchlight.vc/sports/2026/01/23/vedant-shetty-tops-chess-tournament/" }
    ]
  },

  /* ---------- ABOUT / CLOSING ---------- */
  about: "I'm a student of Calliaqua Anglican Primary School — a ten-year-old who loves music, building Legos and doing science experiments. I'm a bookworm who loves boardgames and videogames, and chess is my favourite indoor activity. I also love Subway pizza and fried chicken.",

  ferry: {
    img: "assets/images/ferry-terminal.jpg",
    text: "You can always catch me on Saturday afternoons at the ferry terminal, with the SVG chess enthusiasts."
  },

  footer: {
    line: "Vedant Shetty · Calliaqua Anglican Primary School · Saint Vincent and the Grenadines"
  }
};
