document.getElementById("startBtn").addEventListener("click", function () {

  const cover = document.querySelector(".cover");

  cover.classList.add("hide");

  setTimeout(() => {

    cover.innerHTML = `

      <h1>Hi Birthday Boy. 🤍</h1>

      <p>I couldn't wrap this in paper...

      so I wrapped it in code.</p>

      <button id="nextBtn">Next →</button>

    `;

    cover.classList.remove("hide");

  }, 600);

});
    
