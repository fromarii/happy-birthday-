const pages = [
  {
    type: "intro",
    title: "Hi Baby. 🤍",
    text: "Happy Birthday ♡ a lil something for you cuz you will always be..."
  },

  {
    type: "photo",
    image: "images/photo1.jpeg",
    caption: "my batman 🦇🤍"
  },

  {
    type: "photo",
    image: "images/photo2.jpeg",
    caption: "also my superman 🦸🏻‍♂️🤍"
  },

  {
    type: "photo",
    image: "images/photo3.jpeg",
    caption: "and the cutest kid ever 🧸🤍"
  },

  {
    type: "photo",
    image: "images/photo4.jpeg",
    caption: "and forever my baby ♡"
  },

  {
    type: "letter",
    title: "Digi letter cuz i can't physically write one",
    text: `Happy Birthday, my jaan.

Thank you for completing me baby.

I wish i could do more, this aint my field but i tried.

Thank you for being my comfort, my peace, my favourite person,loml,my bf honestly everything.

I love you more than ive ever loved anything,anyone ❤️`
  },

  {
    type: "end",
    text: "🤍"
  }
];

let current = 0;

const cover = document.querySelector(".cover");
const pageBox = document.querySelector(".page");
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("bgMusic");

/* OPEN BUTTON */
openBtn.addEventListener("click", () => {
  cover.style.display = "none";
  pageBox.style.display = "flex";
  current = 0;
  renderPage();
});

/* RENDER */
function renderPage() {
  const page = pages[current];

  pageBox.classList.add("fade");

  setTimeout(() => {
    let html = "";

    if (page.type === "intro") {
      html = `
        <div>
          <h1>${page.title}</h1>
          <p>${page.text}</p>
          <button id="nextBtn">Next</button>
        </div>
      `;
    }

    else if (page.type === "photo") {
      html = `
        <div>
          <img src="${page.image}" />
          <p>${page.caption}</p>
          <button id="nextBtn">Next</button>
        </div>
      `;
    }

    else if (page.type === "letter") {
      html = `
        <div>
          <h1>${page.title}</h1>
          <p>${page.text.replace(/\n/g, "<br>")}</p>
          <button id="nextBtn">Next</button>
        </div>
      `;
    }

    else if (page.type === "end") {
      html = `
        <div class="last-tab">
          <p style="font-size: 2rem;">${page.text}</p>

          <a href="https://digibouquet.net/create-bouquet?b=JTdCJTIyZiUyMiUzQSU1QiUyMnJvc2UlMjIlMkMlMjJjYW1lbGxpYSUyMiUyQyUyMnR1bGlwJTIyJTJDJTIybGlseSUyMiUyQyUyMnBlb255JTIyJTJDJTIybG90dXMlMjIlMkMlMjJvcmNoaWQlMjIlMkMlMjJkYWlzeSUyMiU1RCUyQyUyMmclMjIlM0ElMjJncmVlbmVyeTQlMjIlMkMlMjJjJTIyJTNBJTIyYnVybnQtZWRnZSUyMiUyQyUyMnRvJTIyJTNBJTIyUmFmaWQlMjIlMkMlMjJmciUyMiUzQSUyMkFyaWklMjIlMkMlMjJtJTIyJTNBJTIySGFwcHklMjBCaXJ0aGRheSUyMGJhYnklMkMlMjBJJTIwbG92ZSUyMHlvdSUyMHNvJTIwc28lMjBtdWNoJTIwJUYwJTlGJTkyJThCJTIyJTJDJTIyYmclMjIlM0ElMjJtaWRuaWdodC1nYXJkZW4lMjIlN0Q="
             target="_blank"
             class="gift-link">
            here's something for my birthday boy ♡
          </a>
        </div>
      `;
    }

    pageBox.innerHTML = html;

    pageBox.classList.remove("fade");
  }, 200);
}

/* NEXT BUTTON */
document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "nextBtn") {
    current++;
    if (current < pages.length) {
      renderPage();
    }
  }
});
