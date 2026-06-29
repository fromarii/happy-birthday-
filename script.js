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

Even though this little scrapbook is made of code, every page was made with love.

Thank you for being my safe place, my biggest comfort, and my favourite person.

I hope this birthday brings you every bit of happiness you deserve.

I love you. 🤍`
  },

  {
    type: "end",
    title: "The End 🤍",
    text: "There's one more surprise waiting for you..."
  }
];

let currentPage = -1;

document.getElementById("startBtn").addEventListener("click", nextPage);

document.addEventListener("click", function(e){

  if(e.target.id==="nextBtn"){
    nextPage();
  }

});

function nextPage(){

  currentPage++;

  const cover=document.querySelector(".cover");

  cover.classList.add("hide");

  setTimeout(()=>{

    showPage();

    cover.classList.remove("hide");

  },500);

}

function showPage(){

  const page=pages[currentPage];

  const cover=document.querySelector(".cover");

  if(page.type==="intro"){

    cover.innerHTML=`

      <h1>${page.title}</h1>

      <p>${page.text}</p>

      <button id="nextBtn">Next →</button>

    `;

  }

  else if(page.type==="photo"){

    cover.innerHTML=`

      <h1>${page.title}</h1>

      <div class="memory-page">

        <div class="photo-frame">

          <img src="${page.image}">

        </div>

        <p class="caption">

          ${page.caption}

        </p>

        <div class="doodles">

          ✦ ♡ ↗ ✿

        </div>

      </div>

      <button id="nextBtn">Next →</button>

    `;

  }
    else if(page.type==="letter"){

    cover.innerHTML=`

      <h1>${page.title}</h1>

      <p class="letter">

        ${page.text.replace(/\n/g,"<br><br>")}

      </p>

      <button id="nextBtn">Next →</button>

    `;

  }

  else if(page.type==="end"){

    cover.innerHTML=`

      <h1>${page.title}</h1>

      <p>${page.text}</p>

      <button onclick="location.reload()">Start Again ♡</button>

    `;

  }
