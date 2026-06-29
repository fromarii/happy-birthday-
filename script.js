const pages = [
  {
    type: "intro",
    title: "Hi Birthday Boy. 🤍",
    text: "I couldn't wrap this in paper... so I wrapped it in code."
  },

  {
    type: "photo",
    title: "Chapter One 🤍",
    image: "images/photo1.jpeg",
    caption: "my batman 🦇🤍"
  },

  {
    type: "photo",
    title: "Chapter Two 🤍",
    image: "images/photo2.jpeg",
    caption: "also my superman 🦸🏻‍♂️🤍"
  },

  {
    type: "photo",
    title: "Chapter Three 🤍",
    image: "images/photo3.jpeg",
    caption: "cutest kid ever 🧸🤍"
  },

  {
    type: "photo",
    title: "Chapter Four 🤍",
    image: "images/photo4.jpeg",
    caption: "forever my baby ♡"
  },

  {
    type: "letter",
    title: "A little letter for you 🤍",
    text: `Happy Birthday, my jaan.

Today is all about you.

This scrapbook may be code, but every page is real feeling.

Thank you for being my comfort, my chaos, my everything.

I love you. 🤍`
  },

  {
    type: "end",
    title: "The End 🤍",
    text: "one last surprise... 🤍"
  }
];

let current = 0;

const cover = document.querySelector(".cover");

// initial load
renderPage();

// TAP ANYWHERE
document.addEventListener("click", () => {
  nextPage();
});

function nextPage() {
  current++;

  if (current >= pages.length) {
    current = pages.length - 1;
  }

  cover.classList.add("fade");

  setTimeout(() => {
    renderPage();
    cover.classList.remove("fade");
  }, 250);
}

function renderPage() {
  const page = pages[current];

  let html = "";

  if (page.type === "intro") {
    html = `
      <h1>${page.title}</h1>
      <p>${page.text}</p>
    `;
  }

  else if (page.type === "photo") {
    html = `
      <h1>${page.title}</h1>

      <div class="memory-page">
        <img src="${page.image}" class="photo"/>
        <p class="caption">${page.caption}</p>
        <div class="doodles">✦ ♡ ✿</div>
      </div>
    `;
  }

  else if (page.type === "letter") {
    html = `
      <h1>${page.title}</h1>
      <p class="letter">${page.text.replace(/\n/g, "<br>")}</p>
    `;
  }

  else if (page.type === "end") {
    html = `
      <h1>${page.title}</h1>
      <p>${page.text}</p>
      <div style="font-size:40px;">🤍</div>
    `;
  }

  cover.innerHTML = html;
}
